import PostListItem from "./PostListItem";
// import InfiniteScroll from "react-infinite-scroll-component";

export default function PostList() {
  return (
    // <InfiniteScroll
    //   dataLength={allPosts.length}
    //   next={fetchNextPage}
    //   hasMore={!!hasNextPage}
    //   loader={<h4>Loading more posts...</h4>}
    //   endMessage={
    //     <p>
    //       <b>All posts loaded!</b>
    //     </p>
    //   }
    // >
    <div className="flex flex-col gap-12 mb-8">
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
    // </InfiniteScroll>
  );
}
