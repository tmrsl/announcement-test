import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import Card from './Card';

const Backdrop = (props) => {
  return <div className="fixed top-0 left-0 w-full h-screen z-5 bg-neutral-700/75" onClick={props.onCancel}></div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCancel={props.onCancel} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <Card
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] p-8 z-10 overflow-hidden ${props.className}`}
        >
          {props.children}
        </Card>,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Modal;
