<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск..."
      v-focus
    />
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
    </div>
    <!-- <my-dialog v-model:show="isDialogVisible">
      <post-form @create="createPost" />
    </my-dialog> -->
    <post-list
      v-if="!isPostsLoading"
      :posts="sortedAndSearchPosts"
      @remove="removePost"
    />
    <div v-else>Идёт загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
// import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  components: {
    // PostForm,
    PostList,
  },

  data() {
    return {
      isDialogVisible: false,
    };
  },

  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.isDialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.isDialogVisible = true;
    },
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchPosts: "post/sortedAndSearchPosts",
    }),
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
.app__btns {
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
}
</style>
