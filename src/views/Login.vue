<template>
  <div class="login">
    <el-form status-icon ref="ruleForm2" label-width="70px" class="demo-ruleForm">
        <el-form-item label="用户名">
            <el-input type="text" v-model="username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      submitForm() {
        if (!/[\u4e00-\u9fa5]{2,5}/.test(this.username)){
          this.$alert('请输入正确的用户名');
          // alert('请输入正确的用户名')
          return;
        }
        if (!/\w{3,8}/.test(this.password)){
          this.$alert('请输入正确的密码');
          // alert('请输入正确的密码')
          return;
        }
        window.localStorage.setItem('login', 'true');
        this.$router.push('/');
      },
      resetForm() {
        console.log(this.username)
        this.username = ''
        this.password = ''
      }
      
    }
  }
</script>
<style>
  * {
    font-size: 30px;
  }
  .login {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .demo-ruleForm{
    width: 80%;
    margin: 200px auto;
  }
  .el-form-item .el-form-item__content {
    margin: 0;
  }
</style>
