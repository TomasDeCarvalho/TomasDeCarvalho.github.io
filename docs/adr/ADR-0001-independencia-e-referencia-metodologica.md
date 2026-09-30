# ADR-0001 — Owner independente; iLúmino como referência metodológica

- Data: 2026-09-30
- Estado: aceita
- Owner: `/home/andre/tomas-de-carvalho`
- `write_scope`: `["/home/andre/tomas-de-carvalho"]`

## Contexto

O projeto de Tomás de Carvalho amadureceu até identidade digital independente
com site estático v1 (SPEC-0001). Era preciso formalizar documentalmente a
posição do projeto frente ao `ilumino-workspace`: adotar sua maturidade
documental/metodológica sem criar pertencimento arquitetural, dependência ou
governança compartilhada.

Fato: o projeto reside em `/home/andre/tomas-de-carvalho`, com repo, remote
SSH (`github-tomas`), Chrome profile e Google próprios, e nada compartilhado
com irmãos. Hipótese rejeitada: que proximidade metodológica implicasse
residência na árvore iLúmino. Decisão abaixo.

## Decisão

1. `tomas-de-carvalho` é owner independente. Workspace canônico:
   `/home/andre/tomas-de-carvalho`; identidade `Tomás de Carvalho Fernandes`;
   nome público `Tomás de Carvalho`; GitHub Personal Account `TomasDeCarvalho`;
   repo alvo `TomasDeCarvalho/TomasDeCarvalho.github.io`.
2. `ilumino-workspace` é referência metodológica, não parent workspace.
   Adotam-se localmente, de forma proporcional ao estágio: documentação viva;
   `AGENTS.md`; `PROJECT_STATE.md`; SPEC/ADR para decisões materiais; owner e
   `write_scope` explícitos; separação fato/hipótese/decisão; gates `PREWRITE`,
   `PRECOMMIT`, `PREPUSH`, `CLOSEOUT`; validação por evidência; preservação de
   ancestry Git; política rigorosa de segredos; `economic-fit-first`; mudanças
   pequenas, verificáveis e reversíveis.
3. Nenhum acoplamento: nenhum runtime/build depende de `ilumino-workspace`;
   nenhum symlink de governança; nenhum ownership Git compartilhado; nenhum
   backlog ou segredo compartilhado; nenhuma sincronização automática; nenhuma
   necessidade de residir na árvore iLúmino.

## Alternativas consideradas e rejeitadas

- A1 — Colocar o projeto em `/home/andre/ilumino-workspace/repositories/`.
  Rejeitada: converteria referência metodológica em pertencimento
  arquitetural, sugeriria ownership compartilhado e criaria expectativa de
  sincronização/governança comum. Incompatível com owner independente.
- A2 — Criar Organization, repositório central familiar ou quarto projeto de
  governança para Tomás. Rejeitada: introduz superfície institucional sem
  necessidade comprovada e viola `economic-fit-first` e mudanças mínimas.
- A3 — Dependência compartilhada com Aurora/Matias (backlog, segredos,
  ownership). Rejeitada: viola isolamento por criança (SPEC-0001, invariantes
  2–3) e a regra de não misturar projetos de irmãos.
- A4 — Não formalizar (manter posição implícita). Rejeitada: ambiguidade
  convida futura anexação à árvore iLúmino e falsas associações
  arquiteturais.

## Consequências

- `docs/ARCHITECTURE.md` registra a independência física e de ownership e a
  ausência de dependência runtime/build; `README.md`, `AGENTS.md`,
  `PROJECT_STATE.md` e `docs/IDENTITY.md` alinham a mesma diretriz.
- O site permanece estático (HTML + CSS, zero framework, zero build, zero
  analytics); nenhuma infraestrutura nova nesta decisão.
- Futuras decisões materiais de stack/superfície seguem `economic-fit-first`
  com decisão humana terminal.

## Validação

- Consistência entre README, site, `content/catalog.json` e docs; nenhuma
  mistura com Aurora/Matias; nenhuma falsa associação arquitetural com
  iLúmino; nenhum segredo/PII operacional versionado; `git diff --check`
  limpo; diff integral revisado; commit local atômico com ancestry preservada.

## Limites

- Esta ADR não cria Organization, repo, backend, CMS, analytics, domínio,
  credencial, SSH, remote ou Pages; não autoriza push, publicação ou qualquer
  operação destrutiva; não altera contas ou infraestrutura.
