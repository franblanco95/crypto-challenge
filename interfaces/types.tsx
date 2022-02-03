// Constants Interfaces

export interface Cripto {
    id: number,
    name: string,
    initials: string,
    image: string,
    value: number,
    metric: number,
    icon: string,
    color: string,
}

// Actions Interfaces

export interface AddAction {
    type: 'ADD_CRIPTO';
    payload?: Cripto;
}

export interface ReadAction {
    type: 'READ_DATA';
    payload?: Cripto[] | null;
}

export type Action = AddAction | ReadAction;