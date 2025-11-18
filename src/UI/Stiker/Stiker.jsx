import "./stiker.scss";

const Stiker = () => {
  return (
    <div className="sticker">
      <svg
        className="home-social-icon"
        viewBox="0 0 20 22"
        width="20"
        height="22"
      >
        <use href="../../assets/images/svg/sprite.svg#home-icon"></use>
      </svg>
    </div>
  );
};

export default Stiker;
