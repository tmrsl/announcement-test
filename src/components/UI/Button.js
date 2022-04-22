const Button = (props) => {
  return (
    <button
      className={
        `px-4 py-2 text-lg text-white bg-purple-700 ring-0 ring-purple-300 rounded-md hover:bg-purple-600 focus:ring-2 disabled:opacity-75 disabled:cursor-not-allowed outline-none
        ${props.className}`
      }
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
