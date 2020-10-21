<template>
  <div class="kiosk-remote fill-height">
    <v-list>
      <v-list-item 
        v-for="(item, index) in btns" 
        :key="index" 
        class="item" 
        v-ripple
        @click="()=> $refs.confirm.show(true)"
      >
        <v-list-item-title>
          {{item.name}}
        </v-list-item-title>
        <v-list-item-action>
          <v-icon>
            mdi-chevron-right
          </v-icon>
        </v-list-item-action>
      </v-list-item>   
    </v-list>

    <Confirm ref="confirm" title="키오스크 원격제어"  description="프로그램을 재실행 하시겠습니까?" />
  </div>
</template>


<script>
import Confirm from '@/components/modal/confirm.vue';

export default {
  components:{
    Confirm,
  },
  data(){
    return{
      btns:[
        {
          name:'프로그램 재실행',
        },
        {
          name:'키오스크 전원 종료 후 다시시작'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.kiosk-remote{
  padding:10px;
  background:#f8f8f8;

  .v-list{
    background:unset;
    padding:0px;
  }

  .item{
    background:#fff;
    border:1px solid #e2e2e2;
    margin-bottom:10px;
    border-radius:4px;
  }

  .type{
    flex:unset;
    padding:2px 5px;
    text-align:center;
    border:1px solid #01afff;
    color:#01afff;
    border-radius:4px;
    font-size:11px;
    margin-bottom:5px;

  }
  .eq-name{
    font-size:14px;
    font-weight:400;
  }
  .eq-weight{
    font-size:12px;
    margin-top:5px;
    color:#888;
  }
}

</style>