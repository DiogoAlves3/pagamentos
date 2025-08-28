export function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container-responsive grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Sobre a Concessionária</h2>
          <p className="mt-4 text-gray-600">
            Na Elite Motors, unimos paixão por carros e compromisso com a excelência.
            Há mais de 10 anos no mercado, oferecemos uma curadoria de veículos com procedência,
            transparência na negociação e atendimento consultivo.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-gray-700">
            <li className="rounded-lg border p-4">
              <span className="font-semibold">Missão</span>
              <p className="text-sm text-gray-600">Proporcionar a melhor experiência de compra e pós-venda.</p>
            </li>
            <li className="rounded-lg border p-4">
              <span className="font-semibold">Visão</span>
              <p className="text-sm text-gray-600">Ser referência em qualidade e confiança no segmento automotivo.</p>
            </li>
            <li className="rounded-lg border p-4">
              <span className="font-semibold">Valores</span>
              <p className="text-sm text-gray-600">Transparência, ética, inovação e foco no cliente.</p>
            </li>
            <li className="rounded-lg border p-4">
              <span className="font-semibold">Garantia</span>
              <p className="text-sm text-gray-600">Veículos revisados e com garantia de procedência.</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
              alt="Showroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

