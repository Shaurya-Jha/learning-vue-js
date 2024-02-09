<script setup>
import {ref} from 'vue'

const items = ref([
  {
    title:"Naruto"
  },
  {
    title: "Death Note"
  },
  {
    title: "Tokyo Ghoul"
  }
])

// const awesome = ref(false)

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <h2>Counter app</h2>
    </div>
  </header>

  <main>
    
    <li v-for="(item,index) in items" :key="item.id">
      <p>{{ index  + ' ' + item.title }}</p>
    </li>
      
  </main>
</template>

<style scoped>
header {  
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
