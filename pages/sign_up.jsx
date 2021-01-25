import Head from "next/head";
import React from "react";

export default function sign_up() {
  return (
    <>
      <Head>
        <title>Shop By FL - Sing Up</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="w-full h-screen flex justify-center items-center">
        <form className="flex flex-wrap justify-center w-full max-w-md h-auto m-auto py-10 shadow-xl">
          <h1 className="w-full text-center text-4xl">Sign up</h1>
          <div className="w-full max-w-sm my-4">
            <label htmlFor="name">Nombre</label>
            <input
              className="w-full ring-2 ring-gray-300 bg-gray-100"
              type="text"
            />
          </div>

          <div className="w-full max-w-sm my-4">
            <label htmlFor="lastName">Apellidos</label>
            <input
              className="w-full ring-2 ring-gray-300 bg-gray-100"
              type="email"
            />
          </div>

          <div className="w-full max-w-sm my-4">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              className="w-full ring-2 ring-gray-300 bg-gray-100"
              type="text"
            />
          </div>

          <div className="w-full max-w-sm my-4">
            <label htmlFor="password">Contraseña</label>
            <input
              className="w-full ring-2 ring-gray-300 bg-gray-100"
              type="text"
            />
          </div>

          <div className="w-full max-w-sm my-4">
            <label htmlFor="repeat_password">Repita su contraseña</label>
            <input
              className="w-full ring-2 ring-gray-300 bg-gray-100"
              type="text"
            />
          </div>

          <button className="w-full max-w-sm text-2xl font-bold text-white bg-black text-center ring-2 ring-black my-4 uppercase">register</button>
        </form>
      </main>
    </>
  );
}
