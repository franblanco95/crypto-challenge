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

export interface Crypto2 {
    id: string;
    name: string;
    symbol: string;
    metrics: Metrics;
}

export interface Metrics {
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

export type Action = ReadAction | AddAction;