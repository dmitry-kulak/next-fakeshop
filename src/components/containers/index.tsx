import { type IVariants, ContainerVariant } from '../label/types/variants'

// Variants
import { type IPriceLabel, PriceLabel } from '../label/variants/price.label';
import { type ICommonLabel, CommonLabel } from '../label/variants/common.label'

interface IContainerProps<V extends ContainerVariant> {
  variant : V,
  params  : IVariants[V]
}

export function Container<V extends ContainerVariant>({ variant, params }: IContainerProps<V>) {

  switch (variant) {
    case ContainerVariant.Price: 
      return <PriceLabel { ...params as IPriceLabel } />
    default: 
      return <CommonLabel { ...params as ICommonLabel } />
  }

}