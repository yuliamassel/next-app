import { Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import Button from "../Button";
import useSWR from "swr";
import Image from "next/image";
import styles from "../../styles/main.module.css";
import * as BsIcons from "react-icons/bi";
import Input from "../Input";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Navbar = () => {
  const router = useRouter();

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

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Sign Up") {
      router.push("/signup");
    }if (e.target.innerText === "Login") {
      router.push("/login");
    }else{
      router.push("/EditProfile")
    }
  };

  return (
    <nav className={`${styles["navbar"]}`}>
      <h2 className={styles["title-nav"]}>News Today</h2>
      <Nav.Link href="/" className={`ms-5 ${styles["txt-tabs"]}`}>
        Home
      </Nav.Link>
      <Nav.Link href="/article" className={styles["txt-tabs"]}>
        Articles
      </Nav.Link>
      <Nav.Link href="/category" className={styles["txt-tabs"]}>
        Category
      </Nav.Link>
      <Nav.Link href="/about" className={styles["txt-tabs"]}>
        About
      </Nav.Link>
      {token ? (
        <>
          <div>
            <BsIcons.BiSearch className={styles["icon-search"]} />
            <Input type="search" className={styles["input-nav"]} />
          </div>
          <BsIcons.BiBell className="mx-5" size={30} />
          <div>
            {/* <p>{data.email}</p> */}
            <Image
              className={styles["pp-user"]}
              onClick={handleClick}
              src="/user.png"
              width={40}
              height={40}
              alt="user"
            />
          </div>
        </>
      ) : (
        <>
          <Button onClick={handleClick} className={` ${styles["btn-nav1"]}`}>
            Sign Up
          </Button>
          <Button
            onClick={handleClick}
            className={`ms-3 ${styles["btn-nav2"]}`}
          >
            Login
          </Button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
