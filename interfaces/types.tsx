export interface Crypto {
    id: number,
    name: string,
    initials: string,
    image: string,
    value: number,
    metric: number,
    icon: string,
    color: string,
}

export interface AddAction {
    type: 'ADD_CRYPTO';
    payload?: Crypto;
}

export interface ReadAction {
    type: 'READ_DATA';
    payload?: Crypto[] | null;
}

export type Action = AddAction | ReadAction;