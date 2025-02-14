import {API_SERVICE} from "./index.ts";
import {PaginationRequest, PaginationResponse} from "../types/pagination.ts";
import {Afisha, AfishaPreview} from "../types/afisha.ts";

export const searchAfishas = async (pagination?: PaginationRequest): Promise<PaginationResponse<AfishaPreview>> => {
    return await API_SERVICE.get('/api/v1/events', {
        params: {
            ...pagination,
        },
        paramsSerializer: {
            indexes: null,
        }
    }).then((response) => response.data);
};

export const getCategoryAfishas = async (categoryId: string, pagination?: PaginationRequest): Promise<PaginationResponse<AfishaPreview>> => {
    return await API_SERVICE.get(`/api/v1/categories/${categoryId}/events`, {
        params: {
            ...pagination,
        },
        paramsSerializer: {
            indexes: null,
        }
    }).then((response) => response.data);
};

export const getAfisha = async (id: string): Promise<Afisha> => {
    return await API_SERVICE.get(`/api/v1/events/${id}`).then((response) => response.data);
};