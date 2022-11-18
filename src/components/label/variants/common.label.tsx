import type { FC } from 'react'

export interface ICommonLabel {
  name: string
}

export const CommonLabel: FC<ICommonLabel> = (props) => {
  return <div className='w-full text-end bg-base-800 text-white p-3 rounded-xl text-lg'>
    { props.name }
  </div>
}