import React, { ReactNode } from 'react'

function Heading({children}:{children : ReactNode}) {
  return (
    <h1 className='text-center text-4xl font-extrabold'>{children}</h1>
  )
}

export default Heading