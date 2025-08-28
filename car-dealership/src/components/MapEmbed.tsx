export function MapEmbed() {
  return (
    <section aria-label="Localização" className="py-16 bg-gray-50">
      <div className="container-responsive">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Onde estamos</h2>
        <div className="mt-6 overflow-hidden rounded-xl border">
          <iframe
            title="Mapa da loja"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.726940006793!2d-46.65657192478633!3d-23.577966162974596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8e4b1c3a3%3A0x9b2d3a0b5c7c3a67!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1689700000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

