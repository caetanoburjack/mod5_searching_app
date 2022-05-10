interface ProductItemProps {
    product: {
        id: number;
        title: string;
        price: number;
    }
}
export function ProductItem({ product }: ProductItemProps) {
    return (
        <div>
            {product.title} - <b>{product.price}</b>
        </div>
    )
}