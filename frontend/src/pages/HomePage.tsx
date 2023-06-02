import React, {ChangeEvent, useState} from 'react';
import "../css/headerCSS/HeaderPage.css"

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, getFabUtilityClass,
    styled, TextareaAutosize,
} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Post} from "../types/PostType";

export default function HomePage() {

    const[title, setTitle] =
        useState<string>("")

    const[description, setDescription] =
        useState<string>("")

    const[userName, setUserName] =
        useState<string>("")
    const[postList,setPostList] = useState<Post[] >([])

    const navigate = useNavigate();

    function addNewPost(){
        axios.post("/api/post/new", {
            description: description,
            title: title,
            userName: userName
        })
            .then()
        setTitle("")
        setDescription("")
        setUserName("")
    }

    function getAllPosts() {
        axios.get("/api/posts")
            .then((response) => {
                setPostList(response.data)
            })
    }

    function setTitleHandler(e: ChangeEvent<HTMLInputElement>){
        setTitle(e.target.value)
    }

    function setDescriptionHandler(e: ChangeEvent<HTMLTextAreaElement>){
        e.preventDefault()
        setDescription(e.target.value)
    }

    function setUserNameHandler(e: ChangeEvent<HTMLInputElement>){
        setUserName(e.target.value)
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
        ({ theme }) => `
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
        <div>
            <Button style={{backgroundColor: "gold", color: "black"}} variant="outlined" onClick={handleClickOpen}>
                NEW POST
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Post</DialogTitle>
                <DialogContent style={{
                    width: 500,
                    height: 500
                }}
                >
                    <DialogContentText>
                        <input placeholder={"title"} onChange={setTitleHandler}/>
                    </DialogContentText>
                    <DialogContentText>
                        <input placeholder={"your name"} onChange={setUserNameHandler}/>
                    </DialogContentText>
                    <StyledTextarea
                        maxRows={20}
                        minRows={20}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        // defaultValue="blub here plz"
                        value={description}
                        onChange={setDescriptionHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addNewPost}>Post</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
