<template>
<el-container class="container">
  <el-main>
    <div class="user-form">
      <el-input v-model="account" placeholder="請輸入帳號"></el-input>
      <el-input v-model="password" placeholder="請輸入密碼" show-password />
      <el-button type="primary" @click="loginWithAccount">登入</el-button>
      <el-button type="success" @click="loginWithGoogle">
        <font-awesome-icon :icon="['fab', 'google']" />
      </el-button>

      <el-button type="primary" @click=signUp>註冊</el-button>

    </div>
  </el-main>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    loginWithAccount() {
      console.log("Login with account");
    },
    loginWithGoogle() {
      console.log("Login with Google Api");
    },
    signUp() {
      window.location.href='/user/sign_up';
    }
  },
}
</script>

<style lang='scss'>
.container {
  main {
    display: flex;
    justify-content: center;
    .user-form {
      max-width: 350px;
      border: 1px solid rgba(0, 0, 0, 0.6);
      border-radius: 5px;
      padding: 20px;
      .el-input {
        margin: 10px 0;
      }
      .el-button {
        margin-top: 10px;
      }
    }
  }
}
</style>
