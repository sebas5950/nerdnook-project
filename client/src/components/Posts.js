import { useState, useEffect } from "react"
import PostCard from "./PostCard"

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() =>{
        fetch("/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])


    return(
        <div>
         {posts.map((post) => {
            return <PostCard post={post} key={post.id}/>
         })}
        </div>
    )
}

export default Posts