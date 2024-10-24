const Bloglist = ({blogs,title,handleclass}) => {
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Trainer Handled by Mr.{blog.Trainer}.</p>
                    <button class="blbutton" onClick={()=>handleclass(blog.id)}>Let's Go</button>
                </div>
            ))}
        </div>
      );
}
 
export default Bloglist;