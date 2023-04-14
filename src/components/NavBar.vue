<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px;">О сайте</my-button>
      <my-button @click="$router.push('/store')" style="margin-left: 20px;">Store</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  height: 50px;
  display: flex;
  align-items: center;
  background-color: lightgray;
  padding: 0 24px;
  box-shadow: 2px 2px 4px gray;
}

.navbar__btns {
  margin-left: auto;
}
</style>
