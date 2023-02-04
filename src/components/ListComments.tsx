import postCommentsQuery from "@/queries/postCommentsQuery";
import Comment from "@/types/comment";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OverlaySpinner from "@/components/OverlaySpinner";
import Avatar from "./Avatar";
import moment from "moment";

const ListComments = ({ postId }: { postId: string }) => {
  const { data, refetch, isLoading } = useQuery({
    queryFn: () => postCommentsQuery(postId),
    queryKey: ["postComments", postId],
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="relative max-h-[450px] overflow-y-auto">
      {isLoading ? (
        <OverlaySpinner isLoading={isLoading} />
      ) : (
        data.data?.map((comment: Comment) => {
          const {
            _id: commentId,
            text,
            createdAt,
            user: { _id: userId, firstName, lastName, avatar },
          } = comment;
          return (
            <div key={commentId} className="flex items-start gap-2 p-4">
              <Avatar avatarUrl={avatar} name={firstName} size={45} />
              <div className="bg-gray-100 rounded-md py-1 px-2 w-full">
                <div className="flex items-start justify-between">
                  <p className="font-semibold text-pale-black">
                    {firstName} {lastName}
                  </p>
                  <p className="font-semibold text-xs">
                    {moment(moment.utc(createdAt)).fromNow(true)}
                  </p>
                </div>
                <p className="text-pale-black font-normal my-2">{text}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ListComments;
