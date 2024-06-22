<script setup>
import DataContent from '../components/Sections/DataContent.vue';
import { ref } from 'vue';

const password = ref('')
const corectPassword = 'Wedding@1407';
const isLoggedIn = ref(false);
const isWrong = ref(false);

isLoggedIn.value = !!sessionStorage.getItem('isLoggedIn');

const login = () => {
  if(password.value === corectPassword) {
    sessionStorage.setItem('isLoggedIn', 'true');
    isLoggedIn.value = true;
  } else {
    isWrong.value = true;
  }
}
</script>

<template>
  <div class="dashboard">
    <div class="login-form form" v-if="!isLoggedIn">
        <h4>Đăng nhập</h4>
        <div class="input-text">
            <label for="guest-name">Mật khẩu</label>
            <input class="input" type="password" placeholder="Nhập mật khẩu" v-model="password"/>
        </div>
        <p v-if="isWrong" class="error-message">Mật khẩu không đúng</p>
      <button class="btn-block" @click="login">Đăng nhập</button>
    </div>
    <div class="page-content" v-if="isLoggedIn">
      <DataContent/>
    </div>
  </div>
</template>

<style lang="less" scoped>

.dashboard {
  max-width: 1024px;
  margin: auto;
}

.login-form {
  padding: 32px;
  max-width: 400px;
  margin: auto;

  &.form {
    h4 {
      color: @dark-gray;
    }

    .btn-block {
      width: 100%;
      background-color: #0080FF;
      color: white
    }

    .error-message {
      color: #FF775C;
      padding-bottom: 12px;
    }
  }
}
</style>
