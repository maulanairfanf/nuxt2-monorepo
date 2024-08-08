<script setup lang="ts">
import { HelloWorld, HelloCode } from '@nuxt2-monorepo/my-lib';
import { textToUpperCase } from '../../../composables/useTransformText.ts';
</script>

<template>
  <main>
    <HelloWorld message="App 1" />
    <HelloCode message="App 1" />
    {{ textToUpperCase('Hello') }}
  </main>
</template>

<style scoped lang="css"></style>
