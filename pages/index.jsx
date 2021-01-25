import Head from "next/head";
import { MainCatalog } from "../components/MainCatalog";
import { NavBar } from "../components/NavBar";

export default function Home() {
  let articles = ["", "", "", "", "", ""];
  return (
    <div>
      <Head>
        <title>Shop By FL</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      
    </div>
  );
}
