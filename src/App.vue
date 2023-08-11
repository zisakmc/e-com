<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class=" bg-gray-100">
      <nav class="flex grid-cols-2">
        <div>
        <ul class=" flex text-sm max-w-lg p-2 font-semibold md:text-2xl md:p-4 ">
          <li>
            <RouterLink to="/">
            <img  class="h-8 w-10 hover:animate-pulse" src="/2.png" alt="">
            </RouterLink>
          </li>
        <li>
        <RouterLink to="/categories" class="p-2 hover:underline hover:animate-bounce md:p-4 hidden" >Categories</RouterLink>
        </li>
        <li>
        <RouterLink to="/contact" class="p-2 md:p-4">Contact</RouterLink>
        </li>
        <li>
        <RouterLink to="/about" class="p-2 md:p-4">About</RouterLink>
        </li>
        </ul>
        </div>
        <div class="flex font-semibold text-2xl absolute top-0 right-0 pr-4 md:text-4xl ">
          <span class="material-icons pr-2 hover:animate-bounce ">shopping_cart</span>
          <img  class="rounded-full ring-2 w-10 h-8 object-cover inset-0 mt-2" loading="lazy" src="/2.jpg" alt="">
        </div>
      </nav>

    </div>
  </header>
	
  <RouterView />
</template>

