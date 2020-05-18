<template>
  <div>
    <app-header></app-header>
    <transition name="fade" mode="out-in"> 
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>

  </div>
</template>
<script>
  import Header from "./components/shared/Header";
  import Footer from "./components/shared/Footer";
  import ProductSell from "./components/products/ProductSell";
  import ProductList from "./components/products/ProductList";

 export default{
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
  created() {
    this.$store.dispatch("getTradeResult");
  }


 }

</script>
<style>
  body{
    background-color: #a7a0bb5c;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .3s ease-in-out;;
  }
  .fade-leave{
  }
  .fade-leave-active{
    transition: opacity .3s ease-in-out;;
    opacity: 0;
  }
</style>