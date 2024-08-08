import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
  color?: string;
};

const Header: React.FC<Props> = ({ color }) => {
  return (
    <div className="absolute top-4 left-4">
      <Link href="/">
        <FaArrowLeft size={32} color={color ? color : "white"} />
      </Link>
    </div>
  );
};

export default Header;
