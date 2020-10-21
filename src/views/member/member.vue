<template>
  <div class="member">
    <div class="phoneSearch">
      <v-text-field 
        outlined
        dense
        append-icon="mdi-magnify"
        placeholder="전화번호 검색"
        hide-details
        @click:append="()=>{}"
        flat
      />
    </div>
    <ul>
      <li 
        v-for="item in 10" 
        :key="item"
        v-ripple
        @click="()=>$refs.pointControl.show(true)"
      >
        <div class="infoText">
          <span class="phone">010-8525-4561</span>
          <span class="point">
            남은포인트<strong>142,100P</strong>
          </span>
        </div>
        <div class="value">
          <span class="btnText">포인트변경 <v-icon>mdi-chevron-right</v-icon></span>
        </div>
      </li>
    </ul>

    <PointControl ref="pointControl"/>
  </div>
</template>

<script>
import PointControl from '@/components/modal/pointControl'

export default {
  components:{
    PointControl
  }
}
</script>

<style lang="scss" scoped>

.phoneSearch{
  border-bottom:1px solid #e2e2e2;
  padding:10px;
}

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

    .infoText{
      flex:1;
      .phone{
        font-size:16px;
        color:#292929;;
        font-weight:500;
      }
      .point{
        font-size:12px;
        color:#888;
        margin-top:5px;

        strong{
          color:#292929;
          font-weight:300;
          margin-left:10px;
          font-size:12px;
          color:#01afff;
        }
      }
    }
    .value{
      font-weight:500;
      font-size:13px;

      .btnText{
        display:flex;
        align-items: center;
        font-size:12px;
        .v-icon{
          color:#c2c2c2;
        }
      }
    }
  }
}

</style>