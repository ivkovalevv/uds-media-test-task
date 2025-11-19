import "./card-options.scss";

const CardOptions = () => {
  return (
    <div className="card-options">
      <button
        className="card-option"
        type="button"
        aria-label="Показать изображения"
        title="Изображения"
      >
        <svg
          className="image-social-icon"
          viewBox="0 0 25 21"
          width="25"
          height="21"
          aria-hidden="true"
        >
          <use
            href={`${process.env.PUBLIC_URL}/assets/images/svg/sprite.svg#image-icon`}
          ></use>
        </svg>
      </button>

      <button
        className="card-option"
        type="button"
        aria-label="Показать обзор"
        title="Обзор"
      >
        <svg
          className="review-social-icon"
          viewBox="0 0 32 21"
          width="32"
          height="21"
          aria-hidden="true"
        >
          <use
            href={`${process.env.PUBLIC_URL}/assets/images/svg/sprite.svg#review-icon`}
          ></use>
        </svg>
      </button>

      <button
        className="card-option"
        type="button"
        aria-label="Показать видео"
        title="Видео"
      >
        <svg
          className="video-social-icon"
          viewBox="0 0 24 16"
          width="24"
          height="16"
          aria-hidden="true"
        >
          <use
            href={`${process.env.PUBLIC_URL}/assets/images/svg/sprite.svg#video-icon`}
          ></use>
        </svg>
      </button>
    </div>
  );
};

export default CardOptions;
