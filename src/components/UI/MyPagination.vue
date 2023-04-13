<template>
  <div class="page__wrapper">
    <div
      class="page"
      v-for="pageNumber in totalPages"
      @click="changePage(pageNumber)"
      :key="pageNumber"
      :class="{
        'current__page': page === pageNumber,
      }"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>
<script>
export default {
  name: "my-pagination",

  props: {
    totalPages: {
      type: Number,
    },
    page: {
      type: Number
    }
  },

  methods: {
    changePage(pageNumber) {
      this.$emit("update", pageNumber);
    }
  }
};
</script>

<style>
.page {
  border: 1px solid black;
  padding: 8px;
}
.page__wrapper {
  display: flex;
  justify-content: center;
}
.current__page {
  border: 2px solid teal;
}
</style>
