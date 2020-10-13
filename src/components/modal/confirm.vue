<template>
  <v-dialog
    v-model="visible"
    width="unset"
    max-width="500"
  >
    <v-card>
      <v-card-title>타이틀을 입력하세요</v-card-title>
      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus accusamus magnam esse sunt minima itaque et debitis unde tenetur, quas nulla culpa suscipit hic iusto repellat. Voluptate deleniti perferendis numquam!</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text>확인</v-btn>
        <v-btn text>취소</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from '@/mixins/modal.js'

export default {

  mixins:[ModalMixin],
}
</script>