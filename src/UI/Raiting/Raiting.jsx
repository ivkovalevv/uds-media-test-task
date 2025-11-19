import "./rating.scss";

const Rating = ({ rating = 0, maxStars = 5, showValue = true }) => {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg
          key={i}
          className="rating-star rating-star--full"
          viewBox="0 0 15 14"
          width="15"
          height="14"
        >
          <use
            href={`${process.env.PUBLIC_URL}/assets/images/svg/sprite.svg#star-full-icon`}
          ></use>
        </svg>
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <svg
          key={i}
          className="rating-star rating-star--half"
          viewBox="0 0 15 15"
          width="15"
          height="14"
        >
          <use
            href={`${process.env.PUBLIC_URL}/assets/images/svg/sprite.svg#star-half-icon`}
          ></use>
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          className="rating-star rating-star--empty"
          viewBox="0 0 15 14"
          width="15"
          height="14"
        >
          <use
            href={`${process.env.PUBLIC_URL}/assets/images/svg/sprite.svg#star-empty-icon`}
          ></use>
        </svg>
      );
    }
  }

  return (
    <div
      className="rating-stars"
      aria-label={`Рейтинг: ${rating} из ${maxStars}`}
      title={`${rating} из ${maxStars}`}
    >
      {stars}
      {showValue && <span className="rating-stars__value">{rating}</span>}
    </div>
  );
};

export default Rating;
