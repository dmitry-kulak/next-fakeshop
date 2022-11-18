import type { FC } from 'react'

export const Tag: FC<{ name: string }> = ({ name }) => {
  return <span className='p-3 rounded-xl text-sm font-bold shadow-md'>
    { name }
  </span>
}