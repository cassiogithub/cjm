import cjmLogo from '../../../assets/cjm_logo.png'
export function AboutUs() {
  return (
    <div className="flex flex-col w-8/12 gap-4">
      <img src={cjmLogo} alt="logo" className="w-10" />
      <h2 className="text-gray-200 font-bold"> Vamos facilitar o seu mini evento !</h2>
      <p className="text-gray-200">
        Somos uma plataforma onde você poderá gerenciar convites por link, onde seus amigos irão
        marcar presença no seu aniversário, churrasco ou reunião. Você poderá verificar quem marcou
        presença no seu evento apartir da nossa plataforma.
      </p>
      <p className="text-gray-200">
        Chega de enviar convites individuais para seus amigos, apenas
        <em className="font-bold"> passe o link !</em>
      </p>
    </div>
  )
}
