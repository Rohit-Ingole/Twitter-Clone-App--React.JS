import React from "react";
import "./Widgets.css";

import {
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed
          tweetId={"1383087938171457537"}
          className="twitterEmbed"
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SamsungIndia"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/SamsungIndia"}
          options={{ text: "#reactjs is awesom", via: "Rohit51882468" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
