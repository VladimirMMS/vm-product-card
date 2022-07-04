import React from 'react'
import renderer from 'react-test-renderer'
import {ProductImage, ProductCard} from '../../src/components'
import { product2 } from '../data/product';

describe('ProductTitle', () => {
    
    test('It should show the product image component', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage img={product2.img} className='img-class'/>
                    )
                }

            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();


    })
  });