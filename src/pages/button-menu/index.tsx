import Header from "@/components/Header";
import HoverButton from "@/components/HoverButton/HoverButton";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaTwitter } from "react-icons/fa";
type Props = {};

const ButtonPage = (props: Props) => {
  return (
    <>
      <Header />
      <div className="flex justify-center h-lvh bg-gradient-purple items-center ">
        <HoverButton />
      </div>
      <div className="absolute bottom-4 right-4">
        <FaTwitter size={32} color="white" />
      </div>
    </>
  );
};

export default ButtonPage;
