import { Commit } from "vuex";
import { Post, SortOption, SortValue } from "@/types";
import axios from "axios";

interface PostState {
  posts: Post[];
  isPostsLoading: boolean;
  selectedSort: SortValue;
  searchQuery: string;
  page: number;
  limit: number;
  totalPages: number;
  sortOptions: SortOption[];
}

export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По описанию" },
    ],
  }),
  getters: {
    sortedPosts(state: PostState) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sortedAndSearchPosts(state: PostState, getters: any) {
      return getters.sortedPosts.filter((post: Post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state: PostState, posts: Post[]) {
      state.posts = posts;
    },
    setLoading(state: PostState, isPostsLoading: boolean) {
      state.isPostsLoading = isPostsLoading;
    },
    setPage(state: PostState, page: number) {
      state.page = page;
    },
    setSelectedSort(state: PostState, selectedSort: SortValue) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state: PostState, totalPages: number) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state: PostState, searchQuery: string) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchPosts({ state, commit }: { state: PostState; commit: Commit }) {
      try {
        commit("setLoading", true);
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit('setTotalPages', Math.ceil(res.headers["x-total-count"] / state.limit));
        commit('setPosts', res.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }: { state: PostState; commit: Commit }) {
      try {
        commit("setPage", state.page + 1);
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit('setTotalPages', Math.ceil(res.headers["x-total-count"] / state.limit));
        commit('setPosts', [...state.posts, ...res.data]);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true
};
