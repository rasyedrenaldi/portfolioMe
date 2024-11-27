import Card from './Card';
import { Fragment } from 'react';

const Modal = ({ className, children }) => {
  return (
    <Fragment>
      <section id="backdrop"></section>
      <Card className={className}>{children}</Card>
    </Fragment>
  );
};

export default Modal;
