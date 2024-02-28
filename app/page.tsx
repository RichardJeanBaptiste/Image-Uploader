import Nav from "./components/Nav";
import Uploader from "./components/Uploader";
import Background from "./components/Background";
import { LightProvider } from "./components/LightContext";
import styles from "@/app/page.module.css";


export default function Home() {
  return (
    <>
      <LightProvider>
        <Background/>
        <Nav/>
        <Uploader/>
      </LightProvider>  
    </>
  );
}
