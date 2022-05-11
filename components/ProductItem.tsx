import { useState } from "react";
import { AddProductToWishlistProps } from './AddProductToWishlist'
import dynamic from "next/dynamic";
//import { AddProductToWishlist } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
    return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
})

interface ProductItemProps {
    product: {
        id: number;
        title: string;
        price: number;
        formattedPrice: string;
    }
    onAddToWishlist: (id: number) => void;
}
export function ProductItem({ product, onAddToWishlist }: ProductItemProps) {
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
    return (
        <div>
            {product.title} - <b>{product.formattedPrice}</b>
            <button onClick={() => setIsAddingToWishlist(true)}>Add To Wishlist</button>
            {
                isAddingToWishlist &&
                <AddProductToWishlist
                    onAddToWishlist={() => onAddToWishlist(product.id)}
                    onRequestClose={() => setIsAddingToWishlist(false)} />
            }
        </div>
    )
}