<template>
  <div>
    <app-header></app-header>
    <app-product-container></app-product-container>
    <app-footer></app-footer>

  </div>
</template>
<script>
  import Header from "./components/shared/Header";
  import Footer from "./components/shared/Footer";
  import ProductSell from "./components/products/ProductSell";

 export default{
  components: {
    appHeader: Header,
    appFooter: Footer,
    appProductContainer: ProductSell
  }


 }

</script>
<style>

</style>