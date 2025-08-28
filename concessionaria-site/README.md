# 🚗 Site da Concessionária

Um site moderno, responsivo e profissional para concessionária de carros, desenvolvido com React e TailwindCSS.

## ✨ Características

- **Design Moderno**: Interface limpa e sofisticada com paleta de cores preto, cinza e vermelho
- **Totalmente Responsivo**: Otimizado para todos os dispositivos (mobile-first)
- **Componentes Reutilizáveis**: Estrutura modular e organizada
- **Animações Suaves**: Transições e hover effects para melhor experiência do usuário
- **SEO Friendly**: Meta tags e estrutura semântica otimizada
- **Formulário Funcional**: Sistema de contato integrado
- **Carrosséis Interativos**: Ofertas especiais e depoimentos com navegação

## 🎯 Seções do Site

1. **Header Fixo** - Logo, navegação e botão WhatsApp
2. **Hero Section** - Imagem de fundo com chamada de impacto
3. **Catálogo de Veículos** - Grid com filtros avançados
4. **Ofertas Especiais** - Carrossel de promoções
5. **Sobre a Concessionária** - Informações institucionais
6. **Serviços** - Financiamento, troca, manutenção e garantia
7. **Depoimentos** - Avaliações de clientes
8. **FAQ** - Dúvidas frequentes organizadas por categoria
9. **Contato** - Formulário e informações de contato
10. **Footer** - Links rápidos e redes sociais

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade entre navegadores

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js 16+ 
- npm ou yarn

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd concessionaria-site
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto

```bash
npm start
```

O site estará disponível em `http://localhost:3000`

### 4. Build para produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho fixo
│   ├── HeroSection.tsx # Seção principal
│   ├── VehicleCatalog.tsx # Catálogo de veículos
│   ├── SpecialOffers.tsx  # Ofertas especiais
│   ├── AboutSection.tsx   # Sobre a empresa
│   ├── ServicesSection.tsx # Serviços oferecidos
│   ├── TestimonialsSection.tsx # Depoimentos
│   ├── FAQSection.tsx      # Dúvidas frequentes
│   ├── ContactSection.tsx  # Formulário de contato
│   └── Footer.tsx          # Rodapé
├── App.tsx              # Componente principal
├── index.tsx            # Ponto de entrada
└── index.css            # Estilos globais e TailwindCSS
```

## 🎨 Personalização

### Cores

As cores principais estão definidas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#fef2f2',
    500: '#ef4444',  // Vermelho principal
    600: '#dc2626',
    700: '#b91c1c',
  },
  dark: {
    900: '#0f172a',  // Preto principal
    800: '#1e293b',
    700: '#334155',
  }
}
```

### Imagens

- Substitua as URLs das imagens nos componentes por suas próprias imagens
- Recomendado: use imagens otimizadas para web (formato WebP, tamanhos adequados)

### Conteúdo

- Atualize textos, preços e informações nos componentes
- Modifique dados de veículos no `VehicleCatalog.tsx`
- Ajuste ofertas especiais no `SpecialOffers.tsx`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Funcionalidades

### Formulário de Contato

- Validação de campos obrigatórios
- Simulação de envio (integre com seu backend)
- Estados de loading e sucesso

### Filtros de Veículos

- Busca por texto
- Filtros por marca, modelo, ano
- Faixa de preço
- Resultados em tempo real

### Carrosséis

- Navegação manual e automática
- Indicadores visuais
- Transições suaves

## 📧 Integração

### WhatsApp

Atualize o número no arquivo `Header.tsx`:

```typescript
href="https://wa.me/SEU_NUMERO_AQUI"
```

### Google Maps

Para integrar o mapa real:

1. Obtenha uma API key do Google Maps
2. Substitua o placeholder no `ContactSection.tsx`
3. Implemente o componente de mapa

### Formulário

Para tornar o formulário funcional:

1. Configure um backend (Node.js, PHP, etc.)
2. Ou use serviços como Formspree, Netlify Forms
3. Atualize a função `handleSubmit` no `ContactSection.tsx`

## 🚀 Deploy

### Netlify

1. Conecte seu repositório GitHub
2. Configure build command: `npm run build`
3. Publish directory: `build`

### Vercel

1. Importe o projeto
2. Framework preset: Create React App
3. Deploy automático

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Adicione no `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

## 📊 Performance

- **Lazy Loading**: Implemente para imagens pesadas
- **Code Splitting**: Separe componentes por rota
- **Image Optimization**: Use formatos modernos (WebP, AVIF)
- **Bundle Analysis**: `npm run build --analyze`

## 🔒 Segurança

- Valide inputs do formulário
- Implemente rate limiting
- Use HTTPS em produção
- Sanitize dados antes de exibir

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:

- Email: contato@concessionaria.com
- WhatsApp: (11) 99999-9999

---

**Desenvolvido com ❤️ para a melhor experiência do cliente**
