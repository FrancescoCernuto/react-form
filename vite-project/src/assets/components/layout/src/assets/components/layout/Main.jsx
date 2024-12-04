import { useState, useEffect } from "react";
import CardList from "../CardList";
import { posts } from "../../data/posts";

const formInitialData = {
    author: "",
    content: "",
    isPublic: false,
    tags: [],
    title: "",
    category: "",
};

export default function Main() {
    const [formData, setFormData] = useState(formInitialData);
    const [cardList, setCardList] = useState([...posts]);
    useEffect(() => {
        if (formData.isPublic) alert("Public Post!");
    }, [formData.isPublic]);

    function handleFormChange(e) {
        const newFormData = {
            ...formData,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value,
        };
        setFormData(newFormData);
    }
