'use client';

import Link from 'next/link';
import { characters } from './data/characters';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>🎮 دليل سكواد باسترز للمبتدئين</h1>
        <p>اختر شخصية لمعرفة المزيد عن مهاراتها واستراتيجياتها</p>
      </header>

      <div className="characters-grid">
        {characters.map((character) => (
          <Link
            href={`/character/${character.id}`}
            key={character.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="character-card">
              <div className="character-image">
                {character.emoji}
              </div>
              <h2 className="character-name">{character.name}</h2>
              <span className="character-type">{character.type}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
