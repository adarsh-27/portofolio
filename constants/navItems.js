import {IconPresentationAnalytics } from "@tabler/icons-react";
import { IoHomeOutline } from "react-icons/io5";
import { LiaInfoSolid } from "react-icons/lia";
import { IoBulbOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { ImBlog } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";

const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IoHomeOutline className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <LiaInfoSolid className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconPresentationAnalytics className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IoBulbOutline className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experiences",
      icon: <RiUserStarLine className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blogs",
      link: "#blogs",
      icon: <ImBlog className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <BiMessageDetail className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

export default navItems 