import React, {useEffect, useState} from 'react';
import {User} from "../Types/UserType";
import axios from "axios";

export default function UserPage() {

    const[user , setUser] = useState<User>({course: "", password: "", name:"", id: "", img:""})
    function getUserPageById(){

        axios.get(`/user/${user.id}`)
             .then( response => setUser(response.data)
            ).catch(error => console.error(error))


    }
    useEffect(getUserPageById)
    return (
        <div>
            <div>Bild</div>
            <div>{user.name}</div>
        </div>
    )
}
