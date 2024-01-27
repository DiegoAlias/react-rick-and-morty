import { CharactersList } from "./components/CharactersList";

export const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <h1 className="text-center py-8 text-4xl font-semibold">
        Rick and Morty
      </h1>

      <CharactersList />
    </div>
  );
};
