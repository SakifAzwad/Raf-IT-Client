import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useHR = () => {
    const { user, loading } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: isHR, isPending: isHRLoading } = useQuery({
        queryKey: [user?.email, 'isHR'],
        enabled: !loading,
        queryFn: async () => {
            
            const res = await axiosPublic.get(`/users/hr/${user.email}`);
            // console.log(res.data);
            return res.data?.hr;
        }
    })
    return [isHR, isHRLoading];
};

export default useHR;