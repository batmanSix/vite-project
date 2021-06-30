import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from "antd";
import { fakeAuth } from "../../util/fakeAuth";
import loginBg from "../../assets/images/login_bg.svg";
import Logo from "../../assets/images/logo.svg";
import Name from "../../assets/images/name.svg";
import "./index.css";

const handleSubmit = (e) => {
  console.log("232");
  //fakeAuth.setToken("zxcvbnmasdfghjkl");
  console.log(useHistory, "here");
  handleLogin();
};

function LoginForm() {
  let history = useHistory();

  function handleLogin() {
    fakeAuth.setToken("zxcvbnmasdfghjkl");
    message.success("登陆成功", 1);
    history.push("/dataCount");
  }

  return (
    <div className="loginWrap">
      <div className="contentWrap">
        <div className="leftSide">
          <img src={loginBg} className="loginBg" alt="login" />
        </div>
        <div className="loginForm">
          <div className="title">
            <img src={Logo} alt="Ant Design后台管理系统" className="logo" />
            <img src={Name} alt="Ant Design后台管理系统" className="name" />
          </div>
          <div className="dataWrap">
            <Form onFinish={handleLogin} className="login-form">
              <Form.Item>
                <Input size="large" placeholder="请输入用户账号" />
              </Form.Item>
              <Form.Item>
                <Input size="large" type="password" placeholder="请输入密码" />
              </Form.Item>
              <Form.Item>
                <Checkbox> 记住密码 </Checkbox>
              </Form.Item>{" "}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                >
                  登录{" "}
                </Button>{" "}
              </Form.Item>{" "}
            </Form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default LoginForm;
