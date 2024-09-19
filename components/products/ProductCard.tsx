import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductsButton from "./AddProductsButton"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="border bg-white">
            <Image
                src={`/products/${product.image}.jpg`}
                alt={product.name}
                width={400}
                height={500}
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name} </h3>
                <p className="mt-5 font-black text-4xl text-amber-400">{formatCurrency(product.price)} </p>
                
                <AddProductsButton 
                    product={product}
                />
            </div>
        </div>
    )
}

export default ProductCard
