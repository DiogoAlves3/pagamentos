import { useState } from 'react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const whatsappNumber = '5599999999999'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Contato do site - ${name}`
    const body = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}`
    window.location.href = `mailto:contato@elitemotors.com.br?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de saber mais sobre os veículos e condições.'
  )}`

  return (
    <section id="contato" className="py-16">
      <div className="container-responsive grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Fale Conosco</h2>
          <p className="mt-2 text-gray-600">Envie uma mensagem ou chame no WhatsApp. Responderemos rapidamente.</p>
          <div className="mt-6">
            <a className="btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Nome</label>
              <input className="mt-1 w-full rounded-md border px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-medium">Telefone</label>
              <input className="mt-1 w-full rounded-md border px-3 py-2" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Mensagem</label>
              <textarea className="mt-1 w-full rounded-md border px-3 py-2 h-28" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="btn-primary">Enviar por E-mail</button>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-outline">WhatsApp</a>
          </div>
        </form>
      </div>
    </section>
  )
}

