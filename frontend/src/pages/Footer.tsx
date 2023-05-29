import React, {ChangeEvent, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {User} from "../types/UserType";
import "../css/footerCSS/FooterPage.css";
import userImage_placeholder from '../images/userImage_placeholder.png';
import BooComLogo from '../images/BooComLogo.png';

export default function Footer() {

    const [userList, setUserList] =
        useState<User[]>([])

    const [filter, setFilter] =
        useState("")

    const [filteredData, setFilteredData]
        = useState<User[]>([])

    function getUserFromList() {
        setUserList([])
        axios.get("/api/users")
            .then(response => {
                setUserList(response.data);
            })
            .catch(error => {
                console.log("Error fetching user data:", error);
            });
    }

    const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value)
        const newFilter = userList.filter((value) => {
            return value.name.toLowerCase().includes(filter.toLowerCase());
        })
        if (filter === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    useEffect(getUserFromList, [filteredData]);

    return (
        <div className={"footer-style"}>
            <div className={"booComLogoRegisterPage"}>
                <img className={"boocomimg"} src={BooComLogo} alt="bild"/>
            </div>
            <div className={"inputToCenter"}>
                <div>
                    <input type="text" onChange={handleFilter}/>
                </div>
            </div>
            <div className={"dataResultBox"}>
                {filteredData.length !== 0 && (
                    <div className={"dataResult"}>
                        {filteredData.slice(0, 15).map((user) => {
                            return (
                                <Link to={"/user/" + user.id}>
                                    <div className={"dataItem"}>
                                        <div><img className={"imgSize"} src={userImage_placeholder} alt="bild"/></div>
                                        <p className={"userInformation"}>
                                            {user.img} {user.name} {user.course}
                                        </p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                )
                }
            </div>
        </div>
    );
}