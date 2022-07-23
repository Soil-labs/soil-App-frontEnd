import { XIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { approveTweet } from "../../redux/slices/projectSlice";
export default function CommentTweet({ tweet, tweetIndex }) {
  const dispatch = useDispatch();
  const router = useRouter();

  function handleDeleteClick() {
    const params = {
      projectID: router.query.projectId,
      tweetID: tweet._id,
      approved: false,
      returnTweets: true,
    };
    dispatch(approveTweet(params));
  }

  return (
    <div className="relative flex items-start space-x-3">
      <div className="relative border-2 border-gray-200 rounded-full">
        <img
          className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center border-2 border-white"
          src={`${tweet.author.discordAvatar}`}
          alt=""
        />
      </div>
      <div className="relative min-w-0 flex-1 bg-white rounded-lg px-5 py-4">
        <XIcon
          className="absolute right-3 top-3 h-4 w-4 text-slate-600 hover:text-slate-400 cursor-pointer"
          aria-hidden="true"
          onClick={handleDeleteClick}
        />
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
    </div>
  );
}
