import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import styles from "../styles/main.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
// import {BsBookmark} from 'react-icons/bs'
import * as BsIcons from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App | Home</title>
      </Head>
      <Navbar />
      <div className={`${styles["content-home"]}`}>
        <div className={`${styles["display-top"]}`}>
          <div className={styles['txt-home']}>
          <h1>
            Share Information <br /> and Educate People
          </h1>
          <p>
            Everyone has their point of view of something, but just <br /> don’t
            be afraid to express the facts. Be an author and <br /> share you
            prespective of something to the world.
          </p>
          <Button className={`${styles["btn-navtop"]}`}>Start Exploring</Button>
          </div>
        </div>
        <div className="ps-5 mt-5">
          <h3 className="mb-4 ms-4">Popular Tags</h3>
          <div className={`${styles["tags"]}`}>
            <p className="">#ladygaga</p>
            <p>#jokowidodo</p>
            <p>#dayniki</p>
            <p>#ladygaga</p>
          </div>
        </div>
        <div className="ps-5 ms-4 mt-4">
          <div className="d-flex flex-row justify-content-between">
            <h3 className="mb-4">Category</h3>
            <p className="text-primary me-5">
              <Link href="">More</Link>
            </p>
          </div>
          <div className={`${styles["category"]}`}>
            <div className={`me-4 ${styles["img-category"]}`}>
              <Image
                src="/gonverment.svg"
                width={150}
                height={160}
                alt="goverment"
              />
              <p>Goverment</p>
            </div>
            <div className={`me-4 ${styles["img-category"]}`}>
              <Image
                src="/healt.svg"
                width={150}
                height={160}
                alt="goverment"
              />
              <p>Healt</p>
            </div>
            <div className={`me-4 ${styles["img-category"]}`}>
              <Image
                src="/economy.svg"
                width={150}
                height={160}
                alt="goverment"
              />
              <p>Economy</p>
            </div>{" "}
            <div className={`me-4 ${styles["img-category"]}`}>
              <Image
                src="/healt.svg"
                width={150}
                height={160}
                alt="goverment"
              />
              <p>Health</p>
            </div>
            <div className={`me-4 ${styles["img-category"]}`}>
              <Image
                src="/gonverment.svg"
                width={150}
                height={160}
                alt="goverment"
              />
              <p>Goverment</p>
            </div>
            <div className={`me-4 ${styles["img-category"]}`}>
              <Image
                src="/healt.svg"
                width={150}
                height={160}
                alt="goverment"
              />
              <p>Health</p>
            </div>
            <div className={`me-4 ${styles["img-category"]}`}>
              <Image
                src="/economy.svg"
                width={150}
                height={160}
                alt="goverment"
              />
              <p>Economy</p>
            </div>
          </div>
        </div>
        <div className="ps-5 ms-4 mt-4">
          <div className="d-flex flex-row justify-content-between">
            <h3 className="mb-4">Recomended</h3>
            <p className="text-primary me-5">
              <Link href="">More</Link>
            </p>
          </div>
          <div className="d-flex flex-row">
            <div className={`${styles["recomend-news"]}`}>
              <div className={`${styles["news"]}`}>
                <p className="text-primary">COVID 19</p>
                <p>
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row">
                  <BsIcons.BsHandThumbsUp className={styles["thumbs"]} />
                  <span className="mx-2 me-4">2.1 k</span>
                  <BsIcons.BsClock className={styles["clock"]} />
                  <span className="mx-2 me-4">3m ago</span>
                  <BsIcons.BsBookmarkFill className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["recomend-news"]}`}>
              <div className={`${styles["news"]}`}>
                <p className="text-primary">COVID 19</p>
                <p>
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row">
                  <BsIcons.BsHandThumbsUp className={styles["thumbs"]} />
                  <span className="mx-2 me-4">2.1 k</span>
                  <BsIcons.BsClock className={styles["clock"]} />
                  <span className="mx-2 me-4">3m ago</span>
                  <BsIcons.BsBookmarkFill className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["recomend-news"]}`}>
              <div className={`${styles["news"]}`}>
                <p className="text-primary">COVID 19</p>
                <p>
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row">
                  <BsIcons.BsHandThumbsUp className={styles["thumbs"]} />
                  <span className="mx-2 me-4">2.1 k</span>
                  <BsIcons.BsClock className={styles["clock"]} />
                  <span className="mx-2 me-4">3m ago</span>
                  <BsIcons.BsBookmarkFill className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["recomend-news"]}`}>
              <div className={`${styles["news"]}`}>
                <p className="text-primary">COVID 19</p>
                <p>
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row">
                  <BsIcons.BsHandThumbsUp className={styles["thumbs"]} />
                  <span className="mx-2 me-4">2.1 k</span>
                  <BsIcons.BsClock className={styles["clock"]} />
                  <span className="mx-2 me-4">3m ago</span>
                  <BsIcons.BsBookmarkFill className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["video-story"]}>
          <div>
            <h1 className={styles["title-video"]}>
              Let’s hear about <br /> Kayla’s success story
            </h1>
            <p>
              See how well News Today works in a <br /> real user’s life.{" "}
            </p>
            <Button className="btn btn-primary">Let’s get started</Button>
          </div>
          <Image src="/Video.svg" width={700} height={300} alt="videos" />
        </div>
        <div className="ps-5 ms-4 mt-5">
          <h3 className="mb-5">Lastest News</h3>
          <div className={`${styles["last-news"]}`}>
            <div className={styles['content-last']}>
              <div className="d-flex flex-row">
                <Image
                  src="/healt.svg"
                  width={180}
                  height={160}
                  alt="goverment"
                />
                <div className={`ms-4 mt-2 ${styles["news1"]}`}>
                  <p className="text-primary">COVID 19</p>
                  <p>
                    Why corona never ends? <br /> Let’s see how its facts
                  </p>
                  <p className="text-secondary">Writted by Ryann Jenn</p>
                  <div className="d-flex flex-row">
                    <BsIcons.BsHandThumbsUp className={styles["thumbs"]} />
                    <span className="mx-2 me-4">2.1 k</span>
                    <BsIcons.BsClock className={styles["clock"]} />
                    <span className="mx-2 me-4">3m ago</span>
                    <BsIcons.BsBookmarkFill
                      className={`${styles["bookmark"]}`}
                    />
                  </div>
                </div>
              </div>
                <Button className={styles['btn-news']}>Read Now</Button>
            </div>
            <div className={styles['content-last']}>
              <div className="d-flex flex-row">
                <Image
                  src="/healt.svg"
                  width={180}
                  height={160}
                  alt="goverment"
                />
                <div className={`ms-4 mt-2 ${styles["news1"]}`}>
                  <p className="text-primary">COVID 19</p>
                  <p>
                    Why corona never ends? <br /> Let’s see how its facts
                  </p>
                  <p className="text-secondary">Writted by Ryann Jenn</p>
                  <div className="d-flex flex-row">
                    <BsIcons.BsHandThumbsUp className={styles["thumbs"]} />
                    <span className="mx-2 me-4">2.1 k</span>
                    <BsIcons.BsClock className={styles["clock"]} />
                    <span className="mx-2 me-4">3m ago</span>
                    <BsIcons.BsBookmarkFill
                      className={`${styles["bookmark"]}`}
                    />
                  </div>
                </div>
              </div>
                <Button className={styles['btn-news']}>Read Now</Button>
            </div>
            <div className={styles['content-last']}>
              <div className="d-flex flex-row">
                <Image
                  src="/healt.svg"
                  width={180}
                  height={160}
                  alt="goverment"
                />
                <div className={`ms-4 mt-2 ${styles["news1"]}`}>
                  <p className="text-primary">COVID 19</p>
                  <p>
                    Why corona never ends? <br /> Let’s see how its facts
                  </p>
                  <p className="text-secondary">Writted by Ryann Jenn</p>
                  <div className="d-flex flex-row">
                    <BsIcons.BsHandThumbsUp className={styles["thumbs"]} />
                    <span className="mx-2 me-4">2.1 k</span>
                    <BsIcons.BsClock className={styles["clock"]} />
                    <span className="mx-2 me-4">3m ago</span>
                    <BsIcons.BsBookmarkFill
                      className={`${styles["bookmark"]}`}
                    />
                  </div>
                </div>
              </div>
                <Button className={styles['btn-news']}>Read Now</Button>
            </div>
            <div className={styles['content-last']}>
              <div className="d-flex flex-row">
                <Image
                  src="/healt.svg"
                  width={180}
                  height={160}
                  alt="goverment"
                />
                <div className={`ms-4 mt-2 ${styles["news1"]}`}>
                  <p className="text-primary">COVID 19</p>
                  <p>
                    Why corona never ends? <br /> Let’s see how its facts
                  </p>
                  <p className="text-secondary">Writted by Ryann Jenn</p>
                  <div className="d-flex flex-row">
                    <BsIcons.BsHandThumbsUp className={styles["thumbs"]} />
                    <span className="mx-2 me-4">2.1 k</span>
                    <BsIcons.BsClock className={styles["clock"]} />
                    <span className="mx-2 me-4">3m ago</span>
                    <BsIcons.BsBookmarkFill
                      className={`${styles["bookmark"]}`}
                    />
                  </div>
                </div>
              </div>
                <Button className={styles['btn-news']}>Read Now</Button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
