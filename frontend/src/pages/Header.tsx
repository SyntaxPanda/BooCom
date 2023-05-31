import {Box, Button, ButtonGroup, Grid} from '@mui/material';
import React from 'react';
import {useNavigate} from "react-router-dom";
import "../css/headerCSS/HeaderPage.css"

export default function Header() {
    const navigate = useNavigate();

    function onClickHandler() {
        navigate("/register");
    }

    return (
        <>
            <Box className="Box" sx={{
                padding: 2,
                margin: 1,
                borderRadius: 3,
                boxShadow: 10
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Button></Button>
                    </Grid>
                    <Grid item xs={3}>
                        <ButtonGroup variant={"contained"}>
                            <Button style={{width: "100%", backgroundColor: "gold", color: "black"}} variant="contained"
                                    onClick={onClickHandler}>Login</Button>
                            <Button style={{width: "100%", backgroundColor: "gold", color: "black"}} variant="contained"
                                    onClick={onClickHandler}>Register</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}