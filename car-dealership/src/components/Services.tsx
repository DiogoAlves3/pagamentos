import { BadgeDollarSign, Repeat, Wrench, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: BadgeDollarSign,
    title: 'Financiamento',
    desc: 'Parcerias com os principais bancos, taxas competitivas e aprovação ágil.'
  },
  {
    icon: Repeat,
    title: 'Troca de usados',
    desc: 'Avaliação justa do seu veículo na troca por um seminovo ou zero.'
  },
  {
    icon: Wrench,
    title: 'Manutenção',
    desc: 'Revisões programadas e serviços com peças de qualidade e garantia.'
  },
  {
    icon: ShieldCheck,
    title: 'Garantia estendida',
    desc: 'Proteção adicional para você dirigir com tranquilidade por mais tempo.'
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container-responsive">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Serviços</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <s.icon className="text-[--color-brand]" />
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

