<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  padding: 8px 12px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
