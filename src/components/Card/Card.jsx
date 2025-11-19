import LinkButton from "../../UI/LinkButton/LinkButton";
import Stiker from "../../UI/Stiker/Stiker";
import "./card.scss";
import LikeButton from "../../UI/LikeButton/LikeButton";
import CardInfo from "../CardInfo/CardInfo";
import CardOptions from "../CardOptions/CardOptions";
import Rating from "../../UI/Raiting/Raiting";
import { useFavourite } from "../../hooks/useFavourite";

const Card = (props) => {
  const [favourite, setFavorite] = useFavourite(props.id);

  return (
    <li className="list-item card">
      <div className="card__image">
        <img
          src={`${process.env.PUBLIC_URL}${props.image}`}
          alt={props.title}
        />
        <div className="card__image-content">
          <div className="card__image-content-header">
            <Stiker />
            <CardOptions />
          </div>
          {props.description && (
            <div className="card__image-content-description-wrapper">
              <p className="card__description">{props.description}</p>
            </div>
          )}
        </div>
      </div>

      <div className="card__content">
        <div className="card__title-wrapper">
          <h3 className={`card__title ${favourite ? "favourite" : ""}`}>
            {props.title}
          </h3>
          <LikeButton active={favourite} handleClick={setFavorite} />
        </div>
        {props.link && (
          <LinkButton
            title="перейти"
            href={props.link}
            className={"card__button"}
          />
        )}
        <CardInfo
          address={props.address}
          distance={props.distance}
          metro={props.metro}
        />
        <Rating rating={props.rating} />
      </div>
    </li>
  );
};

export default Card;
