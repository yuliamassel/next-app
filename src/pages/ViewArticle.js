import Head from "next/head";
import Navbar from "../components/Navbar";
import * as BsIcons from "react-icons/fa";
import styles from "../styles/main.module.css";
import Button from "../components/Button";
import Input from "../components/Input";
import Footer from "../components/Footer/index";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link"

const ViewArticle = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App | View Article</title>
      </Head>
      <Navbar />
      <div className={styles["title-write"]}>
        <div className={styles["icon-back"]}>
          <BsIcons.FaChevronLeft />
          <h6 className="ms-3">Back</h6>
        </div>
        <h3 className={styles["title-view"]}>Article Viewer</h3>
      </div>
      <div className={styles["content-view"]}>
        <div className="d-flex flex-row p-5">
          <Image
            src="/cycling_viewer.svg"
            width={600}
            height={400}
            alt="image article"
          />
          <div className={`ms-4 ${styles["txt-describe"]}`}>
            <h1>
              Since the pandemic, Indonesian citizens have a hobby of cycling
            </h1>
            <p>
              Jhon Daniel <span>-Author</span>
            </p>
            <div className="d-flex flex-row">
              <BsIcons.FaRegThumbsUp className="me-2 mt-1" />
              <span className="me-4">2.1K</span>
              <BsIcons.FaRegBookmark className="mt-1" />
            </div>
            <Button className={`${styles["btn-sharelink"]}`}>
              Share Article Link
            </Button>
          </div>
        </div>
        <div className={`p-5 ${styles["txt-articles"]}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            assumenda voluptatum, similique tempora ex optio animi quia
            dignissimos quasi cupiditate voluptate rem repellendus at nihil,
            iure molestias facilis voluptatem accusamus? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Rerum tempora saepe iure ducimus
            magnam sint repudiandae doloribus quia libero, quae dolor, sed
            nihil, adipisci dolorem omnis iusto repellat. Obcaecati, laborum.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            velit earum perspiciatis. Numquam aliquam, dolorum tempore debitis
            eveniet in corporis totam. <br />
            <br /> Reiciendis in dignissimos neque, incidunt libero aliquam
            laboriosam veniam! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Magnam illo eius natus consequuntur vero.
            Consequatur labore quo numquam architecto in illum excepturi nihil
            molestias suscipit, libero sunt consectetur quaerat. Quam! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Quia expedita
            adipisci perferendis ipsa molestiae officiis, eligendi illo
            possimus! Magni fugit nulla magnam omnis cumque nisi alias culpa
            aspernatur ad praesentium.
          </p>
        </div>
        <div className="p-5 d-flex flex-column">
          <h5>Comments</h5>
          <div className="d-flex flex-row">
            <Image
              src="/user.png"
              width={50}
              height={50}
              alt="profile comment"
            />
              <form>
                  <div>
                  <label className={`${styles["label-comment"]}`}>You</label>
                <Input className={`ms-2 mt-4 ${styles["input-comment"]}`} />
                <Button className={`ms-2 ${styles["btn-comment"]}`}>Submit</Button>
                </div>
              </form>
          </div>
          <div className="d-flex flex-row my-4">
            <Image
              src="/bisnisman.jpg"
              width={50}
              height={50}
              alt="profile comment"
            />
            <div className="d-flex flex-column ms-2">
                <h6>Jack Sparrow</h6> 
                <span>Nice Articles dude!</span>
            </div>
          </div>
          <div className="d-flex flex-row">
            <Image
              src="/gibbon.jpg"
              width={50}
              height={50}
              alt="profile comment"
            />
            <div className="d-flex flex-column ms-2">
                <h6>Gibbon</h6> 
                <span>very good article i really like it</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ViewArticle;
