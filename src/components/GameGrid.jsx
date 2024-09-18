import React from "react";
import {
  Select,
  SimpleGrid,
  Text,
  Button,
  Box,
  Spinner,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = ({
  SelectedGenre,
  selectedPlatform,
  sortOrder,
  searchText,
}) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(SelectedGenre, selectedPlatform, sortOrder, searchText);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid padding="10px" columns={{ sm: 1, md: 2, lg: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                {" "}
                <GameCards key={game.id} games={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
    // {/* {hasNextPage && (
    //   <Button className="btn" marginY={5} onClick={() => fetchNextPage()}>
    //     {isFetchingNextPage ? "Loading..." : "Load More"}
    //   </Button>
    // )} */}
  );
};

export default GameGrid;
