<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>
<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 8px 12px;
  margin-top: 12px;
}
</style>
