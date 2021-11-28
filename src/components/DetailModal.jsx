import React, { useContext, useEffect } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { clientContext } from '../contexts/ClientContext';

const DetailModal = (props) => {
    const { getDetails, productDetails } = useContext(clientContext)
    const params = useParams()
    console.log(getDetails());
    return (
        <>
            <Modal
                className='mainModal'
                {...props}
                // size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ paddingLeft: '35%', fontSize: "30px", fontWeight: "700" }}>
                        {
                            props.products.name
                        }
                    </Modal.Title>
                </Modal.Header>
                <div className="modall">
                    <img className="image" src={props.products.image} />
                </div>
                <Modal.Body style={{
                    textAlign: 'center',
                    padding: '0 22%'
                }}>
                    {
                        props.products.gender
                    }
                        <br />
                    {
                        props.products.composition
                    }
                    <br />
                    {
                        props.products.price
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DetailModal;