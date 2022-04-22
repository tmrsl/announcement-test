const Card = props => {
  return <div className={`bg-white shadow-xl rounded-lg ${props.className}`}>{props.children}</div>
};

export default Card;
