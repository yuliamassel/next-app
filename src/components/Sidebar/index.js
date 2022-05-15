import useSWR from "swr";
import Image from "next/image";
import styles from "../../styles/main.module.css";
import * as BsIcons from "react-icons/fa";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Sidebar = () => {
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
  console.log("INI DATA", token);

  return (
    <div className={`${styles["sidebar"]}`}>
      <div className={`${styles["profile-sidebar"]}`}>
        <div className={`${styles["info-sidebar"]}`}>
          <Image
            className={`${styles["pp-profile"]}`}
            //   onClick={handleClick}
            src="/user.png"
            width={80}
            height={80}
            alt="user"
          />
          {/* ms-3 d-flex flex-column */}
          <div className={`ms-2 ${styles["bio"]}`}>
            <span className="">@jonathan</span>
            <p className={styles["name"]}>{token.name ? token.name : ""}</p>
            <p className="mt-2">Member</p>
          </div>
        </div>
        <div className={`mt-2 ${styles["about-edit"]}`}>
          <h6>About me</h6>
          <p>
            Madison Blackstone is a director of publisher, with experience
            managing global teams.
          </p>
        </div>
        <div className={`${styles["bottom-nav"]}`}>
          <div className={`${styles["content-bottnav"]}`}>
            50 <br />
            <p>post</p>
          </div>
          <div className={`${styles["content-bottnav"]}`}>
            250 <br />
            <p>visitor</p>
          </div>
          <div className={`${styles["content-bottnav"]}`}>
            4.5K <br />
            <p>comment</p>
          </div>
        </div>
      </div>
      <div className={`${styles["action-sidebar"]}`}>
        <div className={`px-5 ${styles["path"]}`}>
          <p className={`${styles["txt-path"]}`}>Edit Profile</p>
          <BsIcons.FaChevronRight className={styles["arrow-right"]} size={25} />
        </div>
        <div className={`px-5 ${styles["path"]}`}>
          <p className={`${styles["txt-path"]}`}>Saved Post</p>
          <BsIcons.FaChevronRight className={styles["arrow-right"]} size={25} />
        </div>
        <div className={`px-5 ${styles["path"]}`}>
          <p className={`${styles["txt-path"]}`}>FAQ</p>
          <BsIcons.FaChevronRight className={styles["arrow-right"]} size={25} />
        </div>
        <div className={`px-5 ${styles["path"]}`}>
          <p className={`${styles["txt-path"]}`}>Help</p>
          <BsIcons.FaChevronRight className={styles["arrow-right"]} size={25} />
        </div>
        <div className={`px-5 ${styles["path"]}`}>
          <p className={`${styles["txt-path"]}`}>Logout</p>
          <BsIcons.FaChevronRight className={styles["arrow-right"]} size={25} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
