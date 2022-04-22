const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className="flex-shrink w-full min-w-1 p-2 text-slate-900 placeholder:text-slate-300 border-solid border-2 border-gray-200 rounded-md outline-none"
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
