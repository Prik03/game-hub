import React from "react";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

const PlatformIcon = ({ platform }) => {
  const Iconmap = {
    playstation: FaPlaystation,
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack>
      {" "}
      {platform.map((p) => {
        const IconComponent = Iconmap[p.slug]; // Get the correct icon component
        return IconComponent ? <Icon as={IconComponent} key={p.slug} /> : null; // Render the icon if it exists
      })}
    </HStack>
  );
};

export default PlatformIcon;
