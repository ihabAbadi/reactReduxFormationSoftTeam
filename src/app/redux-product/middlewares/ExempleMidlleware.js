export const functionMiddleware = storeApi => next => action => {
    
    if(action.type == "async") {
        //Appel async
        storeApi.dispatch({type:"startAsync"})
        testPromise.then(() => {
            storeApi.dispatch({type:"endAsync"})
        })
    }
    return next(action)
}

const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    },4000)
})

// const functionMiddleware = function(storeApi) {
//     return function(next) {
//         return function(action) {

//         }
//     }
// }