import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import GameHading from "./components/GameHading";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import NavBar from "./components/NavBar";

const HomePage = () => {
  const [SelectedGenre, setSelectedGenre] = useState();
  const [selectedPlatform, setSelectedPlatform] = useState();
  const [sortOrder, setSortOrder] = useState();
  const [searchText, setSearchText] = useState(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setSearchText(searchText)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={SelectedGenre}
            onSelectGenre={(genres) => setSelectedGenre(genres)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHading
          SelectedGenre={SelectedGenre}
          selectedPlatform={selectedPlatform}
        />
        <HStack>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector onSelectSortOrder={(Order) => setSortOrder(Order)} />
        </HStack>
        <GameGrid
          sortOrder={sortOrder}
          selectedPlatform={selectedPlatform}
          SelectedGenre={SelectedGenre}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
