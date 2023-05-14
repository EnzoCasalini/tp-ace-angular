export interface Price {
    type: string;
    price: number;
}

export class Product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public likes: number,
        public isLiked: boolean,
        public prices: Price[],
        public date_added: Date,
    ) {}
}