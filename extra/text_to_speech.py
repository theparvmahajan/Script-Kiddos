from gtts import gTTS
from pydub import AudioSegment

# Define text for speech
text = "This is a test audio file for speech recognition. It lasts five seconds."

# Convert text to speech
tts = gTTS(text=text, lang="en")
tts.save("test_speech.mp3")

# Convert MP3 to WAV
sound = AudioSegment.from_mp3("test_speech.mp3")
sound.export("test_speech.wav", format="wav")

print("Generated 'test_speech.wav' successfully!")
