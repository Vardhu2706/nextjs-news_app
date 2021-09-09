import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Toolbar } from "../components/toolbar";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop shop for the latest news.</h3>
      </div>
    </div>
  );
}
