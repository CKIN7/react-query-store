import { useMutation } from "@tanstack/react-query"
import { productActions } from ".."



export const useProductMutation = () => {
  
    const mutation = useMutation({
        mutationFn: productActions.createProduct,
        onMutate: async (data) => {
            console.log("onMutate", data)
        }
    })

    return mutation
}