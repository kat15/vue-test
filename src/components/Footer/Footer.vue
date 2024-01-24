<script setup lang="ts">
import {useThemeStore} from '@/stores/theme';

const themeStore = useThemeStore();
</script>

<template>
  <div :class="`px-2 pb-1 footer text-${themeStore.text} bg-${themeStore.background}`">
    (c) 2024
  </div>
</template>

<style scoped>
.footer {
  height: 28px;
  position: sticky;
  bottom: 0;
  opacity: 0.8;
}
</style>
