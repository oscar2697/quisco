import AddProductForm from '@/components/products/AddProductForm'
import ProductForm from '@/components/products/ProductForm'
import Heading from '@/components/ui/Heading'
import React from 'react'

const createNewProduct = () => {
    return (
        <>
            <Heading>Nuevo Producto</Heading>

            <AddProductForm>
                <ProductForm/>
            </AddProductForm>
        </>
    )
}

export default createNewProduct
