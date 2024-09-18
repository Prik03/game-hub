import { Badge, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const CriticScore = ({ Score }) => {
  const color = Score > 75 ? "green" : Score > 60 ? "yellow" : "";

  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color}>
      {Score}
    </Badge>
  );
};

export default CriticScore;
