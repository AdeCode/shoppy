import React, { useEffect } from 'react'

function Pages() {

  useEffect(() => {
    fetch('/search?q=javascript')
    .then(response => {
        console.log(response)

    })
    .catch(error => {
        console.log(error)
    })
  
    
  }, [])
  
  return (
    <div>Pages</div>
  )
}

export default Pages