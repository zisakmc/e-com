<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class=" bg-teal-500 flex">
      <nav >
        <ul class=" flex text-sm max-w-lg text-left p-3 md:text-2xl md:p-4 ">
          <li>
            <RouterLink to="/">
            <img  class="h-8 w-10 " src="/2.png" alt="">
            </RouterLink>
          </li>
        <li>
        <RouterLink to="/" class="p-4">Home</RouterLink>
        </li>
        <li>
        <RouterLink to="/categories" class="p-4" >Categories</RouterLink>
        </li>
        <li>
        <RouterLink to="/contact" class="p-4">Contact</RouterLink>
        </li>
        <li>
        <RouterLink to="/about" class="p-4">About</RouterLink>
        </li>
        </ul>
      </nav>
    </div>
  </header>
	
  <RouterView />
</template>

