'use client';

import { useState } from 'react';

type Emoji = {
  id: string;
  imageUrl: string;
  prompt: string;
};

type EmojiFormProps = {
  onEmojiGenerated: (emoji: Emoji) => void;
};

export function EmojiForm({ onEmojiGenerated }: EmojiFormProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual emoji generation
    const newEmoji: Emoji = {
      id: Date.now().toString(),
      imageUrl: 'https://via.placeholder.com/150',
      prompt: prompt,
    };
    onEmojiGenerated(newEmoji);
    setPrompt('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter emoji description"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Generate Emoji
      </button>
    </form>
  );
}