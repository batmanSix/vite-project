import React from 'react';
import { message,Button } from 'antd';

// ant message组件

const success = () => {
  message.success('This is a success message',2);
};

const error = () => {
  message.error('This is an error message',2);
};

const warning = () => {
  message.warning('This is a warning message',2);
};
function Messages() {
  return (
    <div>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </div>
  );
}

export default Messages;
