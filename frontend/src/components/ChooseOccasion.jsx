import { useState } from "react";
import "../styles/ChooseOccasion.css";

function ChooseOccasion() {

    const [userInput, setUserInput] = useState("");
    const [image, setImage] = useState(null);
    const [explanation, setExplanation] = useState("");

    const generateOutfit = async () => {

        const response = await fetch("http://localhost:5000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: userInput,
            }),
        });

        const data = await response.json();

        setImage(`data:image/png;base64,${data.image}`);
        setExplanation(data.explanation);
    };

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
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button onClick={generateOutfit}>Generate</button>
            </div>

            {image && (
                <div className="result-section">
                    <img src={image} alt="Generated Outfit" />
                    <p>{explanation}</p>
                </div>
            )}
        </section>
    );
}

export default ChooseOccasion;
