<template lang="html">
  <div class="box media">
    <!-- <inbox v-for="email in emailList" :item="email" :path="email.id" :key="email" class=""></inbox> -->
    <div class="media-left">
      <figure class="image is-48x48">
        <img :src="info.avatar_url" alt="">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <h2 class="title is-spaced is-4">
          <strong>{{ info.subject }}</strong>
        </h2>
        <p class="tag subtitle">
          From: &nbsp;<strong>{{ info.from_name }}</strong> &nbsp;({{ info.from_email }})
        </p>
        <p class="tag subtitle">
          To: &nbsp;<strong>{{ info.to_name }}</strong> &nbsp;({{ info.to_email }})
        </p>
        <p class="tag subtitle">
          Date: &nbsp;<strong>{{ info.date }}</strong>
        </p>
        <hr>
        <p class="message-box subtitle">
          <strong class="message-title">Message:</strong>
        </p>
        <p class="message-box subtitle">
          {{ info.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchEmailItem } from '../services/api'

export default {
  name: 'Email',
  components: {

  },
  data () {
    return {
      info: {}
    }
  },
  created () {
    let self = this
    fetchEmailItem(self.$route.params.id).then((res) => {
      if (res.status === 200) {
        self.info = res.data
      }
    })
  }
}
</script>

<style lang="css" scoped>
  hr {
    margin: 1rem 0 1.5rem;
  }
  .title {
    margin-top: 0.5rem;
  }
  .subtitle {
    font-size: 0.875rem;
  }
  .content {
    padding-bottom: 0.75rem;
  }
  .message-title {
    margin: 1rem 0;
  }
  .message-box {
    margin-top: 1rem;
  }
  .sidebar {
    width: 12.5rem;
  }
  .compose-btn {
    margin-bottom: 1.25rem;
    width: 100%;
  }
  .image {
    overflow: hidden;
    border-radius: 100%;
  }
</style>
