import Link from "next/link";

export default function CommentTweet({ tweet, tweetIndex }) {
  return (
    <div className="relative flex items-start space-x-3">
      <>
        <div className="relative border-2 border-gray-200 rounded-full">
          <img
            className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center border-2 border-white"
            src={`${tweet.author.discordAvatar}`}
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1 bg-white rounded-lg px-5 py-4">
          <div>
            <p className="text-xs text-gray-300">
              {new Date(Number(tweet.registeredAt)).toLocaleDateString()}
            </p>
            <div className="mb-1">
              {/* <a className="text-gray-700">{tweet.title}</a> */}
              <a className="text-gray-700">Tweet title</a>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            <p>{tweet.content}</p>
          </div>
        </div>
      </>
    </div>
  );
}