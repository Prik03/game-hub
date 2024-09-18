import { useQuery } from "@tanstack/react-query";
import APIClient from "../sevices/api-clients";
import ms from 'ms';
const apiClient =new APIClient('/genres')

const useGenres=()=>useQuery({
    queryKey:['genresId'],
    queryFn:apiClient.getAll,
    staleTime:ms('24h'),

    
})

export default useGenres; 