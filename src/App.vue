<script setup>
import {ref, nextTick} from 'vue'

// const count = ref(0);

// function increment(){
//   count.value ++
// }

const obj = ref({
  nested: {count: 0},
  arr: ['foo','bar']
})

async function mutateDeeply(){
  // these will work as expected
  obj.value.nested.count++

  obj.value.arr.push("baz")
  await nextTick()
}

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
    <!-- <TheWelcome /> -->
    <div>
      <h2>{{ obj.arr }}</h2>
      <h2>The count is : {{ obj.nested.count }}</h2>
      <button @click="mutateDeeply">{{ obj.nested.count }}</button>
    </div>
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
