import React from 'react'

export function HomeTableUsers() {
  const TABLE_HEADER_ITEM = ['Nome', 'Situação', 'Contato']

  return (
    <div className="flex flex-col">
      <h2 className="self-center text-lg mb-2 font-bold">Confirmados</h2>
      <div className="overflow-hidden border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200 ">
            <tr>
              {TABLE_HEADER_ITEM.map((value, index) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-zinc-900 uppercase"
                  key={index}
                >
                  {value}
                </th>
              ))}

              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-zinc-900 uppercase"
              >
                Excluir
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">Cássio</td>
              <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">Confirmado</td>
              <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">51 980637209</td>
              <td className="px-6 py-4 text-sm text-red-700 whitespace-nowrap">Excluir</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
