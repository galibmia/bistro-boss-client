import { useEffect, useState } from "react";

const useMenu = (category) => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/menu?category=${category}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // const menuItem = data.filter(item => item.category === category);
                setMenu(data);
                setLoading(false);
            })
    }, [])
    return { menu, loading };
}
export default useMenu;