import { EmojiCard } from './emoji-card';

type Emoji = {
  id: string;
  imageUrl: string;
  prompt: string;
};

type EmojiGridProps = {
  emojis: Emoji[];
};

export function EmojiGrid({ emojis }: EmojiGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {emojis.map((emoji) => (
        <EmojiCard key={emoji.id} {...emoji} />
      ))}
    </div>
  );
}