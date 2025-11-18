import LinkButton from "../../UI/LinkButton/LinkButton";
import Stiker from "../../UI/Stiker/Stiker";
import "./card.scss";

const Card = (props) => {
  return (
    <li className="list-item card">
      <div className="card__image">
        <img src={props.image} alt={props.title} />
        <div className="card__image-content">
          <Stiker />
        </div>
      </div>

      <div className="card__content">
        <div className="card__title-wrapper">
          <h3 className="card__title">{props.title}</h3>
          <svg
            className="empty-like-social-icon"
            viewBox="0 0 26 24"
            width="26"
            height="24"
          >
            <use href="../../assets/images/svg/sprite.svg#empty-like-icon"></use>
          </svg>
        </div>
        {/* <p className="card__description">{props.description}</p> */}
        {props.link && (
          <LinkButton
            title="перейти"
            href={props.link}
            className={"card__button"}
          />
        )}
        <ul className="card__info">
          <li className="card__info-item card__address">
            <svg
              className="social-icon location-social-icon"
              viewBox="0 0 17 21"
              width="17"
              height="21"
            >
              <use href="../../assets/images/svg/sprite.svg#location-icon"></use>
            </svg>
            <span className="card__info-text">{props.address}</span>
          </li>

          <li className="card__info-item card__distance">
            <svg
              className="social-icon route-social-icon"
              viewBox="0 0 16 17"
              width="16"
              height="17"
            >
              <use href="../../assets/images/svg/sprite.svg#route-icon"></use>
            </svg>
            <span className="card__info-text">{props.distance}</span>
          </li>

          <li className="card__info-item card__metro">
            <svg
              className="social-icon metro-social-icon"
              viewBox="0 0 22 14"
              width="22"
              height="14"
            >
              <use href="../../assets/images/svg/sprite.svg#metro-icon"></use>
            </svg>
            <span className="card__info-text card__info-text--metro">{`${props.metro.name},  `}</span>
            <span className="card__info-text">{props.metro.time}</span>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
