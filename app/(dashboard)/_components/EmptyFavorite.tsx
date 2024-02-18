import Image from 'next/image'
import React from 'react'

const EmptyFavorite = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
        <Image src='/empty-favorites.svg' alt='favorite' height={240} width={240}/>
        <h2 className='text-2xl font-semibold mt-6'>No Favorite Boards</h2>
        <p className='text-muted-foreground textg-sm mt-2'>Try Favoriting a board</p>
    </div>
  )
}

export default EmptyFavorite