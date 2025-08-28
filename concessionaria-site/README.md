# 🚗 Site da Concessionária

Um site moderno, responsivo e profissional para uma concessionária de carros, desenvolvido com React e TailwindCSS.

## ✨ Características

- **Design Moderno**: Interface limpa e sofisticada com paleta de cores preto, cinza e vermelho
- **Totalmente Responsivo**: Mobile-first design que funciona perfeitamente em todos os dispositivos
- **SEO Otimizado**: Meta tags, structured data e otimizações para motores de busca
- **Componentes Reutilizáveis**: Arquitetura modular e bem estruturada
- **Animações Suaves**: Transições e hover effects para melhor experiência do usuário
- **Formulário Funcional**: Sistema de contato integrado com validação

## 🎯 Seções do Site

1. **Header Fixo** - Logo, navegação e botões de contato
2. **Hero Section** - Imagem de destaque com chamada principal
3. **Catálogo de Veículos** - Grid responsivo com filtros avançados
4. **Ofertas Especiais** - Carrossel de promoções da semana
5. **Sobre a Concessionária** - Informações institucionais e valores
6. **Serviços** - Financiamento, troca, manutenção e garantia
7. **Depoimentos** - Avaliações de clientes com carrossel
8. **FAQ** - Dúvidas frequentes organizadas por categoria
9. **Contato** - Formulário funcional e informações de contato
10. **Footer** - Links rápidos, redes sociais e newsletter

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **TailwindCSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e leves
- **Responsive Design** - Mobile-first approach

## 📱 Responsividade

- **Mobile**: Otimizado para dispositivos móveis
- **Tablet**: Layout adaptativo para tablets
- **Desktop**: Experiência completa para desktop
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🎨 Paleta de Cores

- **Primária**: Vermelho (#dc2626) - Esportividade e confiança
- **Escura**: Tons de cinza (#0f172a a #f8fafc) - Sofisticação
- **Acentos**: Verde para sucesso, azul para informações

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 16+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd concessionaria-site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

### Scripts Disponíveis

- `npm start` - Executa o app em modo desenvolvimento
- `npm run build` - Constrói o app para produção
- `npm test` - Executa os testes
- `npm run eject` - Ejeita a configuração (irreversível)

## 🏗️ Estrutura do Projeto

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

## 🔧 Configuração

### TailwindCSS

O projeto está configurado com TailwindCSS personalizado:

- Cores customizadas para a marca
- Tipografia personalizada (Inter + Poins)
- Animações e transições customizadas
- Componentes utilitários reutilizáveis

### SEO

- Meta tags otimizadas
- Structured data (JSON-LD)
- Open Graph para redes sociais
- URLs canônicas
- Sitemap ready

## 📱 Funcionalidades Principais

### Catálogo de Veículos
- Filtros por marca, modelo, ano e preço
- Busca em tempo real
- Cards responsivos com hover effects
- Informações detalhadas dos veículos

### Formulário de Contato
- Validação de campos obrigatórios
- Seleção de assunto e veículo de interesse
- Forma de contato preferida
- Feedback visual de envio

### Ofertas Especiais
- Carrossel automático
- Navegação manual
- Indicadores visuais
- Informações detalhadas das promoções

## 🎯 Personalização

### Cores
Edite `tailwind.config.js` para alterar a paleta de cores:

```javascript
colors: {
  primary: {
    500: '#dc2626', // Cor principal
    // ... outros tons
  }
}
```

### Conteúdo
- Atualize os dados mock nos componentes
- Modifique textos e descrições
- Adicione/remova seções conforme necessário

### Imagens
- Substitua URLs das imagens por suas próprias
- Otimize imagens para web (WebP recomendado)
- Mantenha proporções adequadas

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Servidores Recomendados
- **Vercel**: Deploy automático com GitHub
- **Netlify**: Deploy com drag & drop
- **AWS S3**: Hospedagem estática
- **GitHub Pages**: Deploy gratuito

## 📊 Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **Bundle Size**: Minimizado com code splitting
- **Images**: Lazy loading implementado

## 🔒 Segurança

- Validação de formulários no cliente
- Sanitização de inputs
- HTTPS obrigatório em produção
- Headers de segurança configurados

## 📈 Analytics e Monitoramento

### Google Analytics
Adicione seu ID do GA no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Meta Pixel (Facebook)
Configure o pixel para remarketing:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte ou dúvidas:
- Email: suporte@concessionaria.com.br
- WhatsApp: (11) 99999-9999
- Horário: Seg-Sex 8h às 18h

## 🙏 Agradecimentos

- [React](https://reactjs.org/) - Biblioteca JavaScript
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [Lucide](https://lucide.dev/) - Ícones
- [Unsplash](https://unsplash.com/) - Imagens de exemplo

---

**Desenvolvido com ❤️ para a Concessionária**
