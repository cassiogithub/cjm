import { Button, InputTextGroup } from '..'

export function EditEventForm({
  handleFormSubmit,
  editEvent,
  handleFormChange,
  handleCancelEdit,
}) {
  return (
    <form
      className="flex flex-col items-center bg-zinc-900 py-6 px-4 rounded-xl w-full gap-3 text-zinc-900"
      onSubmit={handleFormSubmit}
    >
      <InputTextGroup
        name="nome"
        value={editEvent.event.nome}
        label="Nome evento"
        onChange={handleFormChange}
        labelClass="w-full"
      />
      <InputTextGroup
        name="local"
        value={editEvent.event.local}
        label="Local"
        onChange={handleFormChange}
        labelClass="w-full"
      />
      <InputTextGroup
        name="dataEvento"
        value={editEvent.event.dataEvento}
        label="Nome evento"
        onChange={handleFormChange}
        type="datetime-local"
        labelClass="w-full"
      />
      <div className="flex w-full justify-between items-center mt-2">
        <Button value="Salvar" secondary={true} />
        <Button value="Cancelar" onClick={handleCancelEdit} />
      </div>
    </form>
  )
}
