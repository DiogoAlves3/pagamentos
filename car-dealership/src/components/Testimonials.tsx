const testimonials = [
  {
    name: 'Fernanda Lima',
    role: 'Empresária',
    text:
      'Atendimento impecável e muita transparência. Saí com meu carro novo em dois dias!',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Carlos Eduardo',
    role: 'Engenheiro',
    text:
      'Conseguiram a melhor taxa de financiamento e avaliaram muito bem meu usado.',
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Juliana Santos',
    role: 'Médica',
    text:
      'Ótima curadoria de veículos. Recomendo a todos que buscam qualidade e confiança.',
    avatar:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-16">
      <div className="container-responsive">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Depoimentos de Clientes</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-gray-700">“{t.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

