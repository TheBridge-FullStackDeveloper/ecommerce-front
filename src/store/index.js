import { createContext, useContext } from "react";

const Context = createContext(null);

export const useGetter = () => {
    const {user, setUser, products, setProducts} = useContext(Context);
    return {user, setUser, products, setProducts} 
};

export default Context;