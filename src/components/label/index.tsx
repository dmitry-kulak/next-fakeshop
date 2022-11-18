import { type IVariants, ContainerVariant } from './types/variants'

// Variants
import { type IPriceLabel, PriceLabel } from './variants/price.label';
import { type ICommonLabel, CommonLabel } from './variants/common.label'

interface ILabelProps<V extends ContainerVariant> {
  variant : V,
  params  : IVariants[V]
}

export function Label<V extends ContainerVariant>({ variant, params }: ILabelProps<V>) {

  switch (variant) {
    case ContainerVariant.Price: 
      return <PriceLabel { ...params as IPriceLabel } />
    default: 
      return <CommonLabel { ...params as ICommonLabel } />
  }

}