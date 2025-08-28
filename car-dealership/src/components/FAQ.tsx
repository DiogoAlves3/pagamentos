const faqs = [
  {
    q: 'Como funciona o financiamento?',
    a: 'Trabalhamos com diversos bancos. Simulamos as melhores condições e enviamos a proposta para aprovação rápida.',
  },
  {
    q: 'Meu usado entra como parte do pagamento?',
    a: 'Sim. Fazemos avaliação justa e transparente, com pagamento imediato da diferença.',
  },
  {
    q: 'Os veículos têm garantia?',
    a: 'Sim. Todos os veículos possuem garantia de procedência e possibilidade de garantia estendida.',
  },
  {
    q: 'Posso fazer um test drive?',
    a: 'Claro! Agende conosco pelo WhatsApp ou formulário de contato.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container-responsive">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Dúvidas Frequentes</h2>
        <div className="mt-8 divide-y rounded-xl border bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5">
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="text-[--color-brand]">+</span>
              </summary>
              <div className="px-5 pb-5 text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

