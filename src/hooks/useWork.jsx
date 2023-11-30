import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useWork = () => {
    const axiosPublic = useAxiosPublic();
    const {data: works = [], isPending: loading, refetch} = useQuery({
        queryKey: ['works'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/worksheet');
            return res.data;
        }
    })
    return [works,loading,refetch];
};

export default useWork;