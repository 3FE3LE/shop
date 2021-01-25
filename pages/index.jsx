import Head from "next/head";
import { NavBar } from "../components/NavBar";

export default function Home() {
  let articles = [
    "","","","","",""
  ]
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
      <NavBar />
      <main>
        <div className="flex w-full justify-center">
          <div className="h-screen w-0 md:w-full max-w-xs p-3">
            <ul className="mb-10">
              <label htmlFor="">All categories</label>
              <li className="font-thin pl-4">apparel</li>
              <li className="font-thin pl-4">shop all</li>
            </ul>
            <ul className="mb-10">
              <label htmlFor="">All Designers</label>
              <li className="font-thin pl-4">sagaform</li>
              <li className="font-thin pl-4">OFS</li>
              <li className="font-thin pl-4">ACME</li>
            </ul>
          </div>
          <div className="h-screen grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-1 justify-center sm:justify-between w-full min-w-min max-w-7xl p-2">
            {articles.map((item,i) =>(
              <div key={i} className={`max-w-sm h-96 bg-gray-300 `}></div>
            ))}
          </div>
          <div className="h-screen p-2 w-0 xl:w-full max-w-xs">
            <ul className="mb-10">
              <label htmlFor="">Sort by</label>
              <li className="font-thin pl-4">popular</li>
              <li className="font-thin pl-4">newest</li>
              <li className="font-thin pl-4">most seller</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
