<template>
  <v-dialog
    v-model="visible"
    width="unset"
  >
    <v-card>
      <div class="progress">
        <v-progress-circular 
          indeterminate
          size="40"
          color="#01a1dd"
        />
        <span>
          데이터를 불러오고 있습니다
        </span>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>

import ModalMixin from '@/mixins/modal.js';

export default {
  mixins:[
    ModalMixin,
  ],
}

</script>

<style lang="scss" scoped>
.progress{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:30px;

  span{margin-top:20px;}
}
</style>