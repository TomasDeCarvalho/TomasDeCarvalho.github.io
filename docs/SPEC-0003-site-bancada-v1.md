# SPEC-0003 — Site personalizado Bancada v1 (produto)

Status: ATIVA · Missão `CUSTOM_SITE_BANCADA_V1` · 2026-10-01.
Herda: SPEC-0001 (identidade, invariantes 1–10), SPEC-0002 (papéis de
hospedagem; hosting = `DEFERRED` nesta missão), ADR-0001, ADR-0002.
Referência visual: painel de conceito aprovado pelo humano
(read-only, fora do `write_scope`): direção e composição, não cópia.
Sem nova ADR: nenhuma decisão arquitetural material nova (stack,
hospedagem e custódia seguem ADR-0001/ADR-0002).

## 1. Objetivo

Primeira versão real, substancial e personalizada do site de Tomás:
vitrine comercial (sem checkout), Bancada, hub de presença digital e
blog — como produto próprio, portátil e hosting-agnostic, capaz de
crescer por anos sem reconstrução. Princípio:
`criar → experimentar → aprender → explicar → oferecer`.

## 2. Funções (quatro, igualmente legítimas)

1. Vitrine: apresentar produtos em geral (não só oficina); categorias
   vindas dos dados; produto individual futuro (`/produtos/<slug>/`).
   Nesta fase: arquitetura de catálogo + estados honestos; sem
   checkout/pagamento/estoque real.
2. Bancada: projetos/experimentos/ideias com status (`IDEIA`,
   `EM TESTE`, `EM CONSTRUÇÃO`, `PUBLICADO`); item futuro com
   título/resumo/tipo/status/objetivo/versão/data real/próximo
   passo/imagem opcional/link opcional (`/bancada/<slug>/`).
3. Hub: ponto central para mídias/canais; só renderiza link real
   existente; canal ausente fica fora ou inativo nos dados, sem URL
   falsa. Real hoje: GitHub.
4. Blog: arquitetura (destaques, cards, data, categoria, resumo,
   leitura individual futura `/blog/<slug>/`); sem artigos
   inventados — estado inicial honesto.

## 3. Arquitetura de informação (multipágina estática)

`/` (hero, destaques, hub, bancada, blog, categorias, sobre-resumo),
`/produtos/`, `/bancada/`, `/blog/`, `/links/`, `/sobre/` (com bloco
de contato supervisionado, sem e-mail publicado). URLs normais,
estáveis, server-agnostic, sem SPA. Sem carrinho (sem arquitetura
comercial que o justifique) e sem busca (sem busca útil real).

## 4. Modelo de conteúdo (`content/`)

`site.json` (marca, base provisória, domínio futuro), `products.json`,
`projects.json`, `posts.json`, `links.json` — arrays versionáveis,
sem banco/CMS/API/segredo; item ausente = array vazio + empty state
elegante no HTML; exemplo estrutural só se inequivocamente marcado
como tal (V1: nenhum item real, nenhum exemplo fantasiado de fato).
Categorias derivadas dos dados; evoluem sem reconstrução.

## 5. Comportamento responsivo

Breakpoints: mobile ≤600px (menu hamburger real), tablet ~768px,
desktop ~1366px, amplo ~1920px. Viewports de prova: 320×568,
360×800, 390×844, 412×915, 768, 1366, 1920. Zero overflow
horizontal; CTA acessível; grid adaptativo; nada dependente de hover;
touch targets ≥44px.

## 6. Design system (conceito Bancada/oficina contemporânea)

Tokens vigentes (`--bg #f1f5f9`, `--ink #0f172a`, `--accent #0369a1`,
`--line #cbd5e1`, cantos retos, system-ui + ui-monospace) estendidos
com: status com rótulo textual (nunca só cor), cards, grids,
empty states, navegação desktop/mobile, botões, foco visível.
Hero com arte SVG própria (oficina geométrica original, tema escuro);
placeholders gráficos próprios (SVG/CSS neutros). Nada de terceiros.

## 7. Copy honesta (fatos vs estrutura)

Hero: `Uma bancada para criar, mostrar e oferecer.` ("oferecer"
cobre vitrine atual + venda futura; "vender" prometeria o que não
existe). Voz neutra/institucional; sem primeira pessoa em afirmações
materiais; sem biografia inventada; sem produtos/preços/estoque/
avaliações/projetos/artigos/URLs/audiência inventados. Sobre explica
o propósito do espaço, não biografia pessoal.

## 8. Privacidade/acessibilidade/performance/SEO

Privacidade: invariantes SPEC-0001 + lista proibida vigente; zero
analytics/tracking/cookies/comentários/coleta. Acessibilidade:
landmarks, headings, skip link, foco visível, teclado completo,
contraste, `prefers-reduced-motion`, alt apropriado, sem ARIA
desnecessária. Performance (orçamento): cada página <150 KB total,
CSS <25 KB, JS <5 KB, zero requisições externas, fontes de sistema.
SEO: title/description/OG por página; canonical absoluto para a base
provisória com comentário `CANONICAL-BASE` + troca trivial
documentada (soberano futuro); `sitemap.xml` com as 6 páginas;
`robots.txt` liberando + sitemap; favicon existente.

## 9. Portabilidade

HTML+CSS+JS-vanilla (só menu mobile + melhorias), sem framework/build,
sem Node/Python/JVM em produção; serve em Nginx/Apache/Caddy, VPS,
object hosting, CDN/static hosting. Sem dependência de provedor;
GitHub = remote/backup; Pages = transitório (fora do critério PASS).

## 10. Critérios de aceite V1

Homepage acabada (header/nav, hero, vitrine, hub, bancada, blog,
categorias, sobre-resumo, footer); 6 páginas navegáveis; menu mobile
real; empty states honestos; dados JSON válidos; viewports sem
overflow; teclado + foco + reduced-motion; console sem erros;
screenshots desktop+mobile comparados à referência; leve dentro do
orçamento; docs coerentes; Git íntegro com push fast-forward.
