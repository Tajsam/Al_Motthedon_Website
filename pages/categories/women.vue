<template>
    <div>
        <p>women clothing</p>
        <div class="main">
        <div v-for="p in products" :key="p.id">
            <ProductCard :product="p"/>

        </div>
    </div>
    </div>
</template>
<script setup> 
import ProductCard from '~/components/ProductCard.vue';

const {data:products} = await useFetch('https://fakestoreapi.com/products');
useHead({
    title:'AlMotthedon | products',
    meta:[{name:'description',content:'women products page'}]
})
</script>