<template lang="html">
  <router-link :to="'/item/' + item.id" class="box full-width">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="item.avatar_url" alt="">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ item.subject }}</strong>
            <br>
            <small>{{ item.from_name }}</small>
          </p>
        </div>
      </div>
      <div class="media-right">
        {{ dateFormat(item.date) }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    dateFormat (dateString) {
      const monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
      ]
      const date = new Date(dateString)
      const today = new Date()
      let dateResult = ''

      if (date.toDateString() === today.toDateString()) {
        dateResult = date.toLocaleTimeString()
      } else {
        dateResult = date.getDate() + ' ' + monthNames[date.getMonth()]
      }

      return dateResult
    }
  }
}
</script>

<style lang="css" scoped>
  a {
    color: #4a4a4a;
  }
  .box:hover {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #276cda;
  }
  .image {
    overflow: hidden;
    border-radius: 100%;
  }
  .full-width {
    display: block;
    width: 100%;
  }
</style>
