import { SlLike } from "react-icons/sl";

interface LikeIconPros {
  width: string;
  height: string;
  isLiked: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export const LikeIcon = ({ width, height, isLiked, onClick }: LikeIconPros) => {
  return (
    <button
      style={{ background: "none", border: "none", cursor: "pointer" }}
      onClick={onClick}
    >
      <SlLike
        style={{
          width: width,
          height: height,
          color: isLiked ? "red" : "black",
        }}
      />
    </button>
  );
};
