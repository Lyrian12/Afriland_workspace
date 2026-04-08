import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const openAiApiKey = process.env.OPENAI_API_KEY;
    if (!openAiApiKey) {
      console.error("OPENAI_API_KEY is not defined in environment variables.");
      return NextResponse.json({ error: "OpenAI API key missing" }, { status: 500 });
    }

    const openAiFormData = new FormData();
    // Re-append the file to send to OpenAI
    openAiFormData.append("file", file, "audio.webm");
    // Specify the model required by OpenAI
    openAiFormData.append("model", "whisper-1");
    // Optionally set response format to text or json. Default is json
    // openAiFormData.append("response_format", "json");

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openAiApiKey}`,
      },
      body: openAiFormData,
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenAI Whisper API error:", errorData);
      return NextResponse.json({ error: "Transcription failed" }, { status: response.status });
    }

    const data = await response.json();
    // OpenAI returns { text: "transcribed..." }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in transcription API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
