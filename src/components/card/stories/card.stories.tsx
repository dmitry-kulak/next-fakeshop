import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductData from '../json/data.json'
import { ProductCard } from '../index'

export default {
  title: 'Product Card',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});

Primary.args = Object.assign(ProductData, { id: '3' });