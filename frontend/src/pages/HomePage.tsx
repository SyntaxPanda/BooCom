import React, {useState} from 'react';
import "../css/headerCSS/HeaderPage.css"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    IconButton,
    styled,
    TextField,
    Typography
} from "@mui/material";

export default function HomePage() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button style={{backgroundColor: "gold", color: "black"}} variant="outlined" onClick={handleClickOpen}>
                NEW POST
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Post</DialogTitle>
                <DialogContent style={{
                    width: 500,
                    height: 100
                }}
                >
                    <DialogContentText>
                        User name
                   </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="add new post"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Post</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
