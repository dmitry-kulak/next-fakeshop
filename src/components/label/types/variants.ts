import type { IPriceLabel } from '../variants/price.label';
import type { ICommonLabel } from '../variants/common.label'

export const enum ContainerVariant {
  Default,
  Price
}

export interface IVariants {
  [ ContainerVariant.Default ]  : ICommonLabel
  [ ContainerVariant.Price ]    : IPriceLabel
}