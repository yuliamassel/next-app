import Head from "next/head";
import Navbar from "../components/Navbar";
import * as BsIcons from "react-icons/fa";
import styles from "../styles/main.module.css";
import Button from "../components/Button";
import Input from "../components/Input";
import Footer from "../components/Footer/index"
import DropDown from "../components/DropDown/DropDown";
import { useState } from "react";

const WriteArticle = () => {

  const [selected, setSelected] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>News App | Write Article</title>
      </Head>
      <Navbar />
      <div className={styles["title-write"]}>
        <div className={styles["icon-back"]}>
          <BsIcons.FaChevronLeft />
          <h6 className="ms-3">Back</h6>
        </div>
        <h2>Write Article</h2>
      </div>
      <div className="d-flex flex-row p-5">
        <div className={`${styles["chose-photo"]}`}>
          <div className={`${styles["content-chose"]}`}>
            <div className={styles["dash"]}><BsIcons.FaPlus className={`${styles["plus"]}`}/></div>
          </div>
          <Button className={`${styles["btn-choose"]}`}>
            Choose Cover Photo
          </Button>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row">
            <Input
              className={`mx-3 ${styles["input-title"]}`}
              placeholder="Article Title"
            />
            {/* <Input className={styles["input-title"]}/> */}
            <DropDown selected={selected} setSelected={setSelected} />
          </div>
          <form>
          <textarea className={`ms-4 ${styles["typing-article"]}`} placeholder="Type the article"></textarea>
          <Input type="submit" className={`ms-4 ${styles["btn-post"]}`} value="Request Publish Article"/>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default WriteArticle;
