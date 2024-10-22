import {useState, useStste} from 'react';
const Home = () => {
    const [name, setName]=useState('Subscribe for  getting more updates.')
    const handleclick =() =>{
        setName('Thank you, for subscribing and keep supporting with your valuable comments and likes.');
    }
    return (
        <div className="Home">
            <div>
            <h1>Welcome To Our Website</h1>
            </div>
            <p>{name}</p>
            <button onClick={handleclick}>Subscribe us</button>
        </div>
      );
    // const [blogs, setBlogs]=useState([
    //     {title:'HTML',body:'HTML',Trainer:'SASI',id:85},
    //     {title:'CSS',body:'HTML',Trainer:'DHANUSH',id:86},
    //     {title:'Bootstrap',body:'HTML',Trainer:'DHANUSH',id:87},
    //     {title:'JAVA-SCRIPT',body:'HTML',Trainer:'DHANUSH',id:88},
    //     {title:'REACT JS',body:'HTML',Trainer:'SASI',id:89},
    //     {title:'MONGO DB',body:'HTML',Trainer:'SASI',id:90}
    // ])
    // return (  
    //     <div class="Info">
    //         {blogs.map((blog)=>(
    //             <div className="blog-preview" key={blog.id}>
    //                 <h2>{blog.title}</h2>
    //                 <p>Trained by{blog.Trainer}</p>
    //             </div>
                
    //         ))}
    //     </div>
    // );
}
 
export default Home;