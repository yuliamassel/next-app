// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

function authLogin(data) {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000/users/login", data.form)
      .then((res) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("userInfo", JSON.stringify(res?.data?.data));
          resolve(res?.data?.data);
          // window.localStorage.setItem(key, JSON.stringify(value));
        }
      })
      .catch((err) => {
        reject(err.response);
        console.log(err);
      });
  });
}

export { authLogin };
