import { useEffect } from "react"

export const useScrollTop = () => {
    console.log(1)
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
}