import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CoinInfo from './CoinInfo';

function CoinInfoModal ({ show, setShow, coinName}) {
    return (
        <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CoinInfo coinName={coinName} />
        </Modal.Body>
      </Modal>
    );
}

export default CoinInfoModal;

