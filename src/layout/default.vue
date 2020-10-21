<template>
  <v-app>
    <PasswordChange ref="passwordChange" />
    <Confirm ref="confirm" title="로그아웃" description="로그아웃 하시겠습니까?"/>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <div class="drawer">
        <div class="user">
          <h4><strong>박수민</strong>님, 반갑습니다</h4>
          <div class="btns">
            <v-btn
              @click="()=>$refs.passwordChange.show(true)"
              text
            >
              <span>비밀번호 변경</span>
            </v-btn>
            <v-btn 
              text
              @click="()=>$refs.confirm.show(true)"
            >
              <span>로그아웃</span>
            </v-btn>
          </div>
          
        </div>
        <div class="menu">
          <dl v-for="(items, index) in nav" :key="index">
            <dt>
              <v-icon>{{items.icon}}</v-icon>
              {{items.name}}

            </dt>
            <dd>
              <span 
                v-for="(item, index) in items.child" 
                :key="index"
                v-ripple
                @click="pageMove(item.path)"
              >
                {{item.name}}
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </v-navigation-drawer>
    <div id="header">
      <v-btn 
        @click.stop="drawer = !drawer"
        icon
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="logo">
        <img src="@/assets/img/logo_w.png">
      </div>
    </div>

    <div class="titleBar">
      <h4>{{$route.meta.title}}</h4>
    </div>   
    
    <v-main app>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import Confirm from '@/components/modal/confirm.vue';
import PasswordChange  from '@/components/modal/passwordChange.vue';

export default {
  components:{
    PasswordChange, Confirm
  },
  data(){
    return{
      drawer:false,
      nav:[
        {
          icon:'mdi-chart-bar',
          name:'매출관리',
          child:[
            {
              name:'매출캘린더',
              path:'/',
            },
            {
              name:'장비 사용내역',
              path:'/sales/machine-use-list',
            },
            {
              name:'키오스크 충전내역',
              path:'/sales/kiosk-chage-list',
            },
            {
              name:'키오스크 사용내역',
              path:'/sales/kiosk-use-list',
            },
          ]
        },
        {
          icon:'mdi-tumble-dryer',
          name:'장비관리',
          child:[
            {
              name:'장비원격제어',
              path:'/machine/machine-remote',
            },
            {
              name:'키오스크 제어',
              path:'/machine/kiosk-remote',
            },
          ]
        },
        {
          icon:'mdi-account',
          name:'회원관리',
          child:[
            {
              name:'회원관리',
              path:'/member',
            },
          ]
        }
      ]
    }
  },

  methods:{
    pageMove(value){
      this.$router.push(value)
    }
  }
}
</script>

<style lang="scss" scoped>

#header{
  display:flex;
  align-items: center;
  background:#292929;
  height:50px;

  .v-btn{
    width:50px;
    height:50px;
    .v-icon{color:#fff;}
  }

  .logo{
    img{display:block;}
  }
}

.titleBar{
  display:flex;
  align-items: center;
  justify-content: center;
  border-bottom:1px solid #e2e2e2;
  height:50px;

  h4{font-size:16px;font-weight:400}
}

.drawer{
  .user{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid #e2e2e2;
    background:#01afff;
    padding:15px 10px;
    min-height:100px;

    h4{
      font-size:16px;
      text-align:center;
      color:#fff;
      strong{
        font-weight:500;
      }
    }

    .btns{
      display:flex;
      align-items: center;
      justify-content: space-around;
      margin-top:10px;

      .v-btn{
        flex:1;
        height:30px;
        background:#fff;
        margin:0 5px;
        border-radius:15px;
        span{
          font-size:12px;
        }
      }
    }
  }
  .menu{
    dl{
      border-bottom:1px solid #e2e2e2;
      padding:5px 0 10px 0;
      dt{
        .v-icon{margin-right:5px;font-size:20px;}
        display:flex;
        align-items: center;
        font-size:14px;
        font-weight:400;
        height:40px;
        padding:0 10px;
      }
      dd{
        span{
          display:flex;
          align-items: center;
          justify-content: space-between;
          height:36px;
          padding:0 15px;
          font-size:13px;
        }
      }
    }
    dl:last-child{
      border-bottom:0px;
    }
  }
}

</style>