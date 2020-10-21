<template>
  <div class="machine-remote fill-height">
    <v-list>
      <v-list-item 
        v-for="item in 10" 
        :key="item" 
        class="item" 
        v-ripple
        @click="()=> $refs.coinRemote.show(true)"
      >
        <v-list-item-content>
          <span class="type">세탁기</span>
          <span class="eq-name">A유닛 세탁기</span>
          <span class="eq-weight">19Kg</span>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>
            mdi-chevron-right
          </v-icon>
        </v-list-item-action>
      </v-list-item>   
    </v-list>
    <CoinRemote ref="coinRemote"/>
  </div>
</template>
<script>

import CoinRemote from '@/components/modal/coinRemote.vue';

export default {
  components:{
    CoinRemote
  }  
}
</script>


<style lang="scss" scoped>

.machine-remote{
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