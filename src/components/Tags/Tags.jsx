import React, { useEffect, useState } from 'react'
import Loading from '@/components/Layout/Loading'
import TagCard from '@/components/Tags/TagCard'
import { api } from '@/services/api'

const Tags = ({ handleTagClick }) => {
  const [tags, setTags] = useState([])
  
  useEffect(() => {
    api.get(`/assets/tags`).then(function(response){
      setTags(response.data)
    }).catch(function(error){
      console.log(error)
    })
  }, [])
  
  return (
    <section className='max-w-7xl px-8 mx-auto'>
      {!tags ? <Loading/> :
        <div className='flex flex-wrap lg:justify-between justify-center mt-10'>
          {tags.map((tag, index) => (
            <TagCard handleTagClick={handleTagClick} key={index} tag={tag}/>
          ))}
        </div>
      }
    </section>
  )
}

export default Tags
