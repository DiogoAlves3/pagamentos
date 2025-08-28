export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-responsive py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[--color-brand]" />
            <span className="font-display text-xl font-extrabold tracking-tight">Elite Motors</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">Concessionária de confiança. Carros com procedência, transparência e excelência.</p>
        </div>
        <div>
          <h4 className="font-semibold">Links rápidos</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#estoque" className="hover:text-gray-900">Estoque</a></li>
            <li><a href="#ofertas" className="hover:text-gray-900">Ofertas</a></li>
            <li><a href="#servicos" className="hover:text-gray-900">Serviços</a></li>
            <li><a href="#contato" className="hover:text-gray-900">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Atendimento</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>Seg a Sex: 8h - 18h</li>
            <li>Sábado: 9h - 14h</li>
            <li>Telefone: (11) 0000-0000</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Redes sociais</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-900">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-900">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-responsive py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Elite Motors. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

