<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.stausCode }}</p>
        <p class="mt-7 text-6xl ">sorry!</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn btn-primary" @click="HandleError">Go Home ...</button>

    </div>    
</template>
<script setup>
    defineProps(['error'])
    const HandleError=()=>clearError({redirect:'/'})
</script>
<style scoped>


</style>