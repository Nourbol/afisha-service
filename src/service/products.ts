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

export const getCategoryProducts = async (categoryId: string, pagination?: PaginationRequest): Promise<AfishaPreview[]> => {
    return await API_SERVICE.get(`/v1/categories/${categoryId}/products`, {
        params: {
            ...pagination,
        },
        paramsSerializer: {
            indexes: null,
        }
    }).then((response) => response.data);
};

export const getViewedProducts = async (pagination?: Omit<PaginationRequest, 'sort'>): Promise<AfishaPreview[]> => {
    return await API_SERVICE.get('/v1/products/views', {
        params: {
            ...pagination,
        }
    }).then((response) => response.data);
};

export const getLikedProducts = async (pagination?: Omit<PaginationRequest, 'sort'>): Promise<AfishaPreview[]> => {
    return await API_SERVICE.get('/v1/products/likes', {
        params: {
            ...pagination,
        }
    }).then((response) => response.data);
};

export const getAfisha = async (id: string): Promise<Afisha> => {
    return await API_SERVICE.get(`/api/v1/events/${id}`).then((response) => response.data);
};

export const likeProduct = async (id: string): Promise<void> => {
    return await API_SERVICE.post(`/v1/products/${id}/likes`).then((response) => response.data);
};

export const unlikeProduct = async (id: string): Promise<void> => {
    return await API_SERVICE.delete(`/v1/products/${id}/likes`).then((response) => response.data);
};

export const getRecommendations = async (size: number): Promise<AfishaPreview[]> => {
    return await API_SERVICE.get(`/v1/products/recommendations`, { params: { size }}).then((response) => response.data);
};
