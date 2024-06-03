<template>
<div class="maindiv">
    <div v-for="item in items" :key="item.id"> 
        <h2 class="text-4xl my-7">{{ item.id}}</h2>
        <img :src="item.image" alt=""  width="300px">
    <p>{{ item.price }}$</p>
        <button >Delete</button>
    </div>  
</div>   
</template>
<script setup>
let items=cartItems();
console.log(items);
// const deleteItem= (e)=>{
//     for(let i=0; i<items.length;i++){
//         if(items[i].id== e.target.id){
//             items.splice(indexOf(items[i]),1);
//         }
//     }
// }
// console.log( items.id)
</script>
<style>
.maindiv{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center
}
.maindiv div{
    display: flex;
    flex-direction: column;
}
</style> 