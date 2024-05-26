import { TwitterSidebarButton } from "@/interfaces/global";
import { CiMail } from "react-icons/ci";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { PiBookmarkSimpleLight } from "react-icons/pi";

export const sideBarOptions: TwitterSidebarButton[] = [
  { id: 1, title: "Home", icon: <MdHomeFilled /> },
  { id: 2, title: "Explore", icon: <FaSearch /> },
  { id: 3, title: "Notifications", icon: <IoNotificationsOutline /> },
  { id: 4, title: "Messages", icon: <CiMail /> },
  { id: 5, title: "Bookmarks", icon: <PiBookmarkSimpleLight /> },
  { id: 6, title: "Profile", icon: <FaRegUser /> },
];
