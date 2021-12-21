import uniqid from "uniqid";

const CocktailCard = (props) => {
  return (
    <div className="cocktail-card">
      <span className="card-name">{props.item.name}</span>
      <img className="card-img" src={props.item.image} alt={props.item.name} />
      <span className="card-glass">{props.item.glass}</span>
      {props.item.ingredients.map((ing) => {
        return (
          <div className="card-ing" key={uniqid()}>
            <span>{ing.measurement}</span>
            <span>{ing.ingredient}</span>
          </div>
        );
      })}
      <span className="card-inst">{props.item.instructions}</span>
    </div>
  );
};

export default CocktailCard;
