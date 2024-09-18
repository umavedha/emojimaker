import { NextResponse } from 'next/server';
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: Request) {
  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  try {
    const output = await replicate.run(
      "0xtuba/archillect-lora:599ad8df6667caa3ab865345dcb0f98b673a4e4505a8ffc2eea52bd8ba152b42",
      {
        input: {
          prompt: prompt,
        }
      }
    );

    if (!Array.isArray(output) || output.length === 0) {
      throw new Error('Invalid output from Replicate');
    }

    return NextResponse.json({ imageUrl: output[0] });
  } catch (error) { 
    console.error('Error generating emoji:', error);
    return NextResponse.json({ error: "Failed to generate emoji" }, { status: 500 });
  }
}

