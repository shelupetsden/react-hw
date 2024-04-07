import {useEffect, useState} from "react";

const Post = ({postNumber}) => {

    const [post, setPost] = useState(null)

    useEffect(() => {
        async function loadPosts() {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`);
            let post = await response.json();
            setPost(post);
        }

        loadPosts();
    }, [postNumber]);


    if (!post || !post.body) {
        return (
            <span>Loading...</span>
        );
    }

    return (<>
        <h1>{post.title}</h1>
        <span>{post.body}</span>
    </>)
};

export default Post;