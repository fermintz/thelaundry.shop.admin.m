<template>
  <div class="wrap">
    <div class="calendar-control">
      <v-btn icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <div class="dateSelect">
        <v-dialog
          ref="dateDialog"
          v-model="datePicker"
          :return-value.sync="date"
          min-width="280px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-on="on"
              v-bindd="attrs"
              width="100%"
              color="unset"
              text
            >
              {{date}}
            </v-btn>
          </template>
          <v-date-picker 
            v-model="date"
            type="month"
            lang="kr"
            @input="$refs.dateDialog.save(date)"
            :month-format="convertMonth"
            no-title
          />
        </v-dialog>
      </div>
      <v-btn icon>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <div class="calendar">
      <v-row>
        <v-col cols="6" v-for="(item,index) in 31" :key="index">
          <div class="dayCol">
            <div class="day">
              <span class="dayNumber">{{item}}</span>
              <span class="weekText">(화)</span> 
            </div>
            <div class="dayContent">
              <span>
                <label>kiosk현금</label>
                <strong>13,000</strong>
              </span>
              <span>
                <label>kiosk카드</label>
                <strong>13,000</strong>
              </span>
              <span>
                <label>장비현금</label>
                <strong>13,000</strong>
              </span>
              <span class="total">
                <label>합계</label>
                <strong>39,000</strong>
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return{
      date: new Date().toISOString().substr(0, 7),
      datePicker:false,
    }
  },
  components: {

  },
  methods:{
    convertMonth(value){
      return value.substring(5,7) + '월'
    },
  }
};
</script>

<style lang="scss" scoped>
.calendar-control{
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-bottom:1px solid #e2e2e2;
  height:40px;
  background:#f2f2f2;

  .yearSelect{
    font-size:18px;
    font-weight:500;
  }

  .v-btn{
    width:40px;
    height:40px;
  }
}

.calendar{
  .row{padding:0;margin:0;}
  .col{
    padding:0;margin:0;
    border-bottom:1px solid #e2e2e2;
    border-right:1px solid #e2e2e2;

    .dayCol{
      min-height:100px;
      padding:10px;

      .day{
        margin-bottom:10px;
        .weekText{font-size:12px;color:#888}
      }

      .dayContent{
        span{
          display:flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom:5px;
          label{font-size:11px;}
          strong{font-size:11px;}
        }

        span.total{
          margin-top:10px;
          padding-top:10px;
          border-top:1px solid #e2e2e2;
          label{color:#888}
          strong{
            color:#f50459;
            font-weight:400;
          }
        }
      }
    }
  }
}
</style>
