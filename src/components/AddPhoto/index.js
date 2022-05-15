import styles from "../../styles/main.module.css";
import Input from "../Input";
import Button from "../Button";
import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";
// import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Addphoto = () => {
  const [form, setFrom] = useState({
    photo: null,
  });

  const handleChange = (e) => {
    setFrom({
      ...form,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    const token =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("userInfo"));
    axios
      .put("http://localhost:4000//users/profile/photo", form, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data?.data;
        console.log(data);
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
      });
  };

  const token =
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("userInfo"));
const { data, error } = useSWR(
  "http://localhost:4000/users/profile",
  {
    headers: { Authorization: `bearer : ${token}` },
  },
  fetcher
);

console.log("INI PHOTO",token);

  return (
    <div>
      <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <div className={styles["input-file"]}>
          {form.photo ? (
            <Image
              className={` ${styles["picture"]}`}
              src={URL.createObjectURL(form.photo)}
              alt="ProfilePicture"
              width={120}
              height={120}
              onChange={handleChange}
            />
          ) : (
            <Image
              className={`${styles["picture"]}`}
              src="/user.png"
              alt="ProfilePicture"
              width={120}
              height={120}
            />
          )}
        </div>
        <Input
          className={`${styles["photo"]}`}
          type="file"
          id="files"
          name="file"
        />
        <Button type="submit" className={`${styles["btn-save"]}`}>Save Changes</Button>
      </form>
    </div>
  );
};

export default Addphoto;
