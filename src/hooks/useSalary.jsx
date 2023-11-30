
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSalary = () => {
    const axiosPublic = useAxiosPublic();
    const {data: salary = [], isPending: loading, refetch} = useQuery({
        queryKey: ['salary'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/salary');
            return res.data;
        }
    })
    return [salary,loading,refetch];
};

export default useSalary;