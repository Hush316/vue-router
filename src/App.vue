<script setup lang="ts">
import 'animate.css';
</script>

<template>
  <div>
    <h2>kabuto</h2>
    <router-view #default="{ route, Component }">
      <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
button {
  margin-left: 20px;
}
</style>
