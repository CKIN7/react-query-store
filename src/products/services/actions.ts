import { type Product, productsApi } from "..";
import { sleep } from "../../helper/sleep";


interface GetProductsOptions {
    filterKey?: string;
}

export const getProducts = async({ filterKey }:GetProductsOptions) => {
    await sleep(2)

    const filterUrl = filterKey ? `?category=${filterKey}` : '';

    const { data } = await productsApi.get<Product[]>(`/products${filterUrl}`);
    return data
}