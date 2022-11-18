import type { FC } from 'react';
import type { Product } from '@prisma/client';

// Next Image
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

// Components 
import { Button } from '../button';
import { Separator } from '../common/separator';
import { ImagePagination } from '../image/pagination';
import { Tag } from '../tag';
import { Label } from '../label';

// Variants
import { ContainerVariant } from '../label/types/variants'

// TW Font Bindings
import Montserrat from '../../fonts/montserrat'

const ImageParams: Partial<StaticImageData> = {
  height  : 600,
  width   : 300,
} as const;

export interface ProductCardProps extends Product {
  productLink : string
}

export const ProductCard: FC<ProductCardProps> = (props) => {

  const Tags = [ props.category ].map(cat => <Tag name={ cat } key={ cat } />)
    
  // TODO: #8 [ Fix target ]: Need to fix tailwind color schema @Scarlatum  
  return <div className='bg-[#FFFFFF] flex flex-col rounded-xl gap-y-2 p-4 w-[360px] h-fit'>

    <div className={`${ Montserrat.variable  } font-sans rounded-lg p-4 border-4 border-gray-900 overflow-hidden`}>
      <Image 
        { ...ImageParams } 
        src={ props.image } 
        alt={ props.description } 
        className="object-cover h-full w-full"
      />
      <ImagePagination />
    </div>

    <div className='py-3'>
      <span className='font-bold text-sm'>Категории: </span> 
      { Tags }
    </div>

    <Separator />
    <strong>{ props.title }</strong>
    <Separator />

    <div className='flex flex-col gap-y-2'>
      <p className='text-sm'>{ props.description }</p>
      <Link href={ props.productLink }>
        <a className="text-sm mx-auto underline">
          Читать подробнее в разделе товара
        </a>
      </Link>
    </div>

    <Separator />

    <Label variant={ ContainerVariant.Price } params={{ cost: props.price.toNumber(), sign: '$' }}/>

    <div className='flex flex-col gap-y-3 gap-x-1'>
      <Button />
    </div>

  </div>

}

export default ProductCard