import { useQuery } from "@tanstack/react-query"
import APIClient from "../sevices/api-clients"
import ms from 'ms';

const apiClients=new APIClient('platforms/lists/parents')

const usePlatoform=()=>useQuery({
    queryKey:['platform'],
    queryFn:apiClients.getAll,
    staleTime:ms('24h'),
})


export default usePlatoform
