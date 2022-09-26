import { Header, HomeInfoEvento, HomeTableUsers } from '../../components'
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

        <section className="flex flex-col grow">seus eventos</section>
      </main>
    </div>
  )
}
