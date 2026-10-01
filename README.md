# Tomás de Carvalho — Identidade digital independente

Publicação provisória (transitória, não canônica): `https://tomasdecarvalho.github.io/`
Domínio soberano futuro: `tomasdecarvalho.com` (sem compra nesta fase).
GitHub (versionamento/backup, não hospedagem canônica): `TomasDeCarvalho/TomasDeCarvalho.github.io` · SSH: `github-tomas`.
Destino: hosting independente e substituível (ver `docs/adr/ADR-0002-hosting-independente-e-transicao.md`).

## Princípios
Método antes de vitrine; evidência antes de adjetivo; privacidade por padrão;
custódia adulta transparente; site como fonte canônica.

## Estrutura
- `index.html` — Início, Projetos, Ideias, Produtos, Sobre, Contato, Links
- `assets/styles.css` — design system B (bancada/oficina)
- `assets/favicon.svg` — favicon “T” geométrico
- `content/catalog.json` — catálogo editorial
- `docs/IDENTITY.md` · `docs/ROADMAP.md` · `docs/PRIVACY-AND-SAFETY.md` · `docs/ARCHITECTURE.md`
- `.local/` — config operacional privada (gitignored, sem segredos)

## Diretriz canônica
Owner independente em `/home/andre/tomas-de-carvalho`. `ilumino-workspace` é referência metodológica, não parent workspace: sem dependência runtime/build, sem symlink de governança, sem ownership Git compartilhado, sem backlog ou segredo compartilhado, sem sincronização automática. Este projeto NÃO pertence ao ecossistema iLúmino e NÃO deve ser movido para `/home/andre/ilumino-workspace/repositories/`. Sem Organization, repo central familiar ou dependência com Aurora/Matias. Decisão: `docs/adr/ADR-0001-independencia-e-referencia-metodologica.md`.

## Operação
Autoria: operador adulto (repo-local). Remote `origin` via SSH exclusiva.
Sem analytics, sem tracking, sem checkout. Contato supervisionado.
`write_scope` de missões neste projeto: `["/home/andre/tomas-de-carvalho"]`.

## Documentos
`AGENTS.md` · `PROJECT_STATE.md` · `docs/ARCHITECTURE.md` · `docs/IDENTITY.md` · `docs/ROADMAP.md` · `docs/PRIVACY-AND-SAFETY.md` · `docs/adr/`
