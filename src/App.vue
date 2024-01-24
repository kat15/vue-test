<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router';
import {Footer, Header, SideMenu} from "@/components";
import {useUserStore} from '@/stores/user';
import {computed} from "vue";

const userStore = useUserStore(),
    route = useRoute(),
    routeName = computed(() => route.name);
</script>

<template>
  <Header v-if="userStore.isLogged"/>
  <div class="d-flex" v-if="userStore.isLogged">
    <SideMenu/>
    <RouterView class="main" v-if="routeName != 'Login'"/>
  </div>
  <Footer v-if="userStore.isLogged"/>
  <RouterView class="login mx-auto" v-else/>
</template>

<style scoped lang="scss">
.login {
  max-width: 500px;
}

.main {
  padding: 5px 10px;
  width: 100%;
}
</style>
