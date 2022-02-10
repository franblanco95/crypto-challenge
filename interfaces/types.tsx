export interface Crypto {
    id: string;
    name: string;
    symbol: string;
    market_data: MarketData;
}

export interface MarketData {
    price_usd: number;
    percent_change_usd_last_24_hours: number;
}

export interface AddAction {
    type: 'ADD_CRYPTO';
    payload: Crypto;
}

export interface ReadAction {
    type: 'READ_DATA';
    payload: Crypto[];
}

export interface UpdateAction {
    type: 'UPDATE_DATA';
    payload: Crypto[]
}

export type Action = ReadAction | AddAction | UpdateAction;