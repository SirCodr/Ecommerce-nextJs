import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import CircularProgress from "@mui/material/CircularProgress"
import Toast from "@components/Toast"

import { getAllData } from "@services/api"
import ProductItem from "@components/ProductItem"

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

function Home() {
  const { isLoading, error, data } = useQuery(["products"], getAllData)

  if (error) {
    return <Toast />
  }

  return (
      <div style={{ height: "100%", width: "100%", display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          Array.from(Object.values(data)).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
    </div>
  )
}
