export const calcTotalPrice = items => items.reduce((acc, props) => acc += props.price , 0);