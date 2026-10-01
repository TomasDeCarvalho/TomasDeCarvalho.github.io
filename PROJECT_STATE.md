# Estado atual — Tomás de Carvalho

Atualizado: 2026-10-01
Status: `IDENTIDADE-V1 / SITE-PUBLICADO / PAGES-LIVE`

## Objetivo atual

Manter a identidade digital independente de Tomás de Carvalho com site estático canônico e disciplina documental proporcional ao estágio.

## Estado atual

- Site estático v1 no ar como fonte: `index.html` + `assets/` + `content/catalog.json`, zero framework, zero build, zero analytics.
- Diretriz canônica vigente: owner independente em `/home/andre/tomas-de-carvalho`; `ilumino-workspace` como referência metodológica, sem acoplamento (ver ADR-0001).
- Site publicado em `https://tomasdecarvalho.github.io/` (HTTP 200, conteúdo canônico); repo `TomasDeCarvalho/TomasDeCarvalho.github.io` (PUBLIC, Personal Account, sem init); chave SSH `tomas-github` (`SHA256:zEShGSH6eCclbjNjxX1w+6vJ+wAXF89QYqRe1Z3Det8`); `main` com upstream `origin/main`, `local HEAD == origin/main` (`9fc992a` no push inicial).
- Remote `origin` via SSH exclusiva `github-tomas`; branch `main` com upstream configurado.
- `.local/` operacional e gitignored; nenhum segredo versionado.

## Baseline

- Branch `main` · HEAD inicial da missão `7723d31` (`feat: establish independent digital identity`).

## Spec/ADR ativa

- [ADR-0001](docs/adr/ADR-0001-independencia-e-referencia-metodologica.md) — independência e referência metodológica (canônica).
- [SPEC-0001](docs/SPEC-0001-digital-identity-foundation.md) — fundação de identidade digital.

## Pendências priorizadas

- Próximo conteúdo real: primeiro experimento da bancada (Fase 1 do roadmap).

## Próximo passo

Primeiro experimento da bancada (Fase 1 do roadmap), em missão própria.

## Blockers / decisões abertas

- Nenhum blocker técnico. Pendência não bloqueante: `HUMAN_ACTION_REQUIRED_SECURE_SSH_STORAGE` (hardening de custódia da chave, missão posterior).

## Referências

- [ARCHITECTURE](docs/ARCHITECTURE.md) · [IDENTITY](docs/IDENTITY.md) · [ROADMAP](docs/ROADMAP.md) · [PRIVACY-AND-SAFETY](docs/PRIVACY-AND-SAFETY.md)
