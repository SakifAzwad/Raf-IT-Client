import { useEffect, useState } from "react";

const useMemberData = () => {
    const [datas,setData] = useState()

    useEffect(()=>{

        fetch('/member.json')
        .then(res=>res.json())
        .then(data => setData(data))

    },[])
    
    return [datas];
};

export default useMemberData;