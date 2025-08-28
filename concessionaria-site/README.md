# 🚗 AutoCenter - Site da Concessionária

Um site moderno, responsivo e profissional para concessionária de carros, desenvolvido com React e TailwindCSS.

## ✨ Características

- **Design Moderno**: Interface limpa e contemporânea com paleta de cores preto, cinza e vermelho
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **SEO Otimizado**: Meta tags completas e Schema.org para melhor indexação
- **Performance**: Carregamento rápido com lazy loading e otimizações
- **Interativo**: Filtros avançados, carrosséis e formulários funcionais

## 🎯 Seções Implementadas

### 📱 Header Fixo
- Logo da concessionária
- Menu de navegação responsivo
- Botões de contato e WhatsApp
- Efeito de transparência no scroll

### 🏆 Hero Section
- Imagem de destaque com overlay
- Chamada de impacto
- Estatísticas da empresa
- Botão para catálogo de veículos

### 🚘 Catálogo de Veículos
- Cards detalhados dos veículos
- Sistema de filtros avançados:
  - Marca, modelo, ano
  - Faixa de preço
  - Tipo de combustível
  - Transmissão
- Busca por texto
- Indicadores de ofertas especiais

### 🔥 Ofertas Especiais
- Carrossel de promoções
- Destaque para veículos em oferta
- Banner promocional com condições especiais

### 🏢 Sobre a Concessionária
- História e valores da empresa
- Estatísticas de credibilidade
- Missão e visão

### 🛠️ Serviços
- Financiamento facilitado
- Troca de veículos usados
- Manutenção especializada
- Garantia estendida
- Processo de compra passo a passo

### 💬 Depoimentos
- Carrossel de avaliações reais
- Sistema de estrelas
- Fotos dos clientes
- Estatísticas de satisfação

### ❓ FAQ (Dúvidas Frequentes)
- Accordion interativo
- Filtros por categoria
- Dicas rápidas
- Seção de contato integrada

### 📞 Contato
- Formulário funcional
- Informações de contato
- Horário de funcionamento
- Mapa do Google Maps
- Ações rápidas (WhatsApp, telefone)

### 🦶 Footer Completo
- Links rápidos
- Redes sociais
- Horários de funcionamento
- Newsletter
- Informações legais

## 🚀 Tecnologias Utilizadas

- **React 18** com TypeScript
- **TailwindCSS** para estilização
- **React Icons** para ícones
- **Google Fonts** (Inter e Poppins)
- **Responsive Design** mobile-first

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd concessionaria-site
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

4. **Acesse o site**
```
http://localhost:3000
```

## 🛠️ Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm test` - Executa os testes
- `npm run eject` - Remove o create-react-app (irreversível)

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Paleta de Cores

- **Primário**: Vermelho (#ef4444) - Esportividade e energia
- **Secundário**: Cinza (#374151) - Sofisticação
- **Neutro**: Preto (#111827) - Elegância
- **Accent**: Branco (#ffffff) - Limpeza

## 📊 SEO e Performance

### Meta Tags Implementadas
- Título otimizado
- Descrição atrativa
- Keywords relevantes
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Schema.org (Local Business)

### Otimizações de Performance
- Lazy loading de imagens
- Preconnect para fonts e CDNs
- Compressão de assets
- Código minificado em produção

## 🔧 Personalização

### Alterando Cores
Edite o arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#ef4444', // Sua cor principal
    // ... outras variações
  }
}
```

### Adicionando Veículos
Edite o arquivo `src/data/vehicles.ts`:

```typescript
export const vehicles: Vehicle[] = [
  {
    id: 'novo-veiculo',
    name: 'Nome do Veículo',
    brand: 'Marca',
    // ... outras propriedades
  }
];
```

### Modificando Conteúdo
- **Dados da empresa**: `src/components/About.tsx`
- **Serviços**: `src/data/services.ts`
- **Depoimentos**: `src/data/testimonials.ts`
- **FAQ**: `src/data/faq.ts`

## 📞 Configuração de Contato

Atualize as informações de contato nos arquivos:
- `src/components/Header.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

Substitua:
- Telefones: `+5511999999999`
- E-mail: `contato@autocenter.com`
- Endereço: `Rua das Flores, 123`
- WhatsApp: Links do wa.me

## 🚀 Deploy

### Netlify
1. Build: `npm run build`
2. Pasta: `build`

### Vercel
1. Conecte o repositório
2. Deploy automático

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 📈 Próximas Melhorias

- [ ] Sistema de administração (CMS)
- [ ] Integração com CRM
- [ ] Chat online
- [ ] Calculadora de financiamento
- [ ] Comparador de veículos
- [ ] Agendamento online de test drive
- [ ] Integração com redes sociais
- [ ] Sistema de avaliações

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -am 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:
- Email: suporte@autocenter.com
- WhatsApp: (11) 99999-9999

---

**Desenvolvido com ❤️ para AutoCenter Concessionária**