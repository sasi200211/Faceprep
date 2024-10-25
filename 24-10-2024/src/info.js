import { useState } from "react";
import Bloglist from "./Bloglist";

const Info = () => {
    const [blogs, setBlogs]=useState([
        {title:'HTML',body:'HTML-world',Trainer:'S.P.SASI',id:85},
        {title:'CSS',body:'CSS-world',Trainer:'S.DHANUSH',id:86},
        {title:'Bootstrap',body:'Bootsrap-world',Trainer:'S.DHANUSH',id:87},
        {title:'JAVA-SCRIPT',body:'JAVA-SCRIPT-world',Trainer:'S.DHANUSH',id:88},
        {title:'REACT JS',body:'REACT JS-world',Trainer:'S.P.SASI',id:89},
        {title:'MONGO DB',body:'MONGO DB-world',Trainer:'S.P.SASI',id:90},
        {title:'NODE JS',body:'NODE JS-world',Trainer:'S.P.SASI',id:91},
        {title:'EXPRESS JS',body:'EXPRESS JS-world',Trainer:'S.DHANUSH',id:92}
    ]);
    const handleclass=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id===id);
        setBlogs(newBlogs);
}
    return (  
        <div class="Info">
            <p class="title">Learning Path for MERN STACK </p>
            <div class="container">
            <Bloglist blogs={blogs} title="All Blogs!" handleclass={handleclass}/></div>
           {/* <Bloglist blogs={blogs.filter((blog)=>blog.Trainer==='S.P.SASI')} title="SASI's Blogs!"/>
           <Bloglist blogs={blogs.filter((blog)=>blog.Trainer==='S.DHANUSH')} title="DHANUSH's Blogs!"/> */}
           
        </div>
    );
}
 
export default Info;