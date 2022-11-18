import type { FC } from 'react'

export const Button: FC<object> = (props) => {
  return <button className='w-full p-4 rounded-xl bg-base-800 text-white'>
    В Корзину
  </button>
}