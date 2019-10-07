<template>
  <div class="about">
    <Content2></Content2>
    <Content3></Content3>
  </div>
</template>

<script>
import Content2 from '@/components/Content2.vue'
import Content3 from '@/components/Content3.vue'

export default {
  name: 'about',
  components: {
    Content2,
    Content3
  }
}
</script>
