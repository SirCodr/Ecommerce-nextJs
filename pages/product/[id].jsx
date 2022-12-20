import { QueryClient, QueryClientProvider } from "react-query"

import ProductDetail from "@components/ProductDetail"
import { useRouter } from "next/router"
import Link from "next/link"

const queryClient = new QueryClient()

function App() {
  const router = useRouter()
  const { id } = router.query

  return (
    <QueryClientProvider client={queryClient}>
      <Link href={'/'}>
        <button>Volver</button>
      </Link>
      <ProductDetail id={id} />
    </QueryClientProvider>
  )
}

export default App