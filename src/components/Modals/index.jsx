import React from 'react';
import { Modal, Button, Space } from 'antd';

//
const info = () => {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

const success = () =>{
  Modal.success({
    content: 'some messages...some messages...',
  });
}

const errors = () =>{ 
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

const warn = () =>{
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}

function Modals() {
  return (
    <div>
      <Button onClick={info}>Success</Button>
      <Button onClick={success}>Error</Button>
      <Button onClick={errors}>Warning</Button>
      <Button onClick={warn}>Warning</Button>
    </div>
  );
}

export default Modals;
