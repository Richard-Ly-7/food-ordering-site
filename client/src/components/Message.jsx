import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton';

export default function Message({ message, messageVisible, setMessageVisible }) {
    return (
        <Alert show={messageVisible} variant="warning" className="d-flex align-items-center justify-content-center gap-5 w-75 m-auto">
            <p className="m-auto h5">{message}</p>
            <CloseButton className="" onClick={() => setMessageVisible(false)} />
        </Alert>
    )
}