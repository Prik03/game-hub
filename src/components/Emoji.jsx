import React from "react";
import bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.png";
import thumbup from "../assets/thumbup.png";
import { Image } from "@chakra-ui/react";

const Emoji = ({ rating }) => {
  if (rating < 3) return null;

  const emojiMap = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbup, alt: "meh", boxSize: "20px" },
    5: { src: bullseye, alt: "meh", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
