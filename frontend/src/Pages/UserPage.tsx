import React, {useState} from 'react';
import {User} from "../Types/UserType";
import axios from "axios";


export default function UserPage(props: User) {

    const[user , setUser] = useState<User>({course: "", password: "", name:"", id: "", img:""})
    function getUserPageById(){
        axios.get(`/user/${props.id}`)
             .then( response => {
                 setUser(response.data)
            })
    }
    return (
        <div>
            <div>Bild</div>
            <div>{user.name}</div>
        </div>
    );
}
