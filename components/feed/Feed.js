import CommentTweet from "./CommentTweet";
import { Fragment } from "react";

export default function Feed({ tweets }) {
  return (
    <ul role="list" className="-mb-8">
      {tweets.map((tweet, tweetIndex) => (
        <Fragment key={tweetIndex}>
          <li key={tweet.id}>
            <div className="relative pb-8">
              {tweetIndex !== tweets.length - 1 ? (
                <span
                  className="absolute top-4 left-4 ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <CommentTweet
                tweet={tweet}
                tweetIndex={tweetIndex}
                key={tweetIndex}
              />
            </div>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}
