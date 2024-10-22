const Bloglist = ({blogs,title,handleclass}) => {
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Trained by Mr.{blog.Trainer}.</p>
                    <button onClick={()=>handleclass(blog.id)}>Get-in</button>
                </div>
            ))}
        </div>
      );
}
 
export default Bloglist;