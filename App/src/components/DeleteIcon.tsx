import { AiOutlineDelete } from "react-icons/ai";

interface DeleteIconProps {
  width: string;
  height: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export const DeleteIcon = ({ width, height, onClick }: DeleteIconProps) => {
  return (
    <button
      style={{ border: "none", background: "none", cursor: "pointer" }}
      onClick={onClick}
    >
      <AiOutlineDelete style={{ width: width, height: height }} />
    </button>
  );
};
