<template>
  <h1>Welcome {{ firstName }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   firstName,
  // },
  mounted() {
    setTimeout(() => {
      this.$emit('call-dad');
    }, 5000);
  }
}
</script>
