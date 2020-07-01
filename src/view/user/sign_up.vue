<template>
<el-container class="container">
  <el-main>
    <div class="user-form">
      <el-input v-model="phone" placeholder="請輸入手機號碼"></el-input>
      <el-input v-model="mail" placeholder="請輸入E-mail"></el-input>
      <el-input v-model="name" placeholder="請輸入真實姓名"></el-input>
      <el-input v-model="password" placeholder="請輸入6-20位英文數字組合"></el-input>
      <el-input v-model="re_password" placeholder="請再輸入一次密碼"></el-input>

      <el-button type="primary" @click="checkUp">確認送出</el-button>
      <el-button type="primary" @click="backTo">返回</el-button>

    </div>
  </el-main>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      mail: "",
      name: "",
      password: "",
      re_password: ""
    }
  },
  methods: {
    checkUp() {
      console.log("Check up the information and sign it up");
    },
    backTo() {
      history.back();
    }
  }
}
</script>
