import React, { useState, useEffect } from "react";
import "./Post.css";

import { Avatar } from "@material-ui/core";
import {
  ChatBubble,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";

function Post({ displayName, userName, verified, text, image }) {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerTExt">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {verified && (
                  <VerifiedUser
                    className="post__badge"
                    fontSize="small"
                  ></VerifiedUser>
                )}
                @{userName}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" className="post__image" />
        <div className="post__footer">
          <ChatBubble fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
