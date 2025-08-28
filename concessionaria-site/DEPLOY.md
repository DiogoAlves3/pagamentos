# 🚀 Guia de Deploy - Site da Concessionária

## 📋 Pré-requisitos

- Node.js 16+ instalado
- Conta no serviço de hosting escolhido
- Repositório Git configurado

## 🔧 Build do Projeto

```bash
# Instalar dependências
npm install

# Build para produção
npm run build
```

O build será criado na pasta `build/` com os arquivos otimizados.

## 🌐 Opções de Deploy

### 1. Netlify (Recomendado)

1. **Conecte seu repositório:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Conecte com GitHub/GitLab/Bitbucket

2. **Configure o build:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `16` (ou superior)

3. **Deploy automático:**
   - A cada push para a branch principal, o site será atualizado automaticamente

### 2. Vercel

1. **Importe o projeto:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe do GitHub

2. **Configuração automática:**
   - Vercel detecta automaticamente que é um projeto React
   - Deploy automático configurado

### 3. GitHub Pages

1. **Instale o pacote:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Configure package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     },
     "homepage": "https://seuusuario.github.io/seurepositorio"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting

1. **Instale Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Configure o projeto:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json:**
   ```json
   {
     "hosting": {
       "public": "build",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy:**
   ```bash
   firebase deploy
   ```

## 🔒 Configurações de Segurança

### HTTPS
- Todos os serviços modernos oferecem HTTPS por padrão
- Configure redirecionamento automático de HTTP para HTTPS

### Headers de Segurança
```bash
# Adicione ao seu servidor web ou CDN:
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 📱 Configurações de Performance

### Compressão Gzip
- Netlify, Vercel e Firebase já incluem compressão automática
- Para outros servidores, configure compressão Gzip

### Cache de Assets
```bash
# Configure headers para arquivos estáticos:
Cache-Control: public, max-age=31536000, immutable
```

## 🔍 SEO e Analytics

### Google Analytics
1. Crie uma conta no [Google Analytics](https://analytics.google.com)
2. Adicione o código de rastreamento no `public/index.html`

### Google Search Console
1. Verifique a propriedade no [Search Console](https://search.google.com/search-console)
2. Adicione o sitemap após o deploy

### Meta Tags
- As meta tags já estão configuradas no projeto
- Personalize conforme necessário

## 📧 Integrações

### Formulário de Contato
- **Formspree:** Configure no `ContactSection.tsx`
- **Netlify Forms:** Funciona automaticamente no Netlify
- **Backend próprio:** Atualize a função `handleSubmit`

### WhatsApp
- Atualize o número no arquivo `.env`
- Ou modifique diretamente nos componentes

### Google Maps
- Obtenha uma API key no [Google Cloud Console](https://console.cloud.google.com)
- Substitua o placeholder no `ContactSection.tsx`

## 🚨 Troubleshooting

### Erro de Build
```bash
# Limpe o cache:
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problemas de Roteamento
- Configure redirecionamento para `index.html` em rotas SPA
- Adicione arquivo `_redirects` para Netlify:
  ```
  /*    /index.html   200
  ```

### Performance Lenta
- Verifique o tamanho das imagens
- Use formatos modernos (WebP, AVIF)
- Implemente lazy loading para imagens

## 📊 Monitoramento

### Uptime
- Configure alertas de downtime
- Use serviços como UptimeRobot ou Pingdom

### Performance
- Teste regularmente no [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitore métricas Core Web Vitals

## 🔄 Atualizações

### Deploy Automático
- Configure webhooks para deploy automático
- Use GitHub Actions para CI/CD

### Rollback
- Mantenha versões anteriores para rollback rápido
- Use tags Git para marcar releases

---

**🎯 Dica:** Comece com Netlify ou Vercel para deploy rápido e fácil!