#pip install --upgrade torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
#pip install --upgrade diffusers transformers accelerate
#pip install xformers
#pip install flask flask-cors
import torch
from diffusers import StableDiffusionPipeline
from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
from io import BytesIO

# -----------------------------
# 1️⃣ Load Model (ONLY ONCE)
# -----------------------------
device = "cuda" #if torch.cuda.is_available() else "cpu"

model_id = "runwayml/stable-diffusion-v1-5"

pipe = StableDiffusionPipeline.from_pretrained(
    model_id,
    torch_dtype=torch.float16 #if device == "cuda" else torch.float32
).to(device)

pipe.enable_attention_slicing()
pipe.enable_xformers_memory_efficient_attention()

# -----------------------------
# 2️⃣ Prompt Enhancer
# -----------------------------
def enhance_prompt(user_input):

    user_input_lower = user_input.lower()

    if "wedding" in user_input_lower:
        setting = "luxurious wedding venue, elegant indoor lighting"
    elif "beach" in user_input_lower:
        setting = "sunny beach background, natural daylight"
    elif "college" in user_input_lower:
        setting = "modern college campus background"
    elif "party" in user_input_lower:
        setting = "stylish evening party setting, ambient lighting"
    elif "winter" in user_input_lower:
        setting = "urban city street during winter, soft natural lighting"
    else:
        setting = "modern outdoor fashion setting"

    return f"""
    full body realistic fashion photograph of a professional model wearing {user_input},
    {setting},
    natural pose,
    highly detailed face,
    symmetrical face,
    clear skin texture,
    sharp facial features,
    photorealistic,
    8k photography,
    DSLR quality,
    fashion magazine style,
    cinematic lighting,
    sharp focus
    """

# -----------------------------
# 3️⃣ Image Generator
# -----------------------------
def generate_outfit_image(prompt):

    negative_prompt = """
    blurry, low quality, bad face, distorted face,
    extra fingers, extra limbs, poorly drawn hands,
    deformed, cross-eyed, bad anatomy,
    unrealistic skin, cartoon, painting, illustration
    """

    result = pipe(
        prompt,
        negative_prompt=negative_prompt,
        num_inference_steps=35,
        guidance_scale=8.0

    )

    return result.images[0]

# -----------------------------
# 4️⃣ Style Explanation
# -----------------------------
def generate_style_explanation(user_input):

    return f"""
    Based on your request — "{user_input}" — this outfit is styled to reflect
    modern fashion aesthetics while maintaining practicality and visual appeal.
    The generated look balances current trends with wearable elegance.
    """

# -----------------------------
# 5️⃣ Flask API
# -----------------------------
app = Flask(__name__)
CORS(app)

@app.route("/generate", methods=["POST"])
def generate():

    data = request.json
    user_input = data.get("prompt")

    prompt = enhance_prompt(user_input)
    image = generate_outfit_image(prompt)
    explanation = generate_style_explanation(user_input)

    buffered = BytesIO()
    image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()

    return jsonify({
        "image": img_str,
        "explanation": explanation
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)
