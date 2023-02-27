import PokeMoveCard from "./PokeMoveCard.js";

const { moves } = require("./data.js");

function PokeMoves() {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => (
          <PokeMoveCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default PokeMoves;
