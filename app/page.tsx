import Nav from "./components/Nav";
import Uploader from "./components/Uploader";
import Background from "./components/Background";
import { LightProvider } from "./components/LightContext";

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
