import type { FC } from 'react'


export interface IPriceLabel {
  cost: number,
  sign: string,
}

export const defaultProps: IPriceLabel = {
  cost: Number(),
  sign: String(),
}

export const PriceLabel: FC<IPriceLabel> = (props ) => {

  const { cost, sign } = Object.assign(defaultProps, props)

  return <div className='w-full text-end bg-base-800 text-white p-3 rounded-xl text-lg'>
    { cost } { sign }
  </div>
  
}