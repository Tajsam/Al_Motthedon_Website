<template>
    <div class="body">
    
      <header class="bg-black">
        <nav >
          <nuxt-link to="https://facebook.com" class="first">
            <img src="/Icons/facebook_Gold.png" alt="" class="face mr-2">
          </nuxt-link>
          <nuxt-link to="https://twitter.com" class="first">
            <img src="/icons/Twitter - Gold.png" alt="" class="ml-2" width="40px" height="40px">
          </nuxt-link>
          <nuxt-link to="https://instagram.com" class="first">
            <img src="/icons/instagram_Gold.png" alt="" class="ml-2" width="40px" height="40px">
          </nuxt-link>
          <nuxt-link to="https://youtube.com" class="first">
            <img src="/icons/Youtube - Gold.png" alt="" class="ml-2" width="40px" height="40px">
          </nuxt-link>
          <form class="d-flex" role="search">
        <input class="form-control me-2 mysearch" type="search" placeholder="Search" aria-label="Search">
      </form>
        </nav>
        <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <nuxt-link to="/">
      <img src="/logo/logo.png" alt="logo" class="logoimg">
    </nuxt-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" >
          <nuxt-link to="/" class="nav-link p-lg-3 active">Home</nuxt-link>
        </li>
        <li class="nav-item" >
           <nuxt-link  class="nav-link p-lg-3 ">Electronics</nuxt-link>
        </li>
        <li class="nav-item" >
          <nuxt-link  class="nav-link p-lg-3 ">jewerly</nuxt-link>
        </li>
        <li class="nav-item" >
          <nuxt-link to="/categories/men" class="nav-link  p-lg-3">Men clothing</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/categories/women" class="nav-link  p-lg-3">Women clothing</nuxt-link>
        </li>
        <li class="nav-item" >
          <a class="nav-link  p-lg-3" href="#">Media center</a>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about" class="nav-link  p-lg-3" >About us</nuxt-link>
        </li>
        
        
      </ul>
     
    </div>
  </div>
        </nav>
      </header>
      <!-- output the page content -->
      <div >
        <slot />
      </div>
     </div>
  </template>
  
  <style scoped>
 .navbar-nav .nav-item .router-link-exact-active {
    color:#e6c968
  }
  .navbar-nav .nav-item .nav-link:hover{
    color:#e6c968
  }
  </style>