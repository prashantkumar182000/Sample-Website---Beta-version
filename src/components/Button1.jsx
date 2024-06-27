import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors duration-300 ease-out 
    ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} hover:text-color-1 ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
      <span className="absolute inset-0 bg-white transition-transform duration-300 ease-out transform origin-bottom-left scale-y-0 hover:scale-y-100 z-0" />
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
      <span className="absolute inset-0 bg-white transition-transform duration-300 ease-out transform origin-bottom-left scale-y-0 hover:scale-y-100 z-0" />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
