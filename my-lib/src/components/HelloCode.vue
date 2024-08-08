<template>
  <div>Hello Code {{ message }}</div>
</template>
<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
