import { useMemo, useState } from 'react'
import { cars as allCars, type Car } from '../data/cars'
import { Gauge, Fuel, Cog, Search } from 'lucide-react'

type Filters = {
  brand: string
  model: string
  yearFrom?: number
  yearTo?: number
  priceFrom?: number
  priceTo?: number
}

const unique = (arr: string[]) => Array.from(new Set(arr))

const formatBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

export function Catalog() {
  const [filters, setFilters] = useState<Filters>({ brand: '', model: '' })
  const [query, setQuery] = useState('')

  const brands = useMemo(() => unique(allCars.map((c) => c.brand)), [])
  const models = useMemo(() => {
    const base = filters.brand ? allCars.filter((c) => c.brand === filters.brand) : allCars
    return unique(base.map((c) => c.model))
  }, [filters.brand])

  const years = useMemo(() => unique(allCars.map((c) => String(c.year))).map(Number).sort((a, b) => b - a), [])

  const filtered = useMemo(() => {
    return allCars.filter((c) => {
      if (filters.brand && c.brand !== filters.brand) return false
      if (filters.model && c.model !== filters.model) return false
      if (filters.yearFrom && c.year < filters.yearFrom) return false
      if (filters.yearTo && c.year > filters.yearTo) return false
      if (filters.priceFrom && c.price < filters.priceFrom) return false
      if (filters.priceTo && c.price > filters.priceTo) return false
      if (query && !(`${c.brand} ${c.model}`.toLowerCase().includes(query.toLowerCase()))) return false
      return true
    })
  }, [filters, query])

  const set = (partial: Partial<Filters>) => setFilters((p) => ({ ...p, ...partial }))

  return (
    <section id="estoque" className="py-16 bg-gray-50">
      <div className="container-responsive">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Catálogo de Veículos</h2>
            <p className="mt-2 text-gray-600">Encontre o carro ideal com filtros avançados.</p>
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand]"
              placeholder="Buscar por marca ou modelo"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          <select
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            value={filters.brand}
            onChange={(e) => set({ brand: e.target.value, model: '' })}
          >
            <option value="">Marca</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          <select
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            value={filters.model}
            onChange={(e) => set({ model: e.target.value })}
          >
            <option value="">Modelo</option>
            {models.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <select
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            value={filters.yearFrom ?? ''}
            onChange={(e) => set({ yearFrom: e.target.value ? Number(e.target.value) : undefined })}
          >
            <option value="">Ano mín.</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            value={filters.yearTo ?? ''}
            onChange={(e) => set({ yearTo: e.target.value ? Number(e.target.value) : undefined })}
          >
            <option value="">Ano máx.</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            value={filters.priceFrom ?? ''}
            onChange={(e) => set({ priceFrom: e.target.value ? Number(e.target.value) : undefined })}
          >
            <option value="">Preço mín.</option>
            {[50000, 80000, 100000, 150000, 200000].map((p) => (
              <option key={p} value={p}>
                {formatBRL(p)}
              </option>
            ))}
          </select>

          <select
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            value={filters.priceTo ?? ''}
            onChange={(e) => set({ priceTo: e.target.value ? Number(e.target.value) : undefined })}
          >
            <option value="">Preço máx.</option>
            {[80000, 100000, 150000, 200000, 300000].map((p) => (
              <option key={p} value={p}>
                {formatBRL(p)}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />)
          )}
        </div>
      </div>
    </section>
  )
}

function CarCard({ car }: { car: Car }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={car.image} alt={`${car.brand} ${car.model}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white">
          {car.year}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-bold">
            {car.brand} {car.model}
          </h3>
          <span className="font-display text-[--color-brand] font-extrabold">{formatBRL(car.price)}</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Gauge size={14} /> {car.mileage.toLocaleString('pt-BR')} km
          </div>
          <div className="flex items-center gap-1">
            <Fuel size={14} /> {car.fuel}
          </div>
          <div className="flex items-center gap-1">
            <Cog size={14} /> {car.transmission}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <a href="#contato" className="btn-primary text-sm">Tenho interesse</a>
          <a href="#" className="btn-outline text-sm">Detalhes</a>
        </div>
      </div>
    </div>
  )
}

