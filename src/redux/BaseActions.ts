
export const init = () => {
    return {
        type: 'INIT'
    }
};

export const increment = (payload: any) => {
    return {
        type: 'INCREMENT',
        payload
    }
};

export const decrement = (payload: any) => {
    return {
        type: 'DECREMENT',
        payload
    }
};

/* export const addToCart = (payload: any) => {
    console.log('payload-------', payload);
    return {
        type: 'ADD_TO_CART',
        payload
    }
}; */