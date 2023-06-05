import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Post} from "../types/PostType";

export default function PostDetailsPage() {

    const [post, setPost] =
        useState<Post>({title: "", description: "", userName: "", postId: "" })

    const params = useParams()
    const id: string | undefined = params.id

    function getPostPageById() {
        axios.get("/api/post/" + id)
            .then(response => setPost(response.data)
            ).catch(error => console.error(error))
    }
    useEffect(getPostPageById,[])
    return (
        <div>
            <div>
                <h1>{post.title}</h1>
            </div>
            <div>
                <h1>{post.userName}</h1>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
        </div>
    );
}