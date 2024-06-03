<template>
    <div  >
        <div class="line"></div>
    </div>
    <img src="/Images/Header 1.jpg" alt="img" class="img-fluid" style="opacity:0.9;">
    <div class="bg-black d-flex justify-content-center p-5">
        <img src="/Icons/ALMOTTHEDON COMPANY Logo (3)1.png" alt="logo" width="200px" >
        <p>LATEST PRODUCTS</p>
    </div>
    <div class="bg-black d-flex justify-content-around">
        <div>
            <img src="/Images/levitating-music-headphones-display.jpg" alt="" width="300px">
            <p class="mt-4 ms-5">HEADPHONE</p>
            <button class="btn  ps-5 pe-5 ms-5 see">SEE MORE</button>
        </div>
        <div>
            <img src="/Images/beautiful-luxury-necklace-jewelry-stand-neck.jpg" alt="" width="300px" height="375px">
            <p class="mt-4 ms-5">NECKLACE</p>
            <button class="btn  ps-5 pe-5 ms-5 see">SEE MORE</button>
        </div>
        <div>

            <img src="/Images/home-appliances-group-white-refrigerator-washing-machine-stove-microwave-oven-vacuum-cleaner-isolated-white-background-3d.jpg" alt="" width="300px" height="375px">
            <p class="mt-4">Home Appliances</p>
            <button class="btn  ps-5 pe-5 ms-5 see">SEE MORE</button>
        </div>
    </div>
    <div class="con">
        <div class="line two">
            <span>LUXURY JEWERLY COLLECTION</span>
        </div>
        <img src="/Images/portrait-young-woman-with-earrings-with-gems-isolated.jpg" alt="" class="women">
        <p class="mytext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, odit! Iste, adipisci <br>ab voluptas expedita mollitia exercitationem cum provident enim architecto. <br>Ipsa aliquid consequatur in voluptas id commodi rem, consectetur<br> atque officiis necessitatibus quae deserunt ducimus tempora error, similique dolorum.</p>
        <button class="more">MORE</button>
    </div>
    <div class="bg-black" >
        <span class="categories">CATEGORIES</span>
        <img src="/Images/home-appliances-group-white-refrigerator-washing-machine-stove-microwave-oven-vacuum-cleaner-isolated-white-background-3d.jpg" class="bottom">
        <div class="four">
            <div><nuxt-link to="/categories/men" class="link">MEN CLOTHING</nuxt-link></div>
            <div><nuxt-link  class="link">JEWERLY</nuxt-link></div>   
            <div><nuxt-link  class="link">ELECTRONICS</nuxt-link></div>
            <div> <nuxt-link to="/categories/women" class="link">WOMEN CLOTHING</nuxt-link></div>
        </div>
        <div class="final"></div>
    </div>
    <footer>
        <div class="bg-black alldivs">
            <div class="indiv">
                <span>Contact Us</span>
                <span style="color:#e6c968">+963954424529</span>
                <span style="color:#e6c968">majdmajdmohamad@gmail.com</span>
            </div>
            <div class="indiv">
                <nuxt-link to="/"  style="color: white;text-decoration: none;" >HOME</nuxt-link>
                <nuxt-link to="/about"  style="color: #e6c968;text-decoration: none;"> About Us</nuxt-link>
                <nuxt-link style="color: #e6c968;" > Media Center</nuxt-link>
                <nuxt-link style="color: #e6c968;" > Contact Us</nuxt-link>
            </div>
            <div class="indiv">
                <nuxt-link style="color: #e6c968;"> Electronics</nuxt-link>
                <nuxt-link style="color: #e6c968;" >Jewerly</nuxt-link>
                <nuxt-link to="/categories/women" style="color: #e6c968;text-decoration: none;"  >Women Clothing</nuxt-link>
                <nuxt-link to="/categories/men"  style="color: #e6c968;text-decoration: none;"   >Men Clothing</nuxt-link>
            </div>
        </div>
        <div class="finlogo">
            <nuxt-link to="/">
                <img src="/logo/logo.png" width="300px" height="300px">
            </nuxt-link>
            <div style="display: flex;">
            <nuxt-link to="https://facebook.com" class="last">
            <img src="/Icons/facebook_White.png" alt="" class="face mr-2">
          </nuxt-link>
          <nuxt-link to="https://twitter.com" class="last">
            <img src="/icons/Twitter - White .png" alt="" class="ml-2" width="40px" height="40px">
          </nuxt-link>
          <nuxt-link to="https://instagram.com" class="last">
            <img src="/icons/instagram_White.png" alt="" class="ml-2" width="40px" height="40px">
          </nuxt-link>
          <nuxt-link to="https://youtube.com" class="last">
            <img src="/icons/Youtube - White .png" alt="" class="ml-2" width="40px" height="40px">
          </nuxt-link>
            </div>
            <div class="bg-black" style="display: felx;">
                <div style="position: relative;color:white;top:40px;left: 450px "> &copy; Majd Mohamad. All Rights Reserved</div>
                <div class="lline"></div>
            </div>
        </div>
       
    </footer>
    
   
</template>
<script setup>
</script>
<style scoped>  
.line{
    width: 100%;
    height: 20px;
    background-color: #e6c968;
}
p{
    color:white;
    font-size: 40px;
    
}
.see{
    border-color:#e6c968;
    border-radius: 0;
}
.see:hover{
    color:#e6c968;
}
.con{
    padding: 400px 0;
    background-color:black;
  
}
.women{
    position: relative;
    left: 50px;
    bottom: 200px;
    width: 400px;
    border-radius: 2px;
    height: 500px;
}
span{
    position: relative;
    left:700px;
    font-size: x-large;
}
.two{
    height: 50px;
}
.mytext{
    font-size: 1rem;
    position: relative;
    left:500px;
    bottom: 400px;
    padding: 0;
    margin: 0;
    width: fit-content;

}


</style>