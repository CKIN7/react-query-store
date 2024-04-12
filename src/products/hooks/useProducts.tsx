import { useQuery } from "@tanstack/react-query"
import { productActions } from "..";

interface useOptions {
    filterKey?: string;
}


export const useProducts = ({ filterKey }: useOptions) => {
  
    const { isLoading, isError, data: products = 0, isFetching } = useQuery({
        queryKey: ['products', { filterKey } ],
        queryFn: () => productActions.getProducts({ filterKey }),
        staleTime: 1000 * 60 * 60,
    })
  
    return {
        isLoading,
        isError,
        products,
        isFetching
    } 
}