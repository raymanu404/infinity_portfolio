'use client';

import React, { use, useMemo } from 'react';
import { generateArtists, queryArtists } from './utils';

interface ArtistsProps {
  query: string;
  isStale: boolean;
}

const generatedArtists = generateArtists(100);

const Artists: React.FC<ArtistsProps> = ({ query, isStale }) => {
  const promise = useMemo(() => queryArtists(query, generatedArtists), [query]);

  const artists = use(promise);

  if (artists.length === 0) {
    return (
      <p>
        No matches for <i>{query}</i>
      </p>
    );
  }

  return (
    <div
      style={{
        opacity: isStale ? 0.5 : 1,
        transition: isStale ? 'opacity 0.2s 0.2s linear' : 'opacity 0s 0s linear',
      }}
    >
      <h1>Artists : {artists.length}</h1>

      {artists.map(({ genre, id, music, name }) => {
        return (
          <div key={id}>
            <h3>{name}</h3>
            <h4>{genre}</h4>
            {music.map((m, j) => {
              return (
                <div key={j}>
                  <i>{m}</i>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

Artists.displayName = 'Artists';

export default Artists;
