import PostList from "../components/PostList";

export default function PostListPage() {
  return (
    <div className="">
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="">
          <PostList />
        </div>
      </div>
    </div>
  );
}
