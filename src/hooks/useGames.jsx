import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient from "../sevices/api-clients";
import ms from "ms";

const apiClients = new APIClient("/games");

const useGames = (
  SelectedGenre,
  selectedPlatform,
  sortOrder,
  searchText,
  rating_top
) =>
  useInfiniteQuery({
    queryKey: [
      "games",
      { genresId: SelectedGenre?.id },
      { platformId: selectedPlatform?.id },
      sortOrder,
      searchText,
    ],
    queryFn: ({ pageParam = 1 }) =>
      apiClients.getAll({
        params: {
          genres: SelectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: sortOrder,
          search: searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });

export default useGames;
