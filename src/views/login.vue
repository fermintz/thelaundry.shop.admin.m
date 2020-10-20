<template>
  <div class="login_wrap fill-height">
    <div class="login-form">
      <div class="logo">
        <img src="@/assets/img/logo.png" />
        <h4>더런드리 매장관리 시스템</h4>
      </div>
      <v-form>
        <v-text-field
          label="이메일"
          dense
          outlined
          hide-details
          class="mb-5"
        />
        <v-text-field
          label="비밀번호"
          :type="passwordShow ? 'text' : 'password'"
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="passwordShow = !passwordShow"
          dense
          outlined
          class="mb-3"
        />
        <v-btn outlined class="login-btn">
          로그인
        </v-btn>
      </v-form>
      <div class="login-footer">
        <v-btn
          text 
          class="passwordFind"
          @click="()=>$refs.findPassword.show(true)" 
        >
            비밀번호 찾기
        </v-btn>
      </div>
    </div>

    <FindPassword ref="findPassword"/>
  </div>
</template>

<script>
import FindPassword from '@/components/modal/findPassword.vue';

export default {
  components:{
    FindPassword,
  },
  data(){
    return{
      password:'',
      passwordShow:false,
    }
  }
}
</script>

<style lang="scss" scoped>

.login_wrap{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:#fff;
  padding:30px;
  

  .login-form{
    width:100%;
    

    .logo{
      margin-bottom:30px;
      text-align:center;

      img{display:inline-block;height:40px;}
      h4{font-size:16px;font-weight:400;color:#888}
    }

    .v-btn.login-btn{
      width:100%;
      background:#01a1dd;
      color:#fff;
      height:40px;
    }
  }

  .login-footer{
    margin-top:30px;
    text-align:center;
    .v-btn.passwordFind{
      
    }
  }
}

</style>