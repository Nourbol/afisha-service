import {API_SERVICE} from "./index.ts";
import {Category} from "../types/category.ts";

export const getCategories = async (): Promise<Category[]> => {
    return await API_SERVICE.get('/api/v1/categories').then((response) => response.data);
};

export const getCategory = async (id: string): Promise<Category> => {
    return await API_SERVICE.get(`/api/v1/categories/${id}`).then((response) => response.data);
};
