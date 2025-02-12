export type AfishaPreview = {
    id: string;
    title: string;
    startTime: string;
    location: string;
    price: number;
};

export type Afisha = {
    id: string;
    title: string;
    startTime: string;
    location: string;
    price: number;
    description: string;
    category: {
        id: string;
        name: string;
    };
};
