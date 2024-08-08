import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { MdKeyboardArrowDown, MdOutlineSupportAgent, MdKeyboardArrowUp } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiSettings, CiStar, CiMobile4 } from "react-icons/ci";
import { GrIntegration } from "react-icons/gr";
import { LiaUserFriendsSolid } from "react-icons/lia";

const menuItems = [
  {
    title: "Invite friends",
    icon: <LiaUserFriendsSolid size={18} color="#737373" />,
    mark: true,
  },
  {
    title: "Integrations",
    icon: <GrIntegration size={18} color="#737373" />,
  },
  {
    title: "Settings",
    icon: <CiSettings size={18} color="#737373" />,
  },
  {
    title: "Upgrade to Pro",
    icon: <AiFillThunderbolt size={18} color="#ff6c46" />,
    mark: true,
    warning: true,
  },
  {
    title: "Mobile app",
    icon: <CiMobile4 size={18} color="#737373" />,
  },
  {
    title: "Updates",
    icon: <CiStar size={18} color="#737373" />,
  },
  {
    title: "Support",
    icon: <MdOutlineSupportAgent size={18} color="#737373" />,
  },
];

const users = [
  {
    name: "Pixsellsz",
    online: true,
    selected: true,
    image:
      "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    name: "Jack Reed",
    selected: false,
    online: false,
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
];

type ProfileMenuButton = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const ProfileMenuButton: React.FC<ProfileMenuButton> = ({ isOpen, setIsOpen }) => (
  <button
    className="flex items-center bg-neutral-200 rounded-full  pl-[2px] py-[0.3rem] w-[87px] h-[35px]"
    onClick={() => setIsOpen(!isOpen)}
  >
    <div className="flex -space-x-1 ml-[2px]">
      <div className="relative">
        <Image
          width={28}
          height={28}
          className="inline-block size-[28px] rounded-full ring-2 ring-white z-10"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Avatar"
        />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500  border-[1.2px] border-white rounded-full"></div>
      </div>
      <Image
        width={28}
        height={28}
        className="inline-block size-[28px] rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Avatar"
      />
    </div>
    <div className="flex items-center justify-center grow mr-[5px]">
      {!isOpen ? <MdKeyboardArrowDown size={16} color="#737373" /> : <MdKeyboardArrowUp size={16} color="#737373" />}
    </div>
  </button>
);

const Switch: React.FC<{
  selected: boolean;
}> = ({ selected }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={selected}
        className="sr-only peer"
        onChange={() => users.filter((item) => item.selected === selected && (item.selected = !selected))}
      />
      <div
        className="relative w-[30px] h-[16px] bg-gray-200 peer-focus:outline-none peer-focus:ring-1
       peer-focus:ring-blue-300
        dark:peer-focus:ring-blue-800
         rounded-full peer dark:bg-gray-700
          peer-checked:after:translate-x-full
           rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['']
            after:absolute after:top-[1.3px] after:start-[2px] after:left-[2px] 
             after:bg-white
              after:border-gray-300 
              after:border after:rounded-full 
              after:h-[13px] after:w-[13px] 
              after:transition-all
               dark:border-gray-600 peer-checked:bg-delve-orange"
      ></div>
    </label>
  );
};

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Header color="black" />
      <div className="flex justify-center h-lvh  bg-neutral-100 ">
        <div className="relative mt-[50px]">
          <ProfileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && (
            <div className="absolute  top-[55px] right-0  bg-white w-[240px] h-[425px]  rounded-md shadow pt-[12px]">
              {users.map((item) => (
                <div className="flex items-center px-4 pb-[16px] justify-between">
                  <div className="flex">
                    <div className="relative mr-[11px]">
                      <Image
                        width={20}
                        height={20}
                        className="inline-block size-[20px] rounded-full ring-2 ring-white "
                        alt="Avatar"
                        src={item.image}
                      />
                      {item.online && (
                        <div className="absolute bottom-0 right-0 w-[5px] h-[5px] bg-green-500 border-[1.2px] border-white rounded-full"></div>
                      )}
                    </div>

                    {item.name}
                  </div>
                  <Switch selected={item.selected} />
                </div>
              ))}
              <div className="flex items-center justify-center px-4 pb-[12px]">
                <button className="flex items-center justify-center border shadow border-neutral-200 w-full p-1.5  rounded-lg hover:bg-delve-orange hover:text-white ">
                  + New Team
                </button>
              </div>
              <ul>
                {menuItems.map((item, index) => (
                  <li
                    className={` px-4 py-[8px] ${item.mark ? "border-t border-b" : ""} hover:bg-gray-100`}
                    key={index}
                  >
                    <a className={`flex items-center ${item.warning ? "text-delve-orange" : ""}`} href="#">
                      <span className="me-2">{item.icon}</span>{" "}
                      <span className={` font-light ${item.warning ? "!font-medium" : ""} `}>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
