import axios from "axios";
import React from "react";
import FacebookLogin from "react-facebook-login";

export default function LoginFacebook() {
  const responseFacebook = (response) => {
    console.log(response);
    axios({
      url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
      method: "post",
      data: {
        facebookToken: response.accessToken,
      },
    }).then((res) => {
      //   alert("Login Thành Công!");
      //Lưu vào localStorage
      localStorage.setItem("accessToken", res.data.content.accessToken);
    });
  };

  return (
    <FacebookLogin
      appId="644269203827889"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}
