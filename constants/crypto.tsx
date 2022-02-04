import { Crypto } from "../interfaces/types";

export const crypto: Crypto[] = [
    {
        id: 1,
        name: 'Bitcoin',
        initials: 'BTC',
        image: require('../assets/images/btc.png'),
        value: 7215.68,
        metric: 1.82,
        icon: 'north-east',
        color: 'green',
    },
    {
        id: 2,
        name: 'Ethereum',
        initials: 'ETH',
        image: require('../assets/images/ethereum.png'),
        value: 146.83,
        metric: 1.46,
        icon: 'north-east',
        color: 'green',
    },
    {
        id: 3,
        name: 'XRP',
        initials: 'XRP',
        image: require('../assets/images/xrp.png'),
        value: 0.220568,
        metric: 2.47,
        icon: 'south-west',
        color: 'red',
    },

]