const products = [
    {id:1, title : 'product 1', price : 10},
    {id:2, title : 'product 2', price : 20},
    {id:3, title : 'product 3', price : 30},
    {id:4, title : 'product 4', price : 40}
]


export const getProductsAync = (search) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (search == undefined) ? resolve(products) : resolve(products.filter(p=> p.title.indexOf(search) >= 0))
        },2000)
    })
}

export const getProducts = (search) => {
    return  (search == undefined) ? products : products.filter(p=> p.title.indexOf(search) >= 0)
}