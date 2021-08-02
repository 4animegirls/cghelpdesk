export const addToken = (token) => ({
    type : 'ADD_TOKEN',
    payload: { token }
});

export const removeToken = () => ({
    type: 'REMOVE_TOKEN'
});