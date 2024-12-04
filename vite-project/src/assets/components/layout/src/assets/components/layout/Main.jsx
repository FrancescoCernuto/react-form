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