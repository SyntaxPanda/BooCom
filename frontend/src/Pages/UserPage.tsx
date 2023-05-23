import React from 'react';
import {User} from "../Types/UserType";
import axios from "axios";

export default function UserPage(props: User) {

  //  const[user , setUser] = useState<User>({course: "", password: "", name:"", id: "", img:""})
    function getUserPageById(){
        axios.get(`/user/${props.id}`)
             .then( response => {
                 props.name=response.data
                 props.img=response.data
            })
    }

    return (
        <div>
            <div>Bild</div>
            <div>{props.name}</div>
        </div>
    );
}
