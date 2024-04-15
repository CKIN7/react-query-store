import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Product, productActions } from ".."



export const useProductMutation = () => {

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onMutate: (product) => {
      const optimisticProduct = { id: Math.random(), ...product }

      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: product.category }],
        (old) => {
          if (!old) return [optimisticProduct]
          return [...old, optimisticProduct]
        })

      return {
        optimisticProduct: optimisticProduct
      }

    },
    onSuccess: (product, _, context) => {

      queryClient.removeQueries({
        queryKey: ['product', context?.optimisticProduct.id]
      })
      
      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: product.category }],
        (old) => {
          if (!old) return [product];
          // return [..old, product]

          return old.map(cacheProduct => {
            return cacheProduct.id === context?.optimisticProduct.id ? product : cacheProduct
          })
        })


    }
  })

  return mutation
}