

//Add item to cart

export const addCart = (Product) => {
    return{
        type : "ADDITEM",
        payload : Product
    }
}

//Delete item from cart

export const delCart = (Product) => {
    return{
        type : "DELITEM",
        payload : Product
    }
}