import { useState } from "react";
import ModalConfPagamento from "./ModalConfPagamento";
import Link from "next/link";

function TablePagamentos({ pagamentos }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-5">
            <th className="border-r-2 border-gray-200 p-2">ID</th>
            <th className="border-r-2 border-gray-200 p-2">
              Meio de Pagamento
            </th>
            <th className="border-r-2 border-gray-200 p-2">Valor</th>
            <th className="border-r-2 border-gray-200 p-2">ID Comprovante</th>
            <th className="p-2">Apagar</th>
          </tr>
        </thead>
        <tbody className="border-t-2 border-gray-300">
          {pagamentos &&
            pagamentos.map((pagamentos) => {
              return (
                <tr key={pagamentos.id} className="grid grid-cols-5">
                  <td className="border-r-2 border-gray-200 p-2 flex items-center justify-center">
                    {pagamentos.id}
                  </td>
                  <td className="border-r-2 border-gray-200 p-2 flex items-center justify-center">
                    {pagamentos.meio_pagamento}
                  </td>
                  <td className="border-r-2 border-gray-200 p-2 flex items-center justify-center">
                    {pagamentos.valor}
                  </td>
                  <td className="border-r-2 border-gray-200 p-2 flex items-center justify-center">
                    <Link
                      href={`localhost:3001/documentos/uploads/documento-${pagamentos.id_documento_comprovante}`}
                    >
                      {pagamentos.id_documento_comprovante}
                    </Link>
                  </td>
                  <td className="flex justify-center">
                    <button
                      className="p-2 rounded-md text-white bg-red-500 hover:bg-red-600"
                      onClick={() => setOpen(!open)}
                    >
                      Apagar
                    </button>
                    <ModalConfPagamento
                      open={open}
                      setOpen={setOpen}
                      idPagamento={pagamentos.id}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default TablePagamentos;
