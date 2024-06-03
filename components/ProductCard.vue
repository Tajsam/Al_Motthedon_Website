<template>
    <div class="images">
       
            <img :src="product.image" width="80px" >
            <p >{{ product.title }}</p>
            <nuxt-link :to="`/categories/${product.id}`">
                <p class="btn btn-primary">View Details</p>
            </nuxt-link>
      
    </div>

</template>
<script setup>
const{product}= defineProps(['product']);
</script>
<style>

</style>