import { useState } from "react";
import PostList from "./PostList";
import { posts as data } from "../data/posts";

export default function Main() {
    const [titleInput, setTitleInput] = useState("");
    const [authorInput, setAuthorInput] = useState("");
    const [statusInput, setStatusInput] = useState("");
    const [contentInput, setContentInput] = useState("");

    const [filterInput, setFilterInput] = useState("");

    const [posts, setPosts] = useState(data);

    function handleClick(id) {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newPost = {
            title: titleInput,
            content: contentInput,
            status: statusInput,
            author: authorInput,
            id: posts.length,
        };







        return (