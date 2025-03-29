// Voice recognition utility using Web Speech API

// Types for our voice recognition system
export type VoiceRecognitionStatus = "inactive" | "listening" | "processing" | "error"

export interface VoiceRecognitionOptions {
  language?: string
  continuous?: boolean
  interimResults?: boolean
  onResult?: (transcript: string, isFinal: boolean) => void
  onError?: (error: string) => void
  onStatusChange?: (status: VoiceRecognitionStatus) => void
}

// Check if browser supports speech recognition
export function isSpeechRecognitionSupported(): boolean {
  return "webkitSpeechRecognition" in window || "SpeechRecognition" in window
}

// Class to handle voice recognition
export class VoiceRecognizer {
  private recognition: any
  private status: VoiceRecognitionStatus = "inactive"
  private options: VoiceRecognitionOptions

  constructor(options: VoiceRecognitionOptions = {}) {
    this.options = {
      language: "en-US",
      continuous: false,
      interimResults: true,
      ...options,
    }

    if (!isSpeechRecognitionSupported()) {
      console.error("Speech recognition is not supported in this browser")
      return
    }

    // Initialize the SpeechRecognition object
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    this.recognition = new SpeechRecognition()

    // Configure recognition
    this.recognition.lang = this.options.language
    this.recognition.continuous = this.options.continuous
    this.recognition.interimResults = this.options.interimResults

    // Set up event handlers
    this.recognition.onstart = () => this.updateStatus("listening")

    this.recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join("")

      const isFinal = event.results[0].isFinal

      if (this.options.onResult) {
        this.options.onResult(transcript, isFinal)
      }
    }

    this.recognition.onerror = (event: any) => {
      this.updateStatus("error")
      if (this.options.onError) {
        this.options.onError(`Error during speech recognition: ${event.error}`)
      }
    }

    this.recognition.onend = () => {
      if (this.status === "listening") {
        this.updateStatus("processing")
      }
    }
  }

  // Start voice recognition
  start(): void {
    if (!this.recognition) {
      if (this.options.onError) {
        this.options.onError("Speech recognition is not supported in this browser")
      }
      return
    }

    try {
      this.recognition.start()
      this.updateStatus("listening")
    } catch (error) {
      this.updateStatus("error")
      if (this.options.onError) {
        this.options.onError(`Failed to start speech recognition: ${error}`)
      }
    }
  }

  // Stop voice recognition
  stop(): void {
    if (!this.recognition) return

    try {
      this.recognition.stop()
      this.updateStatus("inactive")
    } catch (error) {
      console.error("Error stopping speech recognition:", error)
    }
  }

  // Get current status
  getStatus(): VoiceRecognitionStatus {
    return this.status
  }

  // Update status and trigger callback
  private updateStatus(status: VoiceRecognitionStatus): void {
    this.status = status
    if (this.options.onStatusChange) {
      this.options.onStatusChange(status)
    }
  }
}

// Hook to use voice recognition in React components
export function createVoiceRecognizer(options: VoiceRecognitionOptions = {}): VoiceRecognizer {
  return new VoiceRecognizer(options)
}

