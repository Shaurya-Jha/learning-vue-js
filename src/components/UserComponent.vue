<template lang="html">
    <div>
        <!-- <input :value="userName" /> -->

        <h2>{{ props.username.toUpperCase() }}</h2>
        <h3>{{ props.email.toUpperCase() }}</h3>
        <h4>{{ dob }}</h4>
    </div>
</template>

<script setup>

// storing props in a variable
// const props = defineProps([
//     'username',
//     'email',
//     'dob'
// ])

const props = defineProps({
    username: String,
    email: String,
    dob: String
})

</script>

<style lang="css">
    
</style>