import { useEffect, useState } from "react";

const useMenu = (category) => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://bistro-boss-server-one-umber.vercel.app/menu?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, [])
    return { menu, loading };
}
export default useMenu;