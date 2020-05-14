import Vue from "vue";

export const setTradeResult = ({state, commit}, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let tradeData={
        purchase: state.purchase,
        sale: state.sale  
    }
    Vue.http.put("https://urun-islemleri-56f6d.firebaseio.com/trade-result.json", tradeData)
    .then(response => {
        console.log(response);
        console.log(response.purchase);
        console.log(response.sale);
        console.log(response.balance);

    })

}
export const getTradeResult = ({commit}) => {

} 