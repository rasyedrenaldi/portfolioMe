import Card from './Card';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

const Modal = ({ className, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <>
          <section id="backdrop"></section>
          <Card className={className}>Hello World, Welcome to The Jungle of JS Technology</Card>
        </>,
        document.querySelector('#overlays')
      )}
    </Fragment>
  );
};

export default Modal;
