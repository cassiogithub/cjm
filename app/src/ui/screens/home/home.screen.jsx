import { EventoCard, Header, HomeInfoEvento, HomeTableUsers } from '../../components'

export function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 bg-cover bg-no-repeat flex flex-col items-center basis">
      <Header />
      <main className="flex items-stretch justify-between container text-gray-200 mt-4 grow ">
        <section className="flex flex-col justify-around p-4 grow">
          <h2 className="font-bold self-center text-xl">Ultimo Evento</h2>
          <HomeInfoEvento />
          <HomeTableUsers />
        </section>

        <section className="flex flex-col p-4 border border-gray-200 rounded my-4 grow justify-between">
          <h2 className="font-bold self-center text-xl mb-6">Seus Eventos</h2>
          <div className="flex flex-col gap-2">
            <EventoCard />
            <EventoCard disabled={true} />
          </div>
          <span className="self-center flex gap-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </span>
        </section>
      </main>
    </div>
  )
}
