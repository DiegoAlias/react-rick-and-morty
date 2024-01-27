import { useEffect, useState } from "react";
import { Characters } from "./Characters";
import { Navpage } from "./Navpage";

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fechData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fechData();
  }, [page]);

  return (
    <div className="container p-4">
      <Navpage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {characters.map((character) => (
            <div key={character.id} className="w-1/4 px-2 mb-4">
              <Characters character={character} />
            </div>
          ))}
        </div>
      )}
      <Navpage page={page} setPage={setPage} />
    </div>
  );
};
