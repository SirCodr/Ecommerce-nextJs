import { useQuery } from "react-query"
import { getDataById } from "@services/api"
import { useCartContext } from "@context/CartContext"

const Product = ({id}) => {
  const { addCart } = useCartContext()
  const {isLoading, error, data} = useQuery(['productById'], () => {
    return getDataById(id)
  })
  
  if(isLoading) return 'cargando...'

  if(error) return 'error'

  if(data){
    return (
      <>
        <p>{data.id}</p>
        {data.name}
        <div>
          <button onClick={() => {addCart(data)}}>
            Add product
          </button>
        </div>
      </>
  )
  }
}

export default Product