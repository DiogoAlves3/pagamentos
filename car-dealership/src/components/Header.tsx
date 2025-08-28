import { MessageSquareText } from "lucide-react";

export function Header() {
  const whatsappNumber = "5599999999999"; // DDI+DDD+numero
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Vim pelo site e gostaria de saber mais sobre os veículos."
  )}`;

  const nav = [
    { href: "#estoque", label: "Estoque" },
    { href: "#ofertas", label: "Ofertas" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "Dúvidas" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container-responsive flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-[--color-brand]" />
          <span className="font-display text-xl font-extrabold tracking-tight">
            Elite <span className="text-[--color-brand]">Motors</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary whitespace-nowrap">
            <MessageSquareText size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

