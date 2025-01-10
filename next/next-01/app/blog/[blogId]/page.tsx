export default async function ({ params }: any) {
  const postId = (await params).blogId;
  console.log(postId, "id____1");
  return <div>Blog Post</div>;
}
