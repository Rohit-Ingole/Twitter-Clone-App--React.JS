import { Avatar, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
import firebase from "firebase";

function TweetBox() {
  const [seed, setSeed] = useState();
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const [tweetmessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Rohit Ingole",
      userName: "rohitingole",
      text: tweetmessage,
      image: tweetImage,
      verified: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetbox__input">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <input
            type="text"
            placeholder="Whats happening ?"
            value={tweetmessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetbox__inputImage"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className="tweetbox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
