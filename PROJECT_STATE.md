# Estado atual — Tomás de Carvalho

Atualizado: 2026-10-01
Status: `IDENTIDADE-V1 / PAGES-TRANSITORIO / HOSTING-FOUNDATION-PARTIAL`

## Objetivo atual

Manter a identidade digital independente de Tomás de Carvalho com site estático e disciplina documental proporcional ao estágio, agora com arquitetura corrigida: GitHub como versionamento/backup, Pages como publicação transitória, hosting independente como destino.

## Estado atual

- Site estático v1 preservado: `index.html` + `assets/` + `content/catalog.json`, zero framework, zero build, zero analytics. Produto/site sem alteração material nesta missão.
- Diretriz canônica vigente: owner independente em `/home/andre/tomas-de-carvalho`; `ilumino-workspace` como referência metodológica, sem acoplamento (ver ADR-0001).
- Doutrina de hospedagem vigente (ver ADR-0002 + SPEC-0002): `GITHUB != PRODUCTION_HOSTING`; `GITHUB_PAGES != CANONICAL_PUBLIC_ENDPOINT`; `HOSTING = REPLACEABLE_DEPLOYMENT_INFRASTRUCTURE`; domínio soberano futuro `tomasdecarvalho.com` (não comprado).
- GitHub Pages segue publicado em `https://tomasdecarvalho.github.io/` (HTTP 200 em 2026-10-01) como prova técnica transitória; sem downtime deliberado; desativação só após produção independente + decisão humana explícita.
- Shortlist de hosting (gratuitos, suficientes, materialmente equivalentes): Netlify Free vs Cloudflare Pages Free. Vercel Hobby depriorizado (restrição não comercial vs futura Prateleira); VPS/infra reaproveitada rejeitada (superdimensionada).
- Remote `origin` via SSH exclusiva `github-tomas`; branch `main` com upstream configurado.
- `.local/` operacional e gitignored; nenhum segredo versionado.

## Baseline

- Branch `main` · HEAD inicial da missão `1ec8220` (`docs: mark initial sovereign publication (repo, SSH, Pages live)`).

## Spec/ADR ativa

- [ADR-0001](docs/adr/ADR-0001-independencia-e-referencia-metodologica.md) — independência e referência metodológica (canônica).
- [ADR-0002](docs/adr/ADR-0002-hosting-independente-e-transicao.md) — GitHub como versionamento; hospedagem independente como destino (fundação; seleção N vs C pendente).
- [SPEC-0001](docs/SPEC-0001-digital-identity-foundation.md) — fundação de identidade digital.
- [SPEC-0002](docs/SPEC-0002-fundacao-hospedagem-independente.md) — fundação de hospedagem independente (ativa; seleção pendente).

## Pendências priorizadas

- `HUMAN_DECISION_REQUIRED_HOSTING_N_VS_C`: escolher Netlify Free ou Cloudflare Pages Free antes da missão de deploy (alternativas, diferenças e boundaries em ADR-0002).
- Próximo conteúdo real: primeiro experimento da bancada (Fase 1 do roadmap), já orientado ao hosting escolhido.
- Não bloqueante: `HUMAN_ACTION_REQUIRED_SECURE_SSH_STORAGE` (hardening de custódia da chave, missão posterior).

## Próximo passo

Decisão humana N vs C; depois missão de site personalizado da Bancada com deploy independente no hosting escolhido.

## Blockers / decisões abertas

- Nenhum blocker técnico. Decisão humana aberta: hosting N vs C (não inventada nesta missão).

## Referências

- [ARCHITECTURE](docs/ARCHITECTURE.md) · [IDENTITY](docs/IDENTITY.md) · [ROADMAP](docs/ROADMAP.md) · [PRIVACY-AND-SAFETY](docs/PRIVACY-AND-SAFETY.md)
