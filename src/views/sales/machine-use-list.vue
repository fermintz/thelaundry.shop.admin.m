<template>
  <div class="machine-use-list">
    <ul>
      <li v-for="item in 10" :key="item">
        <div class="infoText">
          <span class="date">2020-10-21 12:34:56</span>
          <span class="name">A유닛 세탁기</span>
        </div>
        <div class="value">
          61,000원
        </div>
      </li>
    </ul>
  </div>
</template>

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

    .infoText{
      flex:1;
      .date{
        font-size:12px;
        color:#888;
      }
    }
    .value{
      font-weight:500;
      font-size:13px;
    }
  }
}

</style>