import React from 'react'

const AssetsComponent = ({ assets }) => {
  const { data } = assets
  
  return (
    <div>
      {!data ? (
        <p>Loading...</p>
      ) : (
        data.map((asset, index) => (
          <div key={index} className='border-2 p-10'>
            <h1>NAME: {asset.name}</h1>
            <h1>DESCRIPTION: {asset.description}</h1>
            {asset.tags.map((tag, index) => (
              <div key={index}>
                <h1>TAGS:</h1>
                <p>{tag}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  )
}

export default AssetsComponent
