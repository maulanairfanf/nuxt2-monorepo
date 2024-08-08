<template>
  <div>Hello World {{ message }}</div>
</template>
<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
