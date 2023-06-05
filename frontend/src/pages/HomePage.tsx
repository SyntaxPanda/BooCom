import React, {ChangeEvent, useEffect, useState} from 'react';
import Modal from 'react-modal';
import "../css/homePageCSS/HomePage.css"

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, Grid,
    styled, TextareaAutosize,
} from "@mui/material";
import axios from "axios";
import {Link} from "react-router-dom";
import {Post} from "../types/PostType";

export default function HomePage() {

    const [title, setTitle] =
        useState<string>("")

    const [description, setDescription] =
        useState<string>("")

    const [userName, setUserName] =
        useState<string>("")
    const [postList, setPostList] = useState<Post[]>([])

    const [selectedPost, setSelectedPost] =
        useState<Post | null>(null)

    const handlePostSelected = (post: Post) => {
        setSelectedPost(post);
    }

    const handleClearSelection = () => {
        setSelectedPost(null);
    }

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

    const [open, setOpen] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

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

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
    };

    const StyledTextarea = styled(TextareaAutosize)(
        ({theme}) => `
    width: 460px;
    height: 300px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0px 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
    );
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
                                                        handlePostSelected(post)
                                                        handleClearSelection()
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
