const Home = () => {
    return (
         <div className="home-page">
        <header className="hero-section">
            <h1>Welcome to Study Sphere</h1>
            <p>Your source for insights on management and economics</p>
        </header>

        <section className="latest-articles">
            <h2>Latest Articles</h2>
            <div className="article-list">
                <div className="article">
                    <h3>Article Title 1</h3>
                    <p>A brief description of what this article covers, highlighting its key points and relevance to readers.</p>
                    <a href="#" className="read-more">Read More →</a>
                </div>
                <div className="article">
                    <h3>Article Title 2</h3>
                    <p>A captivating summary that draws readers in, discussing the importance of the topic and what they can expect to learn.</p>
                    <a href="#" className="read-more">Read More →</a>
                </div>
                <div className="article">
                    <h3>Article Title 3</h3>
                    <p>Highlighting innovative ideas or recent trends in management or economics, this description entices readers to explore further.</p>
                    <a href="#" className="read-more">Read More →</a>
                </div>
            </div>
        </section>

        <section className="featured-series">
            <h2>Featured Series</h2>
            <div className="series">
                <div className="series-item">
                    <h3>Management Insights</h3>
                    <p>Explore practical strategies and leadership tips that can help you excel in your career. From effective communication to team dynamics, dive into our curated series focused on management excellence.</p>
                </div>
                <div className="series-item">
                    <h3>Economic Perspectives</h3>
                    <p>Join us as we analyze current economic trends, explore foundational theories, and discuss their implications in today’s world. This series offers valuable insights for anyone looking to deepen their understanding of economics.</p>
                </div>
            </div>
        </section>

        <section className="join-community">
            <h2>Why Follow Study Sphere?</h2>
            <ul>
                <li>Expert Insights: Benefit from articles written by experienced authors passionate about management and economics.</li>
                <li>Community Engagement: Join our growing community of readers. Share your thoughts in the comments and connect with us on social media.</li>
                <li>Practical Advice: Gain actionable tips that you can implement in your personal and professional life.</li>
            </ul>
        </section>

        <section className="newsletter">
            <h2>Join Our Community</h2>
            <p>Subscribe to our newsletter for the latest articles, tips, and exclusive content delivered straight to your inbox!</p>
            <a href="#" className="subscribe-button">Subscribe Now →</a>
        </section>

        <section className="connect">
            <h2>Get Involved</h2>
            <p>We encourage our readers to participate! Share your insights, ask questions, and connect with fellow enthusiasts. Together, we can foster a vibrant community of learners.</p>
        </section>

        <section className="social-media">
            <h2>Connect with Us</h2>
            <p>Follow us on social media for daily insights, discussions, and updates:</p>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </section>
    </div>
     );
}
 
export default Home;