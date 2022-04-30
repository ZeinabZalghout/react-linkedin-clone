import React, { useEffect, useState } from "react";
import Post from "./Post";
import FlipMove from "react-flip-move"
import { useSelector, useDispatch } from "react-redux";
import { selectuser } from "./features/counter/userSlice";
import CreateIcon from "@material-ui/icons/Create";
import Image from "@material-ui/icons/Image";
import Subscriptions from "@material-ui/icons/Subscriptions";
import EventNote from "@material-ui/icons/EventNote";
import CalendarViewDay from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import { collection, getDocs, addDoc} from "firebase/firestore";
import "./Feed.css";
import { Avatar } from "@material-ui/core";
import { db } from "./Firebase";
export function Feed() {
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectuser);
  useEffect(async () => {
 const response = await getDocs(collection(db, "posts"));
    setPost(
      response.docs.map((doc) => ({
        id:doc.id,
        data: doc.data(),
      }))
    );
  }, [post]);

  const SendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      name: user.email.substring(0, user.email.lastIndexOf("@")),
      description: user.email,
      message: input,
      // timestamp: firebase.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__avatar">
          <Avatar>{user.email[0]}</Avatar>
          <div className="feed__input">
            <form onSubmit={SendPost}>
              <input
                value={input}
                type="text"
                placeholder="Start a Post"
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Post</button>
            </form>
            <CreateIcon />
          </div>
        </div>
        <div className="feed__inputoptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="EventNote" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {post.map((data) => {

          return (
            <Post
              key={data.id}
              id={data.id}
              name={data.data.name}
              description={data.data.description}
              message={data.data.message}
              photourl={data.data.photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}
