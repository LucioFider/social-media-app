import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Dino",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4065137/pexels-photo-4065137.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Ronaldo Tui",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.pexels.com/photos/14072282/pexels-photo-14072282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Roma Huma",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/6221377/pexels-photo-6221377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.pexels.com/photos/6100291/pexels-photo-6100291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Roma Huma",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/6221377/pexels-photo-6221377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Post post={post} key={post.id} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
