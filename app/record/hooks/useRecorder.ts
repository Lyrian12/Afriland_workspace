import { useState, useRef, useEffect, useCallback } from "react";

export type RecordState = "paused" | "recording" | "transcribing";

interface UseRecorderReturn {
  recordState: RecordState;
  transcripts: string[];
  isTranscribing: boolean;
  toggleRecording: () => Promise<void>;
  resetRecorder: () => void;
  setTranscripts: (t: string[]) => void;
  recordStartTimeRef: React.MutableRefObject<number | null>;
}

export const useRecorder = (): UseRecorderReturn => {
  const [recordState, setRecordState] = useState<RecordState>("paused");
  const [transcripts, setTranscripts] = useState<string[]>([]);
  const [isTranscribing, setIsTranscribing] = useState(false);
  
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordStartTimeRef = useRef<number | null>(null);

  const stopTracks = useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
  }, []);

  const resetRecorder = useCallback(() => {
    setRecordState("paused");
    setTranscripts([]);
    setIsTranscribing(false);
    recordStartTimeRef.current = null;
    stopTracks();
  }, [stopTracks]);

  useEffect(() => {
    return () => stopTracks();
  }, [stopTracks]);

  const startRecording = async () => {
    try {
      setTranscripts([]);
      audioChunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        audioChunksRef.current = [];
        stopTracks();
        
        setIsTranscribing(true);
        setRecordState("transcribing");

        const formData = new FormData();
        formData.append("file", audioBlob, "audio.webm");
        formData.append("audio_file", audioBlob, "audio.webm");

        try {
          const res = await fetch("/api/transcribe", {
            method: "POST",
            body: formData,
          });
          
          if (res.ok) {
            const data = await res.json();
            const text = data.text || data.transcription || "";
            if (text && text.trim()) {
              setTranscripts([text]);
            }
          }
        } catch (err) {
          console.error("Transcription error:", err);
        } finally {
          setIsTranscribing(false);
          setRecordState("paused");
        }
      };

      mediaRecorder.start();
      recordStartTimeRef.current = Date.now();
      setRecordState("recording");
    } catch (err) {
      console.error("Microphone access denied:", err);
      alert("Veuillez autoriser l'accès au microphone.");
    }
  };

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const toggleRecording = async () => {
    if (recordState === "paused") {
      await startRecording();
    } else if (recordState === "recording") {
      stopRecording();
    }
  };

  return {
    recordState,
    transcripts,
    isTranscribing,
    toggleRecording,
    resetRecorder,
    setTranscripts,
    recordStartTimeRef
  };
};
