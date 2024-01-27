export const Characters = ({ character }) => {
  return (
    <div>
      {" "}
      <div>
        <h2 className="py-5 text-2xl text-center font-normal">
          {character.name}
        </h2>
        <img
          src={character.image}
          alt={character.name}
          className="rounded-full w-36 mx-auto hover:scale-110 transition-transform duration-300 ease-out mb-2"
        />
        <p className="text-center mb-4">{character.origin.name}</p>
      </div>
    </div>
  );
};
