<template>
  <div id="box">
      <Header />
      <to-do></to-do>
      <Footer />
  </div>
</template>
<script>
import Header from './header.jsx'
import Footer from './footer.jsx'
import ToDo from './todo.jsx'
export default {
  data() {
      return {
      }
  },
  components: {
      Header, Footer, ToDo
  }
}
</script>
