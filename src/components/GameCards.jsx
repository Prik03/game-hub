import React from "react";
import PlatformIcon from "./PlatformIcon";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../sevices/image_url";
import Emoji from "./Emoji";
const GameCards = ({ games }) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(games.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcon
            platform={games.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore Score={games.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {games.name}
          <Emoji rating={games.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
