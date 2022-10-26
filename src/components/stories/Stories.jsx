import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Dino",
      img: "https://images.pexels.com/photos/4545769/pexels-photo-4545769.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Lamp Russ",
      img: "https://images.pexels.com/photos/5749767/pexels-photo-5749767.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Ronaldo Tui",
      img: "https://images.pexels.com/photos/4065146/pexels-photo-4065146.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Scary Cougher",
      img: "https://images.pexels.com/photos/4307687/pexels-photo-4307687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
