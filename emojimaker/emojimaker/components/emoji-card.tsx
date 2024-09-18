'use client';

import Image from 'next/image';
import { Heart, Download } from 'lucide-react';

type EmojiCardProps = {
  id: string;
  imageUrl: string;
  prompt: string;
};

export function EmojiCard({ id, imageUrl, prompt }: EmojiCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <img src={imageUrl} alt={prompt} className="w-full h-auto" />
      <p className="mt-2">{prompt}</p>
    </div>
  );
}