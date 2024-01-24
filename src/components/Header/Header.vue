<script setup lang="ts">
import {useThemeStore} from '@/stores/theme';

const themeStore = useThemeStore();
</script>

<template>
  <div :class="`px-2 py-1 header text-${themeStore.text} bg-${themeStore.background}`">
    <img src="/logo.jpg" alt="logo" class="logo img-responsive"/>
<!--    <b-button v-b-toggle.sidebar>Toggle Sidebar</b-button>-->
  </div>
</template>

<style scoped>
.header {
  height: 48px;
  position: sticky;
  top: 0;
  opacity: 0.8;
}

.logo {
  max-width: 70px;
}
</style>
