import { useEffect, useState } from "react";
import { useGetter } from "store";
import services from "services";


export const useLogin =({onSuccess}) => {
    const { user, setUser} = useGetter();

    const login = async (data) => {
        const result = await services.auth.login(data);
        result.success && setUser()
    }

    useEffect(() =>{
        user && onSuccess();
    }, [user]);

    return login;
}
