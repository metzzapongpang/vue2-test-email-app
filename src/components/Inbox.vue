<template lang="html">
  <div class="">
    <email-item v-for="email in emailList" :item="email" :path="email.id" :key="email" class=""></email-item>
  </div>
</template>

<script>
import EmailItem from './EmailItem'
import { fetchEmailList } from '../services/api'

export default {
  name: 'Home',
  components: {
    EmailItem
  },
  data () {
    return {
      emailList: []
    }
  },
  created () {
    let self = this
    fetchEmailList().then((res) => {
      if (res.status === 200) {
        self.emailList = res.data.inbox_list
      }
    })
  }
}
</script>

<style lang="css">
  .sidebar {
    width: 200px;
  }
  .compose-btn {
    margin-bottom: 20px;
    width: 100%;
  }
</style>
