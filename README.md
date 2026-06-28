# O Caso da Última Chamada — Landing Page

Página de vendas (React + Vite) do dossiê criminal **O Caso da Última Chamada**.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (geralmente http://localhost:5173).

Para gerar a versão final (pasta `dist/`, pronta para hospedar):

```bash
npm run build
npm run preview   # opcional: testar o build localmente
```

## O que editar

Tudo fica em `src/LandingUltimaChamada.jsx`:

- **Preço:** procure por `R$ 11,99` (seção do CTA final).
- **Link de compra:** os botões "Receber o dossiê" usam `href="#receber"`.
  Troque pelo link do seu checkout (Hotmart, Kiwify, etc.).
- **Redes sociais:** no rodapé, os links de Instagram / TikTok / WhatsApp
  estão como `href="#"` — coloque seus perfis.
- **Textos e depoimentos:** os arrays `EVIDENCIAS`, `PASSOS`, `DEPOIMENTOS`
  e `FAQ` no topo do arquivo.

Os depoimentos são fictícios e anônimos de propósito; troque pelos reais
quando tiver.
# ultima-chamada
