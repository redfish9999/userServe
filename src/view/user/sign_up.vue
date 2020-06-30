<template>
<el-container class="container">
  <el-main>
    <div class="user-form">
      <el-button type="primary" @click=backTo>返回</el-button>
      
    </div>
  </el-main>
</el-container>
</template>

<script>
export default {
  methods: {
    backTo() {
      history.back();
    }
  }
}
</script>
