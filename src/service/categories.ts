import {API_SERVICE} from "./index.ts";
import {Category} from "../types/category.ts";

// export const getCategories = async (): Promise<Category[]> => {
//     return await API_SERVICE.get('/v1/categories').then((response) => response.data);
// };

export const getCategories = async (): Promise<Category[]> => {
    return [
        { id: '1', name: 'Кино' },
        { id: '2', name: 'Театры'},
        { id: '3', name: 'Концерты'},
        { id: '4', name: 'Спорт'},
        { id: '5', name: 'Детям'},
        { id: '6', name: 'Туры'},
    ];
};

export const getCategory = async (id: string): Promise<Category> => {
    return await API_SERVICE.get(`/v1/categories/${id}`).then((response) => response.data);
};
