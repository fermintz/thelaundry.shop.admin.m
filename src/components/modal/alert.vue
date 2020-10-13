<template>
  <v-dialog
    v-model="visible"
    max-width="400"
  >
    <v-card>
      <div class="inner">
        <div class="head">
          <div class="title">
            <v-icon color="#fff" size="24px">mdi-alert-outline</v-icon>
            <span>{{title}}</span>
          </div>
          <v-btn icon @click="show(false)">
            <v-icon size="28px">mdi-close-circle</v-icon>
          </v-btn>
        </div>
        <div class="cont">
          {{text}}
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from '@/mixins/modal.js';
export default {
  props:[
    'title', 'text'
  ],
  mixins:[
    ModalMixin,
  ],
}
</script>

<style lang="scss" scoped>
.inner{
  .head{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:15px;
    background:#cf1840;
    color:#fff;
    .title{
      display:flex;
      align-items: center;

      .v-icon{margin-right:5px;}
      span{
        font-size:18px;
        font-weight:500;
      }
    }
    .v-btn{
      color:rgba(255,255,255,1);
    }
  }
  .cont{
    padding:20px;
  }
}
</style>