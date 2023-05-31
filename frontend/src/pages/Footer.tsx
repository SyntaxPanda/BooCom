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

    const [selectedUser, setSelectedUser] =
        useState<User | null>(null)

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

    const handleUserSelected = (user: User) => {
        setSelectedUser(user);
    }

    const handleClerarSelection = () => {
        setSelectedUser(null);
        setFilteredData([]);
    }

    useEffect(getUserFromList, [filteredData]);

    return (
        <div className={"footer-style"}>
            <div className={"booComLogoRegisterPage"}>
                <img className={"boocomimg"} src={BooComLogo} alt="bild"/>
            </div>
            <div className={"inputToCenter"}>
                <div>
                    <input type="text" onChange={handleFilter} className={selectedUser ? 'hideDropdown' : ''}/>
                </div>
            </div>
            <div className={"dataResultBox"}>
                {selectedUser === null && filteredData.length !== 0 && (
                    <div className={"dataResult"}>
                        {filteredData.slice(0, 15).map((user) => {
                            return (
                                <Link to={"/user/" + user.id} onClick={() => {
                                    handleUserSelected(user);
                                    handleClerarSelection();
                                }}>
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