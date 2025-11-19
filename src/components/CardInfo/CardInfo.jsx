import "./card-info.scss";

const CardInfo = ({ address, distance, metro }) => {
  return (
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
        <span className="card__info-text">{address}</span>
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
        <span className="card__info-text">{distance}</span>
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
        <span className="card__info-text card__info-text--metro">{`${metro.name},  `}</span>
        <span className="card__info-text">{metro.time}</span>
      </li>
    </ul>
  );
};

export default CardInfo;
