export type PaginationRequest = {
    page?: number;
    size?: number;
    sort?: string[];
}

export type PaginationResponse<T> = {
    content: T[];
    totalElements: number;
}
