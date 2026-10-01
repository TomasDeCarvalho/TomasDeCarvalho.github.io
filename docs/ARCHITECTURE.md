# Architecture — Tomás de Carvalho

- Tipo: site estático multipágina, HTML semântico + CSS + JS vanilla mínimo (só menu mobile), zero framework, zero build, zero analytics, zero cookies.
- Páginas: `/` (hero, vitrine, hub, bancada, blog, categorias, sobre-resumo), `/produtos/`, `/bancada/`, `/blog/`, `/links/`, `/sobre/`; slugs individuais futuros (`/produtos/<slug>/`, `/bancada/<slug>/`, `/blog/<slug>/`).
- Estilos: `assets/styles.css` (design system B); JS: `assets/site.js`; favicon: `assets/favicon.svg`; arte e placeholders: SVG/CSS próprios.
- Conteúdo desacoplado: `content/site.json`, `content/products.json`, `content/projects.json`, `content/posts.json`, `content/links.json` (arrays vazios = estado honesto; `content/catalog.json` removido por supersessão em `CUSTOM_SITE_BANCADA_V1`).
- Metadata: canonical `https://tomasdecarvalho.github.io/` e Open Graph básico descrevem a publicação provisória vigente (transitória, ver ADR-0002); `robots.txt`, `sitemap.xml`.
- Config operacional privada: `.local/` (gitignored) + mapa central `~/.config/familia-digital/account-map.json`.
- Remoto: `origin` → `git@github-tomas:TomasDeCarvalho/TomasDeCarvalho.github.io.git` (SSH exclusiva).
- Publicação provisória (transitória, não canônica): GitHub Pages do repo `<user>.github.io`, mantido no ar até hospedagem substituta validada; destino: hosting independente + domínio próprio `tomasdecarvalho.com` (ver ADR-0002 e SPEC-0002).
- Isolamento: repo, remote, SSH, Chrome profile e Google próprios; nada compartilhado com irmãos.

## Independência e referência metodológica (canônico)

- Owner independente: o projeto reside fisicamente em `/home/andre/tomas-de-carvalho` e NÃO pertence arquiteturalmente ao ecossistema iLúmino. NÃO deve ser movido para `/home/andre/ilumino-workspace/repositories/`.
- `ilumino-workspace` é referência metodológica, não parent workspace: deste projeto adotam-se, de forma proporcional ao estágio, documentação viva, `AGENTS.md`, `PROJECT_STATE.md`, SPEC/ADR para decisões materiais, owner e `write_scope` explícitos, separação fato/hipótese/decisão, gates `PREWRITE`/`PRECOMMIT`/`PREPUSH`/`CLOSEOUT`, validação por evidência, preservação de ancestry Git, política rigorosa de segredos, `economic-fit-first` e mudanças pequenas, verificáveis e reversíveis. Nada disso cria acoplamento.
- Ausência de dependência runtime/build: nenhum runtime, build, symlink de governança, ownership Git compartilhado, backlog ou segredo compartilhado, sincronização automática ou residência na árvore iLúmino. O site continua estático (HTML + CSS, zero framework, zero build).
- Workspace próprio de Tomás: `/home/andre/tomas-de-carvalho` com `write_scope` restrito a ele.
- GitHub Personal Account própria: `TomasDeCarvalho`, repo alvo `TomasDeCarvalho/TomasDeCarvalho.github.io`.
- Sem Organization, sem repositório central familiar, sem quarto projeto de governança, sem dependência compartilhada com Aurora ou Matias.
- Decisão registrada em `docs/adr/ADR-0001-independencia-e-referencia-metodologica.md`.

## Hospedagem independente (canônico, ver ADR-0002 e SPEC-0002)

- `GITHUB != PRODUCTION_HOSTING`: GitHub (`TomasDeCarvalho`) é remote versionado, backup remoto, continuidade e prova histórica — não plataforma canônica de hospedagem.
- `GITHUB_PAGES != CANONICAL_PUBLIC_ENDPOINT`: o Pages publicado é prova técnica transitória; não orienta arquitetura futura; desativação só após produção independente comprovada + decisão humana explícita; sem downtime deliberado.
- `HOSTING = REPLACEABLE_DEPLOYMENT_INFRASTRUCTURE`: hospedagem de produção independente, substituível, artefatos estáticos portáteis (sem lock-in), pronta para `tomasdecarvalho.com` sem redesign estrutural; deploy desacoplado (CLI/upload direto sempre possível, sem GitHub obrigatório).
- Domínio futuro `tomasdecarvalho.com`: endpoint soberano, ainda não comprado; arquitetura já pronta para adotá-lo.
- Sem backend/CMS/framework/analytics: nenhuma necessidade atual comprovada.
