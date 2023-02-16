<script setup lang="ts">
import { test } from '@/api/apiModule/test'

const res = test().then((res) => {
  console.log(res.data)
})
</script>

<template>
  <div>
    <code>this is home</code>
  </div>
</template>
