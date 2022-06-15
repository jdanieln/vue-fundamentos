<template>
  <div class="home">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
  },
  data: () => ({
    message: 'Welcome to Your Vue.js + TypeScript App, Message from HomeView Data'
  }),
  methods: {
    handleHelloMessage(param: string) {
      console.log("SE HA RECIBIDO UN EVENTO", param);
    }
  }
});
</script>
