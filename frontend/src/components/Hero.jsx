function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="badge">✨ Powered by AI</span>

                <h1>
                    Your Virtual <span>Styling</span> Assistant
                </h1>

                <p>
                    Upload your clothing, let AI detect styles and colors, and
                    receive personalized outfit recommendations for any occasion.
                </p>

                <div className="buttons">
                    <button className="primary-btn">Start Styling</button>
                    <button className="secondary-btn">
                        View Recommendations
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
