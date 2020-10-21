import Vue from "vue";
import VueRouter from "vue-router";
import Default from "../layout/default.vue";
import Login from "../views/login.vue";
import Error404 from "../views/404.vue";
import Calendar from '../views/sales/calendar.vue';
import MachineUseList from '../views/sales/machine-use-list.vue';
import KioskChageList from '../views/sales/kiosk-chage-list.vue';
import KioskUseList from '../views/sales/kiosk-use-list.vue';
import MachineRemote from '../views/machine/machine-remote.vue';
import KioskRemote from '../views/machine/kiosk-remote.vue';
import Member from '../views/member/member.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name: "defaultLayout",
    component: Default,
    children:[
      {
        path:"/",
        name:'calendar',
        component:Calendar,
        meta:{
          title:'매출캘린더'
        }
      },
      {
        path:"sales/machine-use-list",
        name:'machine-use-list',
        component:MachineUseList,
        meta:{
          title:'장비사용내역'
        }
      },
      {
        path:"sales/kiosk-chage-list",
        name:'kiosk-chage-list',
        component:KioskChageList,
        meta:{
          title:'키오스크 충전내역'
        }
      },
      {
        path:"sales/kiosk-use-list",
        name:'kiosk-chage-list',
        component:KioskUseList,
        meta:{
          title:'키오스크 사용내역'
        }
      },
      {
        path:"machine/machine-remote",
        name:'machine-remote',
        component:MachineRemote,
        meta:{
          title:'장비원격제어'
        }
      },
      {
        path:"machine/kiosk-remote",
        name:'kiosk-remote',
        component:KioskRemote,
        meta:{
          title:'키오스크 원격제어'
        }
      },
      {
        path:"member",
        name:'member',
        component:Member,
        meta:{
          title:'회원관리'
        }
      },
    ]
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'*',
    name:'404',
    component:Error404
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
