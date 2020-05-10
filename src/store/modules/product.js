const state = {
    products : []
}
const getters ={
    getProducts(state){
        return state.products;
    },
    getProduct(state){

    }
}
const mutations{
   updateProductList(state,product){
       stage.products.push(product);
    }
}
const actions{
    initApp({commit}){
        //vue resource işlemleri
    }
    saveProduct({commit} , payload){
        //vue resource işlemleri
    }
    sellProduct({commit} , payload){
        // vue resource işlemleri
    }

} 
export default {
    state,
    getters,
    mutations,
    actions
}