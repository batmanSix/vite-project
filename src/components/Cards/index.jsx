import React from 'react';
import { Card } from 'antd';

// card 组件
function Cards() {
  return (
    <div>
     <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>小康测试组件</p>
      <p>小康喜欢陈虹妍</p>
      <p>小康喜欢陈虹妍</p>
    </Card>
    </div>
  );
}

export default Cards;
