<script setup lang="ts">
import {type RouteRecordRaw, useRoute, useRouter} from 'vue-router';
import {useI18n} from 'vue-i18n';
import {useThemeStore} from '@/stores/theme'

const {t} = useI18n(),
    location = useRoute(),
    router = useRouter(),
    routes = getRoutes(router.options.routes),
    themeStore = useThemeStore();

function getRoutes(routes: RouteRecordRaw[]) {
  let items = [];
  routes.forEach((route) => {
    if (route['meta']) {
      let checkInMenu = route.meta.inMenu,
          routePath = route.path;
      if (checkInMenu) {
        const item = {
          class: "fi " + route.meta.icon,
          name: t(route.meta.translation || 'menu.' + route.name),
          to: routePath
        };
        items.push(item);
      }
    }
  });
  return items;
}

function toggleTheme() {
  if (themeStore.theme == 'dark') {
    themeStore.setLightTheme();
  } else {
    themeStore.setDarkTheme();
  }
}
</script>

<template>
  <div :class="`d-flex flex-column flex-shrink-0 p-3 text-${themeStore.text} menu bg-${themeStore.background}`">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" v-for="(route) in routes">
        <RouterLink :to="route.to" class="nav-link d-flex active">
          <i :class="route.class"/>
          <div class="routeName d-inline-block ml-2">
            {{ route.name }}
          </div>
        </RouterLink>
      </li>
    </ul>
    <div @click="toggleTheme()">
      change theme
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  width: 280px;
  height: calc(100vh - 48px - 28px);
  opacity: 0.8;
}

.routeName {
  line-height: 1.3;
}
</style>
