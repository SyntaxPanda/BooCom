import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Post} from "../types/PostType";
import "../css/postDetailsPageCSS/PostDetails.css"

export default function PostDetailsPage() {

    const [post, setPost] =
        useState<Post>({title: "", description: "", userName: "", postId: "" })

    const params = useParams()
    const id: string | undefined = params.id

    function getPostPageById() {
        axios.get("/api/post/" + id )
            .then(response => setPost(response.data)
            ).catch(error => console.error(error))
    }

    useEffect(getPostPageById,[])

    return (
        <div className={"DetailsBox"}>
            <div className={"title"}>
                Title: {post.title}
            </div>
            <div className={"userName"}>
                User: {post.userName}
            </div>
            <div className={"description"}>
                <div className={"descriptionBox"}> Description: {post.description}</div>
            </div>
        </div>
    );
}