import React from "react";

const Modal = (props) => {
  const mensagem = props.mensagem;
  const onClose = props.onClose;
  const id = props.id;

  const handleOutsideClick = (e) => {
    if (e.target.id === props.id) onClose();
  };

  return (
    <div className="modalFeedBack" id={id} onClick={handleOutsideClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>{mensagem}</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={onClose}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
