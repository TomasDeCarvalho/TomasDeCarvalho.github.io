# Estado atual — Tomás de Carvalho

Atualizado: 2026-09-30
Status: `IDENTIDADE-V1 / SITE-ESTATICO-V1 / DIRETRIZ-CANONICA-REGISTRADA`

## Objetivo atual

Manter a identidade digital independente de Tomás de Carvalho com site estático canônico e disciplina documental proporcional ao estágio.

## Estado atual

- Site estático v1 no ar como fonte: `index.html` + `assets/` + `content/catalog.json`, zero framework, zero build, zero analytics.
- Diretriz canônica vigente: owner independente em `/home/andre/tomas-de-carvalho`; `ilumino-workspace` como referência metodológica, sem acoplamento (ver ADR-0001).
- Remote `origin` via SSH exclusiva `github-tomas` para `TomasDeCarvalho/TomasDeCarvalho.github.io`; branch `main`; sem upstream configurado; sem push realizado nesta missão salvo autorização.
- `.local/` operacional e gitignored; nenhum segredo versionado.

## Baseline

- Branch `main` · HEAD inicial da missão `7723d31` (`feat: establish independent digital identity`).

## Spec/ADR ativa

- [ADR-0001](docs/adr/ADR-0001-independencia-e-referencia-metodologica.md) — independência e referência metodológica (canônica).
- [SPEC-0001](docs/SPEC-0001-digital-identity-foundation.md) — fundação de identidade digital.

## Pendências priorizadas

- Publicação inicial (push/Pages): somente quando autenticação/SSH/remoto estiverem prontos, em missão própria.
- Próximo conteúdo real: primeiro experimento da bancada (Fase 1 do roadmap).

## Próximo passo

Concluir e commitar localmente esta missão documental; depois validar push em missão separada se autorizado.

## Blockers / decisões abertas

- Nenhum blocker técnico para o commit local. Push segue bloqueado por regra da missão se exigir autenticação, criação de repo, cadastro SSH ou intervenção humana.

## Referências

- [ARCHITECTURE](docs/ARCHITECTURE.md) · [IDENTITY](docs/IDENTITY.md) · [ROADMAP](docs/ROADMAP.md) · [PRIVACY-AND-SAFETY](docs/PRIVACY-AND-SAFETY.md)
