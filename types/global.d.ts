// Global type definitions for browser APIs

declare var SpeechRecognition: any

interface Window {
  SpeechRecognition?: typeof SpeechRecognition
  webkitSpeechRecognition?: typeof SpeechRecognition
}

