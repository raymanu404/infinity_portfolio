import React, { use } from 'react';
import { generateArtists, queryArtists } from './utils';

interface ArtistsProps {
  query: string;
}
const generatedArtists = generateArtists(100);

const Artists: React.FC<ArtistsProps> = ({ query }) => {
  const artists = use(queryArtists(query, generatedArtists));

  console.log({ artists });

  if (artists.length === 0) {
    return (
      <p>
        No matches for <i>{query}</i>
      </p>
    );
  }

  return (
    <div>
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
