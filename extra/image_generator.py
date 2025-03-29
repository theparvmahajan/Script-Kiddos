# from diffusers import StableDiffusionPipeline
# import torch

# pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5").to("cpu")

# def generate_first_aid_image(symptom):
#     prompt = f"Illustrate first-aid steps for {symptom}."
    
#     image = pipe(prompt).images[0]
    
#     image_path = f"first_aid_{symptom}.png"
#     image.save(image_path)
    
#     return image_path

# if __name__ == "__main__":
#     symptom = input("Enter the symptom or disease: ")
#     image_path = generate_first_aid_image(symptom)
#     print(f"Image generated and saved at: {image_path}")

# import os
# import requests
# import json
# import base64
# from PIL import Image
# import io

# # Using Stability AI API (you'll need to get an API key)
# STABILITY_API_KEY = "sk-2qkUe81WSJG9DHRdtYBJLDXklVULXmjv3vpcqjtzcqoiSUpN"

# # Precautions for various diseases
# disease_precautions = {
#     "cold": "Common cold precautions: Wash hands regularly, avoid close contact with sick people, stay hydrated, rest well, cover mouth when coughing or sneezing.",
#     "flu": "Flu precautions: Get yearly vaccination, wash hands frequently, avoid touching face, cover coughs, maintain distance from sick people, disinfect surfaces.",
#     "covid19": "COVID-19 precautions: Wear masks in crowded places, maintain social distance, wash hands regularly, ensure good ventilation, get vaccinated and boosted.",
#     "diabetes": "Diabetes precautions: Maintain healthy diet, exercise regularly, monitor blood sugar levels, take medications as prescribed, attend regular checkups.",
#     "hypertension": "Hypertension precautions: Reduce salt intake, exercise regularly, maintain healthy weight, limit alcohol, avoid smoking, take medications as prescribed."
# }

# def generate_precaution_image(disease):
#     # Convert disease name to lowercase
#     disease = disease.lower()
    
#     # Check if the disease is in our database
#     if disease in disease_precautions:
#         prompt = disease_precautions[disease]
        
#         # Data to send to Stability AI API
#         url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image"
        
#         headers = {
#             "Content-Type": "application/json",
#             "Accept": "application/json",
#             "Authorization": f"Bearer {STABILITY_API_KEY}"
#         }
        
#         payload = {
#             "text_prompts": [
#                 {
#                     "text": f"Medical illustration showing precautions for {disease}: {prompt}"
#                 }
#             ],
#             "cfg_scale": 7,
#             "height": 1024,
#             "width": 1024,
#             "samples": 1,
#             "steps": 30,
#         }
        
#         # Send API request
#         response = requests.post(url, headers=headers, json=payload)
        
#         if response.status_code == 200:
#             data = response.json()
#             # Get the first image
#             image_data = data["artifacts"][0]["base64"]
            
#             # Convert base64 data to image
#             image = Image.open(io.BytesIO(base64.b64decode(image_data)))
            
#             # Save the image
#             image_path = f"{disease}_precautions.png"
#             image.save(image_path)
#             print(f"Image saved to '{image_path}'!")
#             return image_path
#         else:
#             print(f"Error generating image: {response.status_code}")
#             print(response.text)
#             return None
#     else:
#         print(f"Sorry, information for '{disease}' is not available.")
#         return None

# # Example usage
# if __name__ == "__main__":
#     disease_name = input("Enter the name of the disease: ")
#     generate_precaution_image(disease_name)


# import requests
# import io
# from PIL import Image

# # Hugging Face API settings
# HF_API_TOKEN = "your_hugging_face_api_token_here"  # Replace with your Hugging Face API token
# HF_API_URL = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5"  # You can change the model

# # Precautions for various diseases
# disease_precautions = {
#     "cold": "Common cold precautions: Wash hands regularly, avoid close contact with sick people, stay hydrated, rest well, cover mouth when coughing or sneezing.",
#     "flu": "Flu precautions: Get yearly vaccination, wash hands frequently, avoid touching face, cover coughs, maintain distance from sick people, disinfect surfaces.",
#     "covid19": "COVID-19 precautions: Wear masks in crowded places, maintain social distance, wash hands regularly, ensure good ventilation, get vaccinated and boosted.",
#     "diabetes": "Diabetes precautions: Maintain healthy diet, exercise regularly, monitor blood sugar levels, take medications as prescribed, attend regular checkups.",
#     "hypertension": "Hypertension precautions: Reduce salt intake, exercise regularly, maintain healthy weight, limit alcohol, avoid smoking, take medications as prescribed."
# }

# def generate_precaution_image(disease):
#     # Convert disease name to lowercase
#     disease = disease.lower()
    
#     # Check if the disease is in our database
#     if disease in disease_precautions:
#         prompt = disease_precautions[disease]
        
#         # Headers for Hugging Face API
#         headers = {
#             "Authorization": f"Bearer {HF_API_TOKEN}",
#             "Content-Type": "application/json"
#         }
        
#         # Create the payload for Hugging Face API
#         payload = {
#             "inputs": f"Medical illustration showing precautions for {disease}: {prompt}"
#         }
        
#         # Send request to Hugging Face API
#         response = requests.post(HF_API_URL, headers=headers, json=payload)
        
#         if response.status_code == 200:
#             # Convert response to image
#             image = Image.open(io.BytesIO(response.content))
            
#             # Save the image
#             image_path = f"{disease}_precautions.png"
#             image.save(image_path)
#             print(f"Image saved to '{image_path}'!")
#             return image_path
#         else:
#             print(f"Error generating image: {response.status_code}")
#             print(response.text)
#             return None
#     else:
#         print(f"Sorry, information for '{disease}' is not available.")
#         return None

# # Example usage
# if __name__ == "__main__":
#     disease_name = input("Enter the name of the disease: ")
#     generate_precaution_image(disease_name)


# Precautions for various diseases
disease_precautions = {
    "cold": "Common cold precautions: Wash hands regularly, avoid close contact with sick people, stay hydrated, rest well, cover mouth when coughing or sneezing.",
    "flu": "Flu precautions: Get yearly vaccination, wash hands frequently, avoid touching face, cover coughs, maintain distance from sick people, disinfect surfaces.",
    "covid19": "COVID-19 precautions: Wear masks in crowded places, maintain social distance, wash hands regularly, ensure good ventilation, get vaccinated and boosted.",
    "diabetes": "Diabetes precautions: Maintain healthy diet, exercise regularly, monitor blood sugar levels, take medications as prescribed, attend regular checkups.",
    "hypertension": "Hypertension precautions: Reduce salt intake, exercise regularly, maintain healthy weight, limit alcohol, avoid smoking, take medications as prescribed."
}


# from diffusers import StableDiffusionPipeline
# import torch

# model_id = "sd-legacy/stable-diffusion-v1-5"
# pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
# pipe = pipe.to("cuda")

# prompt = "a photo of an astronaut riding a horse on mars"
# image = pipe(prompt).images[0]  
    
# image.save("astronaut_rides_horse.png")


from diffusers import StableDiffusionPipeline
import torch

# Precautions for various diseases
disease_precautions = {
    "cold": "Common cold precautions: Wash hands regularly, avoid close contact with sick people, stay hydrated, rest well, cover mouth when coughing or sneezing.",
    "flu": "Flu precautions: Get yearly vaccination, wash hands frequently, avoid touching face, cover coughs, maintain distance from sick people, disinfect surfaces.",
    "covid19": "COVID-19 precautions: Wear masks in crowded places, maintain social distance, wash hands regularly, ensure good ventilation, get vaccinated and boosted.",
    "diabetes": "Diabetes precautions: Maintain healthy diet, exercise regularly, monitor blood sugar levels, take medications as prescribed, attend regular checkups.",
    "hypertension": "Hypertension precautions: Reduce salt intake, exercise regularly, maintain healthy weight, limit alcohol, avoid smoking, take medications as prescribed."
}

# Load the Stable Diffusion model
model_id = "sd-legacy/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cuda")

def generate_precaution_image(disease):
    """
    Generate an image illustrating precautions for a given disease.
    
    Args:
        disease (str): Name of the disease.
    
    Returns:
        str: Path to the saved image.
    """
    # Convert disease name to lowercase
    disease = disease.lower()
    
    # Check if the disease is in the precautions dictionary
    if disease in disease_precautions:
        # Create a prompt for the image generation
        prompt = f"Medical illustration showing precautions for {disease}: {disease_precautions[disease]}"
        
        # Generate the image using Stable Diffusion
        print(f"Generating image for {disease}...")
        image = pipe(prompt).images[0]
        
        # Save the image
        image_path = f"{disease}_precautions.png"
        image.save(image_path)
        print(f"Image saved to '{image_path}'!")
        return image_path
    else:
        print(f"Sorry, information for '{disease}' is not available.")
        return None

if __name__ == "__main__":
    # Prompt the user for the disease name
    disease_name = input("Enter the name of the disease: ")
    generate_precaution_image(disease_name)

# print(torch.cuda.is_available())