import { Heading } from "@chakra-ui/react";
import React from "react";

const GameHading = ({ SelectedGenre, selectedPlatform }) => {
  const heading = `${SelectedGenre?.name || ""}  Game`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHading;
