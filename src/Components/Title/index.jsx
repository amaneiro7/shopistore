import React from 'react'

export const Title = ({ title, children }) => {
  return (
    <div className='flex items-center justify-center relative w-80 mb-6'>
      <h1 className='font-medium text-xl'>{title}</h1>
      {children}
    </div>
  )
}
