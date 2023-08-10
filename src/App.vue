<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class=" bg-teal-500">
      <nav >
        <ul class="text-sm max-w-lg p-3 text-left md:text-xl p-4 flex">
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

