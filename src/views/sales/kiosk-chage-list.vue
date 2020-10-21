<template>
  <div class="kiosk-chage-list">
    <ul>
      <li v-for="item in 10" :key="item">
        <div class="cate">
          <span class="cash" v-if="activeCate">현금</span>
          <span class="card" v-else>카드</span>
        </div>
        <div class="infoText">
          <span class="date">2020-10-21 12:34:56</span>
          <span class="phone">010-8525-4561</span>
        </div>
        <div class="value">
          61,000원
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeCate:true
    }
  }
}
</script>

<style lang="scss" scoped>

ul{
  padding:0px;
  li{
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #e2e2e2;
    min-height:60px;
    padding:15px;
    
    >div{
      display:flex;
      flex-direction: column;
    }

    .cate{
      display:flex;
      align-items: center;
      justify-content: center;
      
      span{
        display:flex;
        align-items: center;
        justify-content: center;
        width:50px;
        height:50px;
        background:#f2f2f2;
        border-radius:25px;
        margin-right:15px;
        font-size:12px;
      }

      span.cash{
        background:rgba(1,175,255,0.1);
      }

      span.card{
        background:rgba(245,4,89,0.05);
      }

      
    }

    .infoText{
      flex:1;
      .date{
        font-size:12px;
        color:#888;
      }
      .phone{font-size:13px;}
    }
    .value{
      font-weight:500;
      font-size:13px;
    }
  }
}

</style>