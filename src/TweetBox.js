import { Avatar, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./TweetBox.css";

function TweetBox() {
  const [seed, setSeed] = useState();
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetbox__input">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <input type="text" placeholder="Whats happening ?" />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetbox__inputImage"
        />
        <Button className="tweetbox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
