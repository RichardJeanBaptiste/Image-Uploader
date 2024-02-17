import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Uploader from "./components/Uploader";
import { LightProvider } from "./components/LightContext";

export default function Home() {
  return (
    <>
      <LightProvider>
        <Nav/>
        <Uploader/>
      </LightProvider>
      
    </>
  );
}
