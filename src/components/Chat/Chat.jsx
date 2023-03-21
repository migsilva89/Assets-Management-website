import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:5000/')

const Chat = () => {
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')
  
  const sendMessage = () => {
    socket.emit('send_message', {
      message: message
    })
  }
  
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message)
    })
  }, [socket])
  
  return (
    <>
      <div className='flex justify-center border-2 py-4 px-8 m-10 bg-gray-800 gap-5'>
        <input placeholder='message' type='text' className='w-full' onChange={(event) => {
          setMessage(event.target.value)
        }
        }/>
        <button onClick={sendMessage} className='text-white bg-green-700 px-2 w-1/2'>Send Message</button>
      
      </div>
      <div className='text-red-500'>
        <h1>Messages:</h1>
        <p>{messageReceived}</p>
      </div>
    </>
  
  )
}

export default Chat
