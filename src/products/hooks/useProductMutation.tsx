import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Product, productActions } from ".."



export const useProductMutation = () => {

    const queryClient = useQueryClient()
  
    const mutation = useMutation({
        mutationFn: productActions.createProduct,
        onSuccess:  (product) => {
          queryClient.setQueryData<Product[]>(
            ['products', { filterKey: product.category }],
            (old) => {
              if (!old) return [product];
               return [...old, product]
          })

             
        }
    })

    return mutation
}