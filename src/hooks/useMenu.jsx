import { useEffect, useState } from "react";

const useMenu = (category) => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const menuItem = data.filter(item => item.category === category);
                setMenu(menuItem);
                setLoading(false);
            })
    }, [])
    return { menu, loading };
}
export default useMenu;