<template>
  <div class="home">
    <v-btn outlined @click="()=> this.$router.push('*')">404 에러페이지</v-btn>
    <v-btn outlined @click="()=> this.$refs.alert.show(true)"> 경고메세지</v-btn>
    <v-btn outlined @click="()=> this.$refs.progress.show(true)">로딩</v-btn>
    <v-btn outlined @click="()=> this.$refs.confirm.show(true)">confirm 모달</v-btn>

    <AlertModal
      title="경고메세지"
      text="해당 명령은 실행할 수 없습니다"
      ref="alert" 
    />

    <Progress 
      ref="progress"
    />

    <Confirm 
      ref="confirm"
    />
  </div>
</template>

<script>
import AlertModal from '@/components/modal/alert.vue'
import Progress from '@/components/modal/progress.vue'
import Confirm from '@/components/modal/confirm.vue'

export default {
  name: "Home",
  components: {
    AlertModal, Progress, Confirm
  },
  methods:{
  }
};
</script>

<style lang="scss" scoped>
.home{
  padding:30px;
  .v-btn{margin-right:10px;}
}
</style>
