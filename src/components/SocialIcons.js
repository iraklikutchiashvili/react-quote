import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div className="social">
      <a
        id="tweet-quote"
        href="https://twitter.com/intent/tweet"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          url="https://twitter.com/intent/tweet"
          target="_blank"
          rel="noreferrer"
        />
      </a>
      <a id="tumblr-quote" href="https://www.tumblr.com/">
        <SocialIcon
          url="https://www.tumblr.com/login?redirect_to=%2Fnew"
          target="_blank"
          rel="noreferrer"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
