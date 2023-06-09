import React, {ChangeEvent, FormEvent, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "../css/registerCSS/RegisterPage.css"

export default function RegisterPage() {

    const navigate = useNavigate();

    const [name, setName] =
        useState<string>("")
    const [password, setPassword] =
        useState<string>("")
    const [course, setCourse] = useState("")

    function addUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(course)
        axios.post("/api/register/user", {
            name: name,
            password: password,
            course: course
        })
            .then(response => {
                navigate('/user/' + response.data.id)
            }).catch(error => console.error(error))
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
        <div className={"registerPage"}>
            <div className={"registerForm"}>
                <form onSubmit={addUser}>
                    <div className={"inputRegisterPageName"}>
                        <input placeholder="Name" type="text" value={name} onChange={OnChangeHandlerUserName}/>
                    </div>
                    <div className={"inputRegisterPagePassword"}>
                        <input placeholder={"Password"} type="password" value={password}
                               onChange={OnChangeHandlerUserPassword}/>
                    </div>
                    <div className={"selectCourseRegisterPage"}>
                        <select name={"course"} onChange={OnChangeHandlerUserCourse}>
                            <option>Please select course:</option>
                            <option value={"BOJAVA231"}>Bo-java-23-1</option>
                            <option value={"COACH"}>Coach</option>
                        </select>
                    </div>
                    <div className={"buttonSendRegisterPage"}>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
