import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Product, productActions } from ".."



export const useProductMutation = () => {

    const queryClient = useQueryClient()
  
    const mutation = useMutation({
        mutationFn: productActions.createProduct,
        onSuccess:  (product) => {
          queryClient.invalidateQueries({
            queryKey: ['products', { filterKey: product.category }],
          })

             
        }
    })

    return mutation
}