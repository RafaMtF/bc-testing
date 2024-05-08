"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    usuario: "",
    senha: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 z-50 max-h-[calc(100vh-20%)] rounded-md overflow-auto border-2 border-gray-400 shadow-xl">
      <h1 className="flex justify-center text-2xl font-semibold">
        Fazer Login
      </h1>
      <form className="mt-2">
        <label>
          Usuário:
          <input
            type="text"
            name="usuario"
            className="p-2 border-2 border-gray-200 rounded-md w-full"
            onChange={handleChange}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            className="p-2 border-2 border-gray-200 rounded-md w-full"
            onChange={handleChange}
          />
        </label>
        <Link href="/dashboard">
          <button className="bg-green-500 text-white p-2 rounded-md w-full mt-5">
            Entrar
          </button>
        </Link>
      </form>
    </div>
  );
}
