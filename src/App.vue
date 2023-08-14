<script setup>
import { RouterLink, RouterView } from 'vue-router'

cont 
</script>

<template>
  <header>
    <div class=" bg-gray-100">
      <nav class="grid-cols-2">
        <div class="flex p-2">
            <div class="text-3xl md:hidden">
              <span class="material-icons" @click="toggle"> menu</span>
            </div>
            <div class="border border-gray-500 shadow-sm p-1 rounded">
                <RouterLink to="/" class="flex items-center">
                  <img  class="h-8 w-10 hover:animate-pulse" src="/2.png" alt="">
                  <h6 class="font-semibold text-sm md:text-3xl">E-corp</h6>
                </RouterLink>
            </div>
          </div>
        <div class="bg-gray-200 md:flex-cols">
            <ul class="text-sm max-w-lg p-2 font-semibold md:text-2xl md:p-4">
              <div class="flex justify-between">
                <li>
                  <RouterLink to="/categories" class="hov md:p-4" >Categories</RouterLink>
                </li>
                <div class="md:hidden">
                  <span class="material-icons" @click="toggle"> close</span>
                </div>
              </div>
              <li>
               <RouterLink to="/contact" class="hov p-2 md:p-4">Contact</RouterLink>
              </li>
              <li>
               <RouterLink to="/about" class="hov md:p-4">About</RouterLink>
              </li>
            </ul>
          </div>
        <div class="flex font-semibold text-2xl absolute top-0 right-0 pr-4 md:text-4xl ">
          <span class="material-icons pr-2 hover:animate-bounce ">shopping_cart</span>
          <img  class="rounded-full ring-2 ring-gray-200 shadow-sm mt-2 w-7 h-7 md:w-10 md:h-10" loading="lazy" src="/2.jpg" alt="">
        </div>
      </nav>

    </div>
  </header>
	
  <RouterView />
</template>

