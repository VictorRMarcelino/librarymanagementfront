<script setup lang="ts">
const props = defineProps({
  text: String,
})
</script>

<template>
  <button class="btn btn-primary">{{ props.text }}</button>
</template>
