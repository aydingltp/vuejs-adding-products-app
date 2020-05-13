import Vue from "vue";
const state = {
    products : []
}
const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){

    }
}
const mutations = {
   updateProductList(state,product){
       state.products.push(product);
    }
}
const actions = {
    initApp({commit}){
        //vue resource işlemleri
    },
    saveProduct({commit, state} , product){
        //vue resource işlemleri
        Vue.http.post("https://urun-islemleri-56f6d.firebaseio.com/products.json", product)
            .then((response) => {
                product.key = response.body.name;
                commit("updateProductList", product);
                console.log(state.products);
            })
    },
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