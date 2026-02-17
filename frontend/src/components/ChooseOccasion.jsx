import "../styles/ChooseOccasion.css";

function ChooseOccasion() {
    return (
        <section className="occasion-section">
            <h2>Choose Your Occasion</h2>
            <p className="subtitle">
                Select an occasion or describe your desired style
            </p>

            <div className="occasion-cards">
                <div className="occasion-card">
                    <div className="icon">🎁</div>
                    <h3>Formal</h3>
                    <p>Business & elegant events</p>
                </div>

                <div className="occasion-card">
                    <div className="icon">☕</div>
                    <h3>Casual</h3>
                    <p>Everyday relaxed style</p>
                </div>

                <div className="occasion-card">
                    <div className="icon">🎉</div>
                    <h3>Party</h3>
                    <p>Night out & celebrations</p>
                </div>
            </div>

            <div className="occasion-input">
                <input
                    type="text"
                    placeholder="Describe your desired outfit style..."
                />
                <button>Generate</button>
            </div>
        </section>
    );
}

export default ChooseOccasion;
