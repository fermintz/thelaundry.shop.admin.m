<template>
  <v-dialog
    v-model="visible"
    width="100%"
  >
    <v-card class="card">
      <div class="card-title">{{this.title}}</div>
      <div class="card-body">{{this.description}}</div>
      <v-card-actions>
        <v-spacer />
        <v-btn text>취소</v-btn>
        <v-btn text>확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from '@/mixins/modal.js'

export default {
  props:[
    'title','description'
  ],
  mixins:[ModalMixin],
}
</script>

<style lang="scss" scoped>
.card{
  .card-title{
    padding:15px 15px 5px 15px;
  }
  .card-body{
    padding:0 15px 10px 15px;
    color:#888;
  }
}

</style>