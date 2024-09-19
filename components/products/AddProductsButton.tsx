'use client'

import { useStore } from "@/src/store"
import { Product } from "@prisma/client"

type AddProductsButtonProps = {
    product: Product
}

const AddProductsButton = ({product}: AddProductsButtonProps) => {
    const addToOrder = useStore((state) => state.addToOrder)

    return (
        <button 
            type="button" 
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" 
            onClick={() => addToOrder(product)}
        >
            Agregar
        </button>
    )
}

export default AddProductsButton
