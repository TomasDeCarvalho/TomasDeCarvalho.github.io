# Estado atual — Tomás de Carvalho

Atualizado: 2026-10-01
Status: `BANCADA-V1 / PAGES-TRANSITORIO / HOSTING-DEFERRED`

## Objetivo atual

Site personalizado Bancada v1 construído (`CUSTOM_SITE_BANCADA_V1`): produto próprio, portátil e hosting-agnostic, com vitrine sem checkout, bancada/blog/hub estruturais e estados honestos — sem conteúdo real inventado.

## Estado atual

- Site Bancada v1: homepage acabada + 5 páginas estáticas (`/produtos/`, `/bancada/`, `/blog/`, `/links/`, `/sobre/`); HTML semântico + CSS design system B + JS vanilla só p/ menu mobile; zero framework/build/analytics/tracking/cookies; página mais pesada 21,6 KB, zero requisições externas.
- Conteúdo desacoplado: `content/site.json`, `products.json`, `projects.json`, `posts.json`, `links.json` (vazios/honestos; `catalog.json` removido por supersessão); canais reais só GitHub, demais inativos sem URL falsa.
- Comércio = vitrine/arquitetura de catálogo; checkout/pagamento/estoque/backend fora de escopo. Blog estrutural, 0 artigos. Contato supervisionado sem e-mail publicado.
- Doutrina vigente (ADR-0002 + SPEC-0002): GitHub = versionamento/backup; Pages = transitório (segue no ar, sem downtime deliberado); hosting definitivo = `DEFERRED`; domínio `tomasdecarvalho.com` não comprado.
- Remote `origin` via SSH exclusiva `github-tomas`; branch `main` com upstream configurado.
- `.local/` operacional e gitignored; nenhum segredo versionado.

## Baseline

- Branch `main` · HEAD inicial da missão `df4e873` (`docs: hosting foundation — GitHub as versioning, Pages as transitory`).

## Spec/ADR ativa

- [ADR-0001](docs/adr/ADR-0001-independencia-e-referencia-metodologica.md) — independência e referência metodológica (canônica).
- [ADR-0002](docs/adr/ADR-0002-hosting-independente-e-transicao.md) — GitHub como versionamento; hospedagem independente como destino (seleção N vs C pendente).
- [SPEC-0001](docs/SPEC-0001-digital-identity-foundation.md) — fundação de identidade digital.
- [SPEC-0002](docs/SPEC-0002-fundacao-hospedagem-independente.md) — fundação de hospedagem independente.
- [SPEC-0003](docs/SPEC-0003-site-bancada-v1.md) — site personalizado Bancada v1 (ativa; produto).

## Pendências priorizadas

- `HUMAN_DECISION_REQUIRED_HOSTING_N_VS_C`: Netlify Free vs Cloudflare Pages Free (ADR-0002).
- Próximo conteúdo real: entrada 001 da Bancada (Fase 1), primeiro produto real, primeiros canais.
- Não bloqueante: `HUMAN_ACTION_REQUIRED_SECURE_SSH_STORAGE`.

## Próximo passo

Conteúdo real (Fase 1) + decisão de hospedagem/comércio em missões próprias. Próxima missão mínima: registrar a entrada 001 da Bancada.

## Blockers / decisões abertas

- Nenhum blocker técnico. Decisão humana aberta: hosting N vs C.

## Referências

- [ARCHITECTURE](docs/ARCHITECTURE.md) · [IDENTITY](docs/IDENTITY.md) · [ROADMAP](docs/ROADMAP.md) · [PRIVACY-AND-SAFETY](docs/PRIVACY-AND-SAFETY.md)
