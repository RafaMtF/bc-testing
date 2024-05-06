"use client";

import BtnBack from "@/app/components/BtnBack";
import React, { useEffect } from "react";

function Page({ params }) {
  useEffect(() => {
    fetch(`http://localhost:3001/fornecedores/${params.id}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <h1>Page fornecedores/[id]</h1>
      <p>id: {params.id}</p>

      <BtnBack />
    </div>
  );
}

export default Page;
