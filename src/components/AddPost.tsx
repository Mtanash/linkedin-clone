import { useAppSelector } from "@/store/hooks";
import Avatar from "./Avatar";
import { selectCurrentUser } from "@/features/auth/authSlice";
import { HiPhoto } from "react-icons/hi2";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";
import { MdArticle } from "react-icons/md";
import CardLayout from "./CardLayout";

const addPostButtons = [
  {
    id: "1",
    name: "Photo",
    Icon: HiPhoto,
    color: "text-[#378fe9]",
  },
  {
    id: "2",
    name: "Video",
    Icon: BsFillPlayBtnFill,
    color: "text-[#5f9b41]",
  },
  {
    id: "3",
    name: "Job",
    Icon: GoBriefcase,
    color: "text-[#a872e8]",
  },
  {
    id: "4",
    name: "Write article",
    Icon: MdArticle,
    color: "text-[#e16745]",
  },
];

const AddPost = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <CardLayout>
      <div className="flex items-center gap-3 p-4 pb-1">
        <div>
          <Avatar
            avatarUrl={currentUser?.avatar}
            size={60}
            name={currentUser?.firstName}
          />
        </div>
        <button className="rounded-full border-[1px] p-2 py-3 outline-none border-nav-light-gray w-full flex justify-start items-center text-nav-light-gray font-semibold hover:bg-light-gray-bg transition-colors">
          Start a post
        </button>
      </div>

      <div className="flex items-center justify-between p-4 pt-1">
        {addPostButtons.map((postButton) => {
          const { id, name, Icon, color } = postButton;
          return (
            <button
              key={id}
              className="flex items-center gap-2 p-2 py-3 hover:bg-light-gray-bg transition-colors rounded-lg text-nav-light-gray font-semibold"
            >
              <Icon className={`w-[25px] h-[25px] ${color}`} /> {name}
            </button>
          );
        })}
      </div>
    </CardLayout>
  );
};

export default AddPost;
