import { XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { approveTweet } from "../../redux/slices/projectSlice";
import { useEffect, useState } from "react";
export default function CommentTweet({ tweet, tweetIndex }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const member = useSelector((state) => state.member);
  const project = useSelector((state) => state.projectInspect);
  const [isAuthorOrChampion, setIsAuthorOrChampion] = useState(false);

  useEffect(() => {
    const isAuthor = tweet.author._id === member._id;
    const isChampion = project.champion._id === member._id;
    setIsAuthorOrChampion(isAuthor || isChampion);
  }, [tweet.author._id, member._id]);

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
        {isAuthorOrChampion && (
          <XIcon
            className="absolute right-3 top-3 h-4 w-4 text-slate-600 hover:text-slate-400 cursor-pointer"
            aria-hidden="true"
            onClick={handleDeleteClick}
          />
        )}
        <div>
          <p className="text-xs text-gray-300">
            {new Date(Number(tweet.registeredAt)).toLocaleDateString()}
          </p>
          {tweet.title && (
            <div className="mb-1">
              <span className="text-gray-700">{tweet.title}</span>
            </div>
          )}
        </div>
        <div className="text-xs text-gray-500">
          <p>{tweet.content}</p>
        </div>
      </div>
    </div>
  );
}
