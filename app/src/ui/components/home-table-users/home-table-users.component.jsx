import React from 'react'

export function HomeTableUsers({ participants, handleRemovePresence }) {
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
            {participants.length > 0 ? (
              participants.map((participant) => (
                <tr key={participant.id}>
                  <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                    {participant.nome}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                    Confirmado
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                    {participant.contato}
                  </td>
                  <td className="px-6 py-4 text-sm text-red-700 whitespace-nowrap">
                    <button
                      className="hover:brightness-200"
                      onClick={() => handleRemovePresence(participant.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="h-12 flex items-center justify-center w-full">
                <td colSpan="4">Ops ainda não temos confirmados...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
