import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('root'));
};
export default Modal;
