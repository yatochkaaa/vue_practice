import { Post } from "@/types";
import { computed, ref } from "vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSortedPosts = (sortedPosts: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchQuery = ref<any>("");

  const sortedAndSearchedPosts = computed(() =>
    sortedPosts.value.filter((post: Post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );

  return { searchQuery, sortedAndSearchedPosts };
};

export default useSortedPosts;
