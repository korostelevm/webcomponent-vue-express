<template>
  <div class="hello">
   I'm a webcomponent
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  color: #42b983;
}
</style>
