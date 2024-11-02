const About = () => {
    return (
        <div className="about-us-container">
        <div className="section">
            <div className="text">
                <h1>About Us</h1>
                <p>Welcome to Study Sphere!</p>
                <p>
                    At Study Sphere, we are passionate about exploring the intersections of management, economics, and everyday life. Founded by enthusiasts Sasi and Dhanush, our mission is to provide insightful content that empowers our readers with knowledge and inspiration.
                </p>
            </div>
            <div className="image">
                {/* <img src={founderImage} alt="Founders" /> */}
            </div>
        </div>

        <div className="section alternate">
            <div className="image">
                {/* <img src={founderImage} alt="Founders" /> */}
            </div>
            <div className="text">
                <h2>Our Vision</h2>
                <p>
                    We believe that understanding the principles of management and economics is essential for personal and professional growth. Through our carefully curated articles, we aim to simplify complex concepts, share practical tips, and spark discussions that foster a deeper understanding of the world around us.
                </p>
            </div>
        </div>

        <div className="section">
            <div className="text">
                <h2>What We Offer</h2>
                <ul>
                    <li><strong>In-Depth Articles:</strong> We cover a wide range of topics, from the latest trends in management to foundational economic theories, ensuring there’s something for everyone.</li>
                    <li><strong>Practical Advice:</strong> Our blog features actionable insights that you can apply in your daily life, whether you're a student, a professional, or just curious about the world of business.</li>
                    <li><strong>Community Engagement:</strong> We encourage our readers to join the conversation! Share your thoughts in the comments, connect with us on social media, and be part of our growing community.</li>
                </ul>
            </div>
            <div className="image">
                {/* <img src={founderImage} alt="Founders" /> */}
            </div>
        </div>

        <div className="section alternate">
            <div className="image">
                {/* <img src={founderImage} alt="Founders" /> */}
            </div>
            <div className="text">
                <h2>Join Us on This Journey</h2>
                <p>
                    Thank you for visiting Study Sphere! We invite you to explore our articles, engage with our community, and embark on a journey of discovery with us. Together, let’s unravel the fascinating world of management and economics.
                </p>
                <p>
                    Feel free to reach out to us through our contact page if you have any questions, suggestions, or just want to say hi!
                </p>
                <p>Happy reading!</p>
            </div>
        </div>
    </div>
      );
}
 
export default About;