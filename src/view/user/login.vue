<template>
  <div>
    login----- {{title}}
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      a: 1
    }
  },
  computed: {
    ...mapState({
      title: state => state.title
    })
  },
  created () {
    console.log(this.$store)
  }
}
</script>
