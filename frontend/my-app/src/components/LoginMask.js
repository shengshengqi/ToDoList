import React from "react";
import {useRef, useState} from "react";
import "./LoginMask.css";
import {doLogin, signin} from "../actions";

export default ({handleLogin = () => {}}) => {
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const [login, setLogin] = useState(true);
  return (
    <div className="loginWrapper">
      <div className="loginBlur" />

      <div className="loginForm">
        <div className="loginSwitcher">
          <h1
            onClick={() => setLogin(true)}
            className={!login ? "disable" : ""}
          >
            登录
          </h1>
          <h1
            onClick={() => setLogin(false)}
            className={login ? "disable" : ""}
          >
            注册
          </h1>
        </div>
        <hr />
        {login ? (
          <form
            className="form"
            onSubmit={e => e.preventDefault()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyItems: "flex-start"
            }}
          >
            <label className="label" htmlFor="username">
              用户名
            </label>
            <input
              className="input"
              name="username"
              ref={username}
              type="text"
            />

            <label className="label" htmlFor="password">
              密码
            </label>
            <input
              className="input"
              name="password"
              ref={password}
              type="password"
            />
            <hr
              style={{
                display: "inline-block"
              }}
            />
            <button
              className="button"
              onClick={() => {
                doLogin({
                  username: username.current.value,
                  password: password.current.value
                })
                  .then(res => {
                    if (res.status === 1)
                      handleLogin({
                        userId: res.data.userId,
                        userName: username.current.value
                      });
                    else throw new Error();
                  })
                  .catch(() => {
                    alert("登录失败");
                  });
              }}
            >
              登录
            </button>
          </form>
        ) : (
          <form
            className="form"
            onSubmit={e => e.preventDefault()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyItems: "flex-start"
            }}
          >
            <label className="label" htmlFor="username">
              用户名
            </label>
            <input
              className="input"
              name="username"
              ref={username}
              type="text"
            />

            <label className="label" htmlFor="password">
              密码
            </label>
            <input
              className="input"
              name="password"
              ref={password}
              type="password"
            />

            <label className="label" htmlFor="email">
              E-mail
            </label>
            <input className="input" name="email" ref={email} type="email" />
            <hr
              style={{
                display: "inline-block"
              }}
            />
            <button
              className="button-signin"
              onClick={() => {
                signin({
                  username: username.current.value,
                  password: password.current.value,
                  email: email.current.value
                })
                  .then(res => {
                    if (res.status === 1)
                      handleLogin({
                        userId: res.data.userId,
                        userName: username.current.value
                      });
                    else throw new Error();
                  })
                  .catch(() => {
                    alert("注册失败");
                  });
              }}
            >
              注册
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
