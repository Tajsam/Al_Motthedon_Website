<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product img" width="500px">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ product.title }}</h2>
                <p class="text-xl my-7">price-${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="btn btn-primary" @click="AddtoCart" >Add To Cart </button>
                <nuxt-link to="/showCart"> 
                    <button class="show">Show Cart </button>
                </nuxt-link>
                
            </div>
        </div>
        
    </div>
</template>
<script setup>
const{product}=defineProps(['product']);
let items=cartItems();
const AddtoCart = ()=>{
    items.value.push(product);
    console.log(items);
}
</script>
<style scoped>
img{
    max-width: 400px;
}

.show{
    padding: 5px;
    background-color:#e6c968;
    border-radius: 7px;
    margin-left: 7px;
}
</style>