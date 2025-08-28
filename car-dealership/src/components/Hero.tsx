export function Hero() {
  return (
    <section aria-label="Hero" className="relative">
      <div className="relative isolate">
        <div
          className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1511910849309-0dffb71f51ba?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center"
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden />

        <div className="container-responsive py-24 sm:py-28 lg:py-36">
          <div className="max-w-2xl text-white">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Performance, sofisticação e confiança em cada quilômetro
            </h1>
            <p className="mt-5 text-lg text-gray-200 max-w-xl">
              Carros novos e seminovos com as melhores condições do mercado. Financiamento
              facilitado, avaliação justa do seu usado e garantia estendida.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#estoque" className="btn-primary">Ver estoque</a>
              <a href="#ofertas" className="btn-outline">Ofertas da semana</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

