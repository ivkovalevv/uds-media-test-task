import "./like-button.scss";

const LikeButton = ({ active = false, handleClick }) => {
  return (
    <button className="like-button" onClick={() => handleClick(!active)}>
      <svg
        className={`like-social-icon ${active ? "active" : ""}`}
        viewBox="0 0 26 24"
        width="26"
        height="24"
      >
        <use href="../../../../assets/images/svg/sprite.svg#like-icon"></use>
      </svg>
    </button>
  );
};

export default LikeButton;
