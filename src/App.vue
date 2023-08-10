<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class=" bg-teal-500">
      <nav >
        <ul class="text-sm p-3 text-left md:text-xl p-4 flex-cols">
        <li>
        <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
        <RouterLink to="/categories" >Categories</RouterLink>
        </li>
        <li>
        <RouterLink to="/contact" >Contact</RouterLink>
        </li>
        <li>
        <RouterLink to="/about" >About</RouterLink>
        </li>
        </ul>
      </nav>
    </div>
  </header>
	
  <RouterView />
</template>

