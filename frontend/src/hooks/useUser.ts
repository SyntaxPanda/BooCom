import axios from "axios";
import {useState} from "react";

export default function useUser() {

    const [user, setUser] =
        useState<string>()

    function login(username: string, password: string) {
        return axios.post("/login", undefined, {auth: {username, password}})
            .then((r) => setUser(r.data))
    }

    return {login, user}
}