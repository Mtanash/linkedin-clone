import Image from "next/image";

interface IAvatar {
  avatarUrl?: string;
  name?: string;
  size?: number;
}

const Avatar = ({ avatarUrl, name, size = 25 }: IAvatar) => {
  if (!avatarUrl)
    return (
      <div className={`w-[${size}px] h-[${size}px] bg-slate-300 rounded-full`}>
        {name ? name[0] : ""}
      </div>
    );
  return (
    <Image
      src={avatarUrl}
      alt={name || "user avatar"}
      width={size}
      height={size}
      className="rounded-full"
    />
  );
};

export default Avatar;
