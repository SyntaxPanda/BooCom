import React, {ChangeEvent, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {User} from "../types/UserType";
import "../css/footerCSS/FooterPage.css";
import userImage_placeholder from '../images/userImage_placeholder.png';
import BooComLogo from '../images/BooComLogo.png';
import {Box, Grid} from "@mui/material";

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

    function clearFilter() {
        setFilter("")
    }

    const handleClearSelection = () => {
        setSelectedUser(null);
        setFilteredData([]);
    }

    useEffect(getUserFromList, [filteredData]);

    return (
        <>
            <Box className="Box" sx={{
                padding: 2,
                margin: 1,
                marginBottom: 2.5,
                borderRadius: 3,
                boxShadow: 10
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <img className={"boocomimg"} src={BooComLogo} alt="bild"/>
                    </Grid>
                    <Grid item xs={8}>
                        <label className={"search-color"}>Search User: </label>
                        <input className={"inputfield"} value={filter} placeholder={"Search user here!"} type="text"
                               onChange={handleFilter}/>
                    </Grid>
                    <Grid item xs={2}>
                        {selectedUser === null && filteredData.length !== 0 && (
                            <div className={"dataResult"}>
                                {filteredData.slice(0, 15).map((user) => {
                                    return (
                                        <Link to={"/user/" + user.id} onClick={() => {
                                            handleUserSelected(user);
                                            handleClearSelection();
                                            clearFilter();
                                        }}>
                                            <div className={"dataItem"}>
                                                <div><img className={"imgSize"} src={userImage_placeholder} alt="bild"/>
                                                </div>
                                                <p className={"userInformation"}>
                                                    {user.img} {user.name} {user.course}
                                                </p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </>

    );
}