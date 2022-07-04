import React from 'react'
import renderer from 'react-test-renderer'
import {ProductTitle, ProductCard} from '../../src/components'
import { product1 } from '../data/product';

describe('ProductTitle', () => {
    test('It should  show the component correctly with the title customed', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom' className='custom-style'/>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();

    })
    test('It should show the product component name', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle title='Custom'/>
                    )
                }

            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();


    })
  });