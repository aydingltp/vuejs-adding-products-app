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
    saveProduct({dispatch, commit, state} , product){
        //vue resource işlemleri
        Vue.http.post("https://urun-islemleri-56f6d.firebaseio.com/products.json", product)
          .then((response) => {
                /*Ürün Listesinin Güncellenmesi */
                product.key = response.body.name;
                commit("updateProductList", product);
                /* Alış Satış Bakiye bilgilerinin güncellenmesi */
                let tradeResult = {
                    purchase : product.price,
                    sale : 0,
                    count: product.count
                }
                dispatch("setTradeResult", tradeResult)
                //console.log(state.products);
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