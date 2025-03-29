# import torch
# from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor
# import librosa
# import sounddevice as sd
# from scipy.io.wavfile import write

# model = Wav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-large-960h")
# processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-large-960h")

# # def record_audio(output_path, duration=5, sample_rate=16000):
# #     print("Recording...")
# #     audio = sd.rec(int(duration * sample_rate), samplerate=sample_rate, channels=1, dtype='float32')
# #     sd.wait()  # Wait until recording is finished
# #     write(output_path, sample_rate, audio)  # Save as WAV file
# #     print(f"Recording saved to {output_path}")

# def voice_to_text(audio_path):
#     audio, rate = librosa.load(audio_path, sr=16000)
#     input_values = processor(audio, return_tensors="pt", sampling_rate=16000).input_values

#     with torch.no_grad():
#         logits = model(input_values).logits

#     predicted_ids = torch.argmax(logits, dim=-1)
#     transcription = processor.batch_decode(predicted_ids)[0]

#     return transcription

# if __name__ == "__main__":
#     # Record audio and save it
#     audio_file = "test.wav"
#     record_audio(audio_file, duration=5)

#     # Convert voice to text
#     transcription = voice_to_text(audio_file)
#     print("Transcription:", transcription)

import torch
from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor
import librosa

# Load the pre-trained Wav2Vec2 model and processor
model = Wav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-large-960h")
processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-large-960h")

def voice_to_text(audio_path):
    """
    Convert speech in an audio file to text using Wav2Vec2.
    
    Args:
        audio_path (str): Path to the audio file.
    
    Returns:
        str: Transcription of the audio.
    """
    # Load the audio file
    audio, rate = librosa.load(audio_path, sr=16000)
    
    # Process the audio for the model
    input_values = processor(audio, return_tensors="pt", sampling_rate=16000).input_values

    # Perform inference
    with torch.no_grad():
        logits = model(input_values).logits

    # Decode the predicted IDs to text
    predicted_ids = torch.argmax(logits, dim=-1)
    transcription = processor.batch_decode(predicted_ids)[0]

    return transcription

if __name__ == "__main__":
    # Specify the path to the audio file
    audio_file = "test.wav"  # Replace with your audio file path
    
    # Convert voice to text
    transcription = voice_to_text(audio_file)
    print("Transcription:", transcription)