<template>
  <div>

     <Header />

    <!-- <h1>Header</h1> -->
    <nuxt />
    <!-- <h1>Footer</h1> -->

    <Footer />

  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  head: {
    script: [
      { src: 'https://kit.fontawesome.com/7421f6281d.js' }
    ]
  },
  components: {
    Header,
    Footer
  }
}
</script>