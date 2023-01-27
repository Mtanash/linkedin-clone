import { ReactNode } from "react";

const CardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border-[1px] border-gray-300">
      {children}
    </div>
  );
};

export default CardLayout;
