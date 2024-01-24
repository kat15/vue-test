<template>
  <div class="text-center container">
    <form @submit.prevent="loginFunction()">
      <div class="row mb-4">
        <div class="col">
          <div class="logo">
            <img src="/logo.jpg" class="img-responsive">
          </div>
        </div>
      </div>
      <div class="row pb-3">
        <div class="info col">
          Prosimy zalogować się
        </div>
      </div>
      <div class="row my-3 justify-content-center">
        <div class="col col-max">
          <div class="undefined m-0 inputHelper position-relative d-inline-block w-100">
            <div class="position-relative form-group m-0">
              <b-form-input type="text" v-model="login" :placeholder="$t('login')" required="required" class="form-control input-helper" autocomplete="username" focus="true"/>
              <span class="input-border"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3 justify-content-center">
        <div class="col col-max">
          <div class="undefined m-0 inputHelper position-relative d-inline-block w-100">
            <div class="position-relative form-group m-0">
              <b-form-input type="password" v-model="password" :placeholder="$t('password')" required="required" class="form-control input-helper" autocomplete="password"/>
              <span class="input-border"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <div class="col col-max">
          <b-badge variant="light">
            Data from: https://dummyjson.com/users
          </b-badge>
          <div class="text-white">
            Example login:<br/>
            username: kminchelle<br/>
            password: 0lelplR
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-max">
          <b-button type="submit" variant="success" class="w-100">
            {{ $t('loginButton') }}
          </b-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {useUserStore} from '@/stores/user';

export default {
  data() {
    return {
      login: '',
      password: ''
    };
  },

  methods: {
    async loginFunction() {
      this.post('auth/login', {
        username: this.login,
        password: this.password
      }).then((res) => {
        this.$router.push('Dashboard');
        const userStore = useUserStore();
        userStore.setLoggedIn(res);
      }).catch(async (response) => {
        this.$bvToast.toast(`${response.message}`, {
          title: 'Login error',
          autoHideDelay: 5000,
          appendToast: true
        })
      });
    }
  }
};
</script>

<style>
.container {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  filter: drop-shadow(0 0 9px rgba(13, 23, 53, .75));
  background-color: #34426b;
  width: 686px;
  padding: 50px 0;
}

.col-max {
  max-width: 282px;
}

.info {
  color: #7683a3;
}

.logo {

  img {
    max-width: 200px;
  }
}
</style>
