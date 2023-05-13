import React from 'react'

export const LoadingCard = () => {
  const loadingArray = Array.from({ length: 12 }, (_, i) => i + 1)
  return (
    <>
      {loadingArray.map(element =>
        <div
          key={element}
          className='cursor-pointer w-56 h-60 rounded-lg bg-white'
        >
          <figure className='animate-pulse bg-slate-300/90 relative mb-2 w-full h-4/5 rounded-lg'>
            <span className='w-16 h-5 animate-pulse absolute bottom-0 left-0 bg-slate-400/90 rounded-lg text-black text-xs m-2 px-3 py-0.5 z-10' />
            <div />
            <span
              className='animate-pulse absolute top-0 right-0 w-6 h-6 m-2 bg-slate-400/90 rounded-full'
            />
          </figure>
          <p className='flex justify-between gap-10'>
            <span className='animate-pulse bg-slate-400/90 w-3/5 h-5 rounded-lg' />
            <span className='animate-pulse bg-slate-400/90 w-1/5 h-5 rounded-lg' />
          </p>
        </div>)}
    </>
  )
}
