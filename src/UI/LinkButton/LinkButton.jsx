import "./link-button.scss";

const LinkButton = ({ title, href = "#", className = "" }) => {
  return (
    <a href={href} aria-label={title} className={`button ${className}`}>
      {title}
    </a>
  );
};

export default LinkButton;
