import Head from "next/head";
import styles from "../styles/main.module.css";
import Navbar from "../components/Navbar";
import * as BsIcons from "react-icons/fa";
import Button from "../components/Button";
import Footer from "../components/Footer/index";
import { useState } from "react";
import Link from "next/link";
import Modal from "../components/Modal";


const Article = () => {
    const [openModal, setOpenModal]= useState()
    
  return (
    <div className={styles.container}>
      <Head>
        <title>News App | Article</title>
      </Head>
      <Navbar />
      <div className={styles["content-article"]}>
        <div className={`${styles["display-article"]}`}>
            <div className={styles['txt-desc']}>
          <h1>
            Start Writing an <br /> Article
          </h1>
          <p>
            You can be an author by being active in reading artciles <br /> in a month
            or you can request to be an author if you <br /> have been a member for
            three months.
          </p>
          <Button className={`${styles["btn-navtop"]}`}><Link href="/writeArticle"> Start Writing </Link></Button>
          </div>
        </div>
        <div className="ps-5 ms-4 mt-4">
        <div className={`${styles['filter']}`}>
            <Button className={`me-4 ${styles['btn-filter']}`}>
                <BsIcons.FaFilter size={25} onClick={()=>{setOpenModal(true)}}/>
            </Button>
            <Button className={`${styles['btn-write']}`}> + Write an Article</Button>
            {openModal &&  <Modal className='d-flex flex-column' closeModal={setOpenModal}>
                <div className={`${styles['content-filter']}`}><p className="ms-4 mt-3"> Name (A-Z)</p></div>
                <div className={`${styles['content-filter']}`}><p className="ms-4 mt-3"> Name (Z-A)</p></div>
                <div className={`${styles['content-filter']}`}><p className="ms-4 mt-3"> Category</p></div>
                <div className={`${styles['content-filter']}`}><p className="ms-4 mt-3"> Last Added</p></div>
                <div className={`${styles['content-filter2']}`}><p className="ms-4 mt-3"> Last Modified</p></div>
            </Modal>}
        </div>
        </div>
        <div className="ps-5 ms-4">
        <div className="d-flex flex-row justify-content-between">
            <h4 className="">Goverment</h4>
            <p className={styles['txt-more']}>
              <Link href="">View More</Link>
            </p>
          </div>
            <div className={'mt-5 d-flex flex-row'}>
            <div className={`${styles["recomend-news2"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">COVID 19</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["trump"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">Precident Election</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["economy"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">Currency Prices</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["recomend-news2"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">COVID 19</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <BsIcons.FaChevronRight size={50} className={styles['icon-right']}/>
            </div>
        </div>
        <div className="ps-5 ms-4">
        <div className="d-flex flex-row justify-content-between">
            <h4 className="">Today’s Popular</h4>
            <p className={styles['txt-more']}>
              <Link href="">View More</Link>
            </p>
          </div>
            <div className={'mt-5 d-flex flex-row'}>
            <div className={`${styles["recomend-news2"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">COVID 19</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["trump"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">Precident Election</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["economy"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">Currency Prices</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["recomend-news2"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">COVID 19</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <BsIcons.FaChevronRight size={50} className={styles['icon-right']}/>
            </div>
        </div>
        <div className="ps-5 ms-4">
        <div className="d-flex flex-row justify-content-between">
            <h4 className="">Sport</h4>
            <p className={styles['txt-more']}>
              <Link href="">View More</Link>
            </p>
          </div>
            <div className={'mt-5 d-flex flex-row'}>
            <div className={`${styles["cycling"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">COVID 19</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["sprint"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">Precident Election</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["economy"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">Currency Prices</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["recomend-news2"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">COVID 19</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <BsIcons.FaChevronRight size={50} className={styles['icon-right']}/>
            </div>
        </div>
        <div className="ps-5 ms-4">
        <div className="d-flex flex-row justify-content-between">
            <h4 className="">Politics</h4>
            <p className={styles['txt-more']}>
              <Link href="">View More</Link>
            </p>
          </div>
            <div className={'mt-5 d-flex flex-row'}>
            <div className={`${styles["brimob"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">Police Demonstrant</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["sprint"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">ASEAN GAMES</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["economy"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">Currency Prices</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <div className={`${styles["demo"]}`}>
              <div className={`${styles["news2"]}`}>
                <p className="text-primary mb-0 mt-2">Demonstrant</p>
                <p className="my-1 text-center">
                  Why corona never ends? <br /> Let’s see how its facts
                </p>
                <div className="d-flex flex-row mb-5 mt-1">
                  <BsIcons.FaRegThumbsUp className={styles["thumbs"]} />
                  <span className="mx-1 me-3">2.1 k</span>
                  <BsIcons.FaRegClock className={styles["clock"]} />
                  <span className="mx-1 me-3">3m ago</span>
                  <BsIcons.FaBookmark className={`${styles["bookmark"]}`} />
                </div>
              </div>
            </div>
            <BsIcons.FaChevronRight size={50} className={styles['icon-right']}/>
            </div>
        </div>
        {/*  */}
        <div className="d-flex justify-content-center align-items-center mb-5">
           <h6><Link href="">Load another 30+ category</Link></h6> 
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Article;
