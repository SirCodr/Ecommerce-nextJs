import Image from "next/image"
import Link from "next/link"

const ProductItem = ({product}) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div style={{width: '100%', height: '100%'}}>
        <div style={{width: '100%', height: '100%'}}>
          <Image src={product.image} alt={product.name} width={300} height={300} />
        </div>
        <div>
          <span>{product.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
