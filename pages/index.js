// Index

// Imports
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Toolbar } from "../components/toolbar";

// Functional Component
export default function Home() {
  return (
    <div className="page-container">
      {/* Toolbar */}
      <Toolbar />

      {/* Home Page Content */}
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop for the latest news.</h3>
      </div>
    </div>
  );
}
