import Vue from "vue";

export const setTradeResult = ({state, commit}, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let tradeData = {
        purchase: state.purchase,
        sale: state.sale  
    }
    Vue.http.put("https://urun-islemleri-56f6d.firebaseio.com/trade-result.json", tradeData)
    .then(response => {
        console.log(response);
    })

}
export const getTradeResult = ({commit}) => {
    Vue.http.get("https://urun-islemleri-56f6d.firebaseio.com/trade-result.json")
      .then(response => {
          console.log(response);
          commit("updateTradeResult", response.body)
      })
} 