# Architecture — Tomás de Carvalho

- Tipo: site estático, HTML + CSS, zero framework, zero build, zero analytics, zero cookies.
- Entrada: `index.html`; estilos: `assets/styles.css`; favicon: `assets/favicon.svg`.
- Catálogo editorial: `content/catalog.json`.
- Metadata: canonical `https://tomasdecarvalho.github.io/`, Open Graph básico, `robots.txt`, `sitemap.xml`.
- Config operacional privada: `.local/` (gitignored) + mapa central `~/.config/familia-digital/account-map.json`.
- Remoto: `origin` → `git@github-tomas:TomasDeCarvalho/TomasDeCarvalho.github.io.git` (SSH exclusiva).
- Hospedagem provisória: GitHub Pages do repo `<user>.github.io`; futura: domínio próprio.
- Isolamento: repo, remote, SSH, Chrome profile e Google próprios; nada compartilhado com irmãos.

## Independência e referência metodológica (canônico)

- Owner independente: o projeto reside fisicamente em `/home/andre/tomas-de-carvalho` e NÃO pertence arquiteturalmente ao ecossistema iLúmino. NÃO deve ser movido para `/home/andre/ilumino-workspace/repositories/`.
- `ilumino-workspace` é referência metodológica, não parent workspace: deste projeto adotam-se, de forma proporcional ao estágio, documentação viva, `AGENTS.md`, `PROJECT_STATE.md`, SPEC/ADR para decisões materiais, owner e `write_scope` explícitos, separação fato/hipótese/decisão, gates `PREWRITE`/`PRECOMMIT`/`PREPUSH`/`CLOSEOUT`, validação por evidência, preservação de ancestry Git, política rigorosa de segredos, `economic-fit-first` e mudanças pequenas, verificáveis e reversíveis. Nada disso cria acoplamento.
- Ausência de dependência runtime/build: nenhum runtime, build, symlink de governança, ownership Git compartilhado, backlog ou segredo compartilhado, sincronização automática ou residência na árvore iLúmino. O site continua estático (HTML + CSS, zero framework, zero build).
- Workspace próprio de Tomás: `/home/andre/tomas-de-carvalho` com `write_scope` restrito a ele.
- GitHub Personal Account própria: `TomasDeCarvalho`, repo alvo `TomasDeCarvalho/TomasDeCarvalho.github.io`.
- Sem Organization, sem repositório central familiar, sem quarto projeto de governança, sem dependência compartilhada com Aurora ou Matias.
- Decisão registrada em `docs/adr/ADR-0001-independencia-e-referencia-metodologica.md`.
