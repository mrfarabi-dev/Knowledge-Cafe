import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    // !blogs data loaded setup 
    const [Blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;