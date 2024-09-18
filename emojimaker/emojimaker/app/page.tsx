'use client';

import React from 'react';
import { useState } from 'react';
import { useAuth, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import Header from '../components/headers';
import { EmojiForm } from '../components/emoji-form';
import { EmojiGrid } from '../components/emoji-grid';

type Emoji = {
  id: string;
  imageUrl: string;
  prompt: string;
};

export default function Home() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { isLoaded, userId } = useAuth();

  const handleSubmit = async (emoji: Emoji) => {
    setIsGenerating(true);
    try {
      // TODO: Implement API call to generate emoji
      setEmojis([emoji, ...emojis]);
    } catch (error) {
      console.error('Error generating emoji:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  console.log('Rendering Home component, userId:', userId);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <SignedIn>
            <h1 className="text-3xl font-bold mb-8 text-center">Emoji Generator</h1>
            <EmojiForm onEmojiGenerated={handleSubmit} />
            {isGenerating && (
              <div className="text-center my-4">Generating emoji...</div>
            )}
            <EmojiGrid emojis={emojis} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </div>
      </div>
    </div>
  );
}