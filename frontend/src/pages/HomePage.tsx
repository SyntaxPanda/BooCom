import React, {ChangeEvent, useEffect, useState} from 'react';
import Modal from 'react-modal';
import "../css/homePageCSS/HomePage.css"
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid} from "@mui/material";
import axios from "axios";
import {Link} from "react-router-dom";
import {Post} from "../types/PostType";

export default function HomePage() {

    const [open, setOpen] =
        useState(false);
    const [isOpenModal, setIsOpenModal] =
        useState(false);

    const [title, setTitle] =
        useState<string>("")
    const [description, setDescription] =
        useState<string>("")
    const [userName, setUserName] =
        useState<string>("")
    const [postList, setPostList] = useState<Post[]>([])

    function addNewPost() {
        axios.post("/api/post/new", {
            description: description,
            title: title,
            userName: userName
        }).catch(error => console.error(error))
        setTitle("")
        setDescription("")
        setUserName("")
        setOpen(false)
        getAllPosts()
    }

    function getAllPosts() {
        axios.get("/api/posts")
            .then((response) => {
                setPostList(response.data)
            }).catch(error => console.error(error))
    }

    useEffect(getAllPosts, [])

    function setTitleHandler(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value)
    }

    function setDescriptionHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        setDescription(e.target.value)
    }

    function setUserNameHandler(e: ChangeEvent<HTMLInputElement>) {
        setUserName(e.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    const handleOpenModal = () => {
        setIsOpenModal(true);
    };

    return (
        <>
            <>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={10}>
                            <div className={"post-container"}>
                                <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}>
                                    <p>All Posts</p>
                                    <div className={"post-item"}>
                                        {postList.map((post) => {
                                            return (
                                                <div className={"post-content"}>
                                                    <Link to={"/post/" + post.postId} onClick={() => {
                                                    }}>
                                                        <h3 className="post-name">{post.userName}</h3>
                                                        <p className="post-title">{post.title}</p>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <Button onClick={handleCloseModal}>Close</Button>
                                </Modal>
                            </div>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </>
            <>
                <div>
                    <div className={"add-newPost-button"}>
                        <Button style={{color: "black", backgroundColor: "gold"}}
                                variant="outlined"
                                onClick={handleOpenModal}> ALL POSTS
                        </Button>
                        <Button style={{color: "black", backgroundColor: "gold"}}
                                variant="outlined"
                                onClick={handleClickOpen}> NEW POST
                        </Button>
                    </div>
                    <Dialog open={open}>
                        <DialogTitle style={{backgroundColor: "lightblue"}}>New Post</DialogTitle>
                        <DialogContent style={{
                            width: 500,
                            height: 500,
                            backgroundColor: "lightgoldenrodyellow",
                        }}
                        >
                            <DialogContentText>
                                <input placeholder={"title"} onChange={setTitleHandler}/>
                            </DialogContentText>
                            <DialogContentText>
                                <input placeholder={"your name"} onChange={setUserNameHandler}/>
                            </DialogContentText>
                            <textarea
                                   rows={4}
                                   cols={6}
                                placeholder="Maximum 4 rows"
                                value={description}
                                   onChange={setDescriptionHandler}></textarea>
                        </DialogContent>
                        <DialogActions style={{backgroundColor: "lightblue"}}>
                            <Button style={{color: "black"}} onClick={handleClose}>Cancel</Button>
                            <Button style={{color: "black"}} onClick={addNewPost}>Post</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </>
        </>
    );
}
