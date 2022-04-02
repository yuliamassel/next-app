import Head from "next/head";
import styles from "../styles/main.module.css";
import * as BsIcons from "react-icons/fa";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer"

const Profile = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App | Profile</title>
      </Head>
      <Navbar />
      <div className={styles["content-profile"]}>
        <div className={styles["title-profile"]}>
          <div className={styles["back-category"]}>
            <BsIcons.FaChevronLeft size={28} />
            <h6 className="ms-3">Category</h6>
          </div>
          <h2>Joe Daniel</h2>
        </div>
        <div className="d-flex flex-row">
          <div className={styles["content-myprofile"]}>
            <div className={`${styles["my-profile"]}`}>
              <div className={`p-4 ${styles["info-profile"]}`}>
                <Image
                  className={`${styles["pp-profile"]}`}
                  //   onClick={handleClick}
                  src="/user.png"
                  width={80}
                  height={80}
                  alt="user"
                />
                <div className="d-flex flex-column ms-3">
                  <span>@jonathan</span>
                  <h5 className="my-1">Joe Daniel</h5>
                  <p>Member</p>
                </div>
              </div>
              <div className={`ms-4 ${styles["about"]}`}>
                <h6>About me</h6>
                <p>
                  Madison Blackstone is a director of publisher, with experience
                  managing global teams.
                </p>
              </div>
              <div className={`${styles["right-nav"]}`}>
                <div className={`${styles["content-bar"]}`}>
                  50 <br />
                  <p>post</p>
                </div>
                <div className={`${styles["content-bar"]}`}>
                  250 <br />
                  <p>visitor</p>
                </div>
                <div className={`${styles["content-bar"]}`}>
                  4.5K <br />
                  <p>comment</p>
                </div>
              </div>
            </div>
            <Button className={`${styles["btn-msg"]}`}>Message</Button>
            <Button className={`mt-3 ${styles["btn-follw"]}`}>Following</Button>
          </div>
          <div className={`${styles["right-line"]}`}></div>
          <div className={`p-3 ${styles["mypost"]}`}>
            <h4 className="my-4">Post</h4>
            <div className={`${styles["contents-rightbar"]}`}>
              <div className={`${styles["content-mypost"]}`}>
                <div className="mb-3">
                  <Image
                    className={styles["img"]}
                    src="/healt.svg"
                    width={255}
                    height={220}
                    alt="gambar"
                  />
                  <div className={`${styles["posts"]}`}>
                    <p className="text-primary mb-0">COVID 19</p>
                    <p className="my-1">
                      Why corona never ends? <br /> Let’s see how its facts
                    </p>
                    <div className="d-flex flex-row">
                      <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                      <span className="mx-2 me-4">2.1 k</span>
                      <BsIcons.FaRegClock className={styles["clock"]} />
                      <span className="mx-2 me-4">3m ago</span>
                      <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image
                    className={styles["img"]}
                    src="/gonverment.svg"
                    width={250}
                    height={220}
                    alt="gambar"
                  />
                  <div className={`${styles["posts"]}`}>
                    <p className="text-primary mb-0">COVID 19</p>
                    <p className="my-1">
                      Why corona never ends? <br /> Let’s see how its facts
                    </p>
                    <div className="d-flex flex-row">
                      <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                      <span className="mx-2 me-4">2.1 k</span>
                      <BsIcons.FaRegClock className={styles["clock"]} />
                      <span className="mx-2 me-4">3m ago</span>
                      <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image
                    className={styles["img"]}
                    src="/healt.svg"
                    width={250}
                    height={220}
                    alt="gambar"
                  />
                  <div className={`${styles["posts"]}`}>
                    <p className="text-primary mb-0">COVID 19</p>
                    <p className="my-1">
                      Why corona never ends? <br /> Let’s see how its facts
                    </p>
                    <div className="d-flex flex-row">
                      <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                      <span className="mx-2 me-4">2.1 k</span>
                      <BsIcons.FaRegClock className={styles["clock"]} />
                      <span className="mx-2 me-4">3m ago</span>
                      <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image
                    className={styles["img"]}
                    src="/healt.svg"
                    width={250}
                    height={220}
                    alt="gambar"
                  />
                  <div className={`${styles["posts"]}`}>
                    <p className="text-primary mb-0">COVID 19</p>
                    <p className="my-1">
                      Why corona never ends? <br /> Let’s see how its facts
                    </p>
                    <div className="d-flex flex-row">
                      <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                      <span className="mx-2 me-4">2.1 k</span>
                      <BsIcons.FaRegClock className={styles["clock"]} />
                      <span className="mx-2 me-4">3m ago</span>
                      <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
