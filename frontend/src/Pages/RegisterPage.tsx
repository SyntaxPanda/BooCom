import React, {ChangeEvent, FormEvent, useState} from 'react';
import axios from "axios";
import {User} from "../Types/UserType";
import {useNavigate} from "react-router-dom";

export default function RegisterPage(props: User) {
    const navigate = useNavigate();

    const [name, setName] =
        useState<string>("")
    const [password, setPassword] =
        useState<string>("")
    const[course, setCourse] = useState("")

    const [userList, setUserList] =
        useState<User[]>([])

    function addUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(course)
        axios.post("/api/register/user", {
            name: name,
            password: password,
            course: course
        })
            .then(response => {
                setUserList(response.data)
                navigate('/user/' + response.data.id)
            })
        setName("")
        setPassword("")

    }

    function OnChangeHandlerUserName(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function OnChangeHandlerUserPassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    function OnChangeHandlerUserCourse(event: ChangeEvent<HTMLSelectElement>) {
        setCourse(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addUser}>
                <div>
                    <input placeholder="Name" type="text" value={name} onChange={OnChangeHandlerUserName}/>
                </div>
                <div>
                    <input placeholder={"Password"} type="password" value={password}
                           onChange={OnChangeHandlerUserPassword}/>
                </div>
                <div>
                    <select name={"course"} onChange={OnChangeHandlerUserCourse}>
                        <option >plz select course</option>
                        <option value={"BOJAVA231"}>Bo-java-23-1</option>
                        <option value={"COACH"}>Coach</option>
                    </select>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
}
