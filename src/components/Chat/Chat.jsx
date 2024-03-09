import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { AuthContext } from '@/contexts/AuthContext'
import Loading from '@/components/Layout/Loading'

const socket = io.connect('wss://apiv1.assetsmanagement.website');

const Chat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [error, setError] = useState('')
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (!socket.connected) {
      setError('Unable to connect to server, please refresh.')
    }
    socket.on('receive_message', (data) => {
      console.log('Received message:', data)
      setMessages((prevMessages) => [...prevMessages, data])
    })

    return () => {
      socket.off('receive_message')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim()) {
      setError('Message cannot be empty')
      return
    }

    const newMessage = {
      message: message,
      username: user.nickName,
      self: true // flag the message as the user's own message
    }

    // add the new message to the state
    setMessages((prevMessages) => [...prevMessages, newMessage])

    // emit the message to the server
    socket.emit('send_message', newMessage)

    setMessage('')
  }

  if (!user) {
    return <Loading className='w-52 h-52'/>
  }

  return (
    <div className='h-screen py-10 mx-auto max-w-7xl w-full md:px-8 px-6'>
      <div className=' items-center space-y-2'>
        <div className='text-gray-100'>
          <h1 className='text-3xl'>Real-Time Chat</h1>
          <p>Discuss and exchange resources with other professionals in your field</p>
        </div>
        {error &&
          <p className='text-red-500'>{error}</p>
        }
        <form onSubmit={handleSubmit}>
          <input
            className='w-full p-2 rounded-md border border-blue-500 focus:border-blue-800 focus:outline-none'
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className='mt-5 p-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none'
            type='submit'
          >
            Send
          </button>
        </form>
        <div className='mt-10 '>
          {messages.map((msg, idx) => (
            <div key={idx} className={`my-5 ${msg.self ? 'text-right' : ''}`}>
              <p className='text-gray-600 text-sm py-2'>
                {new Date().toLocaleTimeString()}
              </p>
              <div className={`bg-gray-800 p-2 rounded-lg ${msg.self ? 'bg-blue-500 text-white' : ''}`}>
                <div className='flex items-center space-x-2'>
                  <div
                    className={`text-white w-8 h-8 rounded-full flex items-center justify-center ${msg.self ? 'bg-white text-blue-500' : 'bg-blue-500'}`}
                  >
                    {msg.username?.charAt(0).toUpperCase()}
                  </div>
                  <p className='text-gray-500'>{msg.username}: </p>
                  <p className='text-gray-200 text-sm pl-10'>{msg.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Chat

