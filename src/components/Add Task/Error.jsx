import React from 'react'

function Error({error}) {
  return (
    <p className='text-red-400 h-4 font-semibold text-sm text-end'>{error || ""}</p>
  )
}

export default Error