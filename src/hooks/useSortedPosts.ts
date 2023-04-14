import { computed, ref } from "vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSortedPosts = (posts: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedSort = ref<any>("");

  const sortedPosts = computed(() =>
    [...posts.value].sort((post1, post2) =>
      post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
    )
  );

  return { selectedSort, sortedPosts };
};

export default useSortedPosts;
