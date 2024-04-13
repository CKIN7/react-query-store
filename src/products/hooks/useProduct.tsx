import { useQuery } from "@tanstack/react-query"
import { productActions } from "..";

interface useOptions {
    id: number;
}


export const useProduct = ({ id }: useOptions) => {
    
  
    const { isLoading, isError, data: product, isFetching } = useQuery({
        queryKey: ['product', id ],
        queryFn: () => productActions.getProductById( id ),
        staleTime: 1000 * 60 * 60,
    })
  
    return {
        isLoading,
        isError,
        product,
        isFetching
    } 
}