import React from 'react';
import { Alert } from 'antd';
// alert 组件

const onClose = ()=>{
  alert('点击了关闭')
}

function Alerts() {
  return (
    <div>   
      <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose={onClose}
    />
    </div>
  );
}

export default Alerts;
