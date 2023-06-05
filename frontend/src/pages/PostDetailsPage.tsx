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
        <div>
            <div className={"title"}>
                <h1>Title: {post.title}</h1>
            </div>
            <div className={"userName"}>
                <h1>User: {post.userName}</h1>
            </div>
            <div className={"description"}>
                <p>Description:  {post.description}</p>
            </div>
        </div>
    );
}