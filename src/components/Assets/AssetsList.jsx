import React from 'react'
import Loading from '@/components/Layout/Loading'
import AssetCard from '@/components/Assets/AssetCard'

const AssetsList = ({ assets }) => {
  const { data } = assets
  
  return (
    <div>
      {!data ? (
        <Loading/>
      ) : (
        data.map((asset, index) => (
          <AssetCard key={index}/>
          /** <div key={index} className='border-2 p-10'>
           <h1>NAME: {asset.name}</h1>
           <h1>DESCRIPTION: {asset.description}</h1>
           {asset.tags.map((tag, index) => (
              <div key={index}>
                <h1>TAGS:</h1>
                <p>{tag}</p>
              </div> */
        ))
      )}
    </div>
  )
}

export default AssetsList
