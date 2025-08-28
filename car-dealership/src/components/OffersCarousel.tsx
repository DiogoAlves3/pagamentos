import { ChevronLeft, ChevronRight, Percent } from 'lucide-react'
import { useRef } from 'react'

const offers = [
  {
    id: 'of1',
    title: 'Taxa 0,79% a.m. no financiamento',
    image:
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop',
    badge: 'Só esta semana',
  },
  {
    id: 'of2',
    title: 'Bônus de R$ 5.000 na troca do seu usado',
    image:
      'https://images.unsplash.com/photo-1549921296-3b4a6b2c9a5f?q=80&w=1600&auto=format&fit=crop',
    badge: 'Condição especial',
  },
  {
    id: 'of3',
    title: 'IPVA 2025 grátis em modelos selecionados',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop',
    badge: 'Imperdível',
  },
]

export function OffersCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: -1 | 1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: 'smooth' })
  }

  return (
    <section id="ofertas" className="py-16">
      <div className="container-responsive">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold flex items-center gap-2">
            <Percent className="text-[--color-brand]" /> Ofertas Especiais
          </h2>
          <div className="hidden sm:flex items-center gap-2">
            <button className="btn-outline p-2" onClick={() => scroll(-1)} aria-label="Anterior">
              <ChevronLeft />
            </button>
            <button className="btn-outline p-2" onClick={() => scroll(1)} aria-label="Próximo">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="mt-6 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {offers.map((o) => (
            <article
              key={o.id}
              className="relative snap-start min-w-[85%] sm:min-w-[48%] lg:min-w-[32%] overflow-hidden rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="aspect-[16/9]">
                <img src={o.image} alt="Oferta" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <span className="inline-flex items-center rounded-md bg-black/80 px-2 py-1 text-xs font-semibold text-white">
                  {o.badge}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">{o.title}</h3>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#contato" className="btn-primary text-sm">Aproveitar</a>
                  <a href="#estoque" className="btn-outline text-sm">Ver modelos</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

