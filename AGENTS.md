# AGENTS.md — Tomás de Carvalho

Owner independente. Workspace canônico: `/home/andre/tomas-de-carvalho`.
`write_scope` de qualquer missão neste projeto: `["/home/andre/tomas-de-carvalho"]`.

## Identidade

- Identidade: `Tomás de Carvalho Fernandes` (custódia interna; não publicar o nome civil completo quando a marca pública bastar).
- Nome público: `Tomás de Carvalho`.
- GitHub Personal Account: `TomasDeCarvalho` · repo alvo `TomasDeCarvalho/TomasDeCarvalho.github.io`.
- Site provisório: `https://tomasdecarvalho.github.io/` · domínio futuro `tomasdecarvalho.com` (sem compra nesta fase).

## Posição canônica

- Este projeto NÃO pertence arquiteturalmente ao ecossistema iLúmino e NÃO deve ser movido para `/home/andre/ilumino-workspace/repositories/`.
- `ilumino-workspace` é referência metodológica, não parent workspace: nenhum runtime/build depende dele, nenhum symlink de governança, nenhum ownership Git compartilhado, nenhum backlog ou segredo compartilhado, nenhuma sincronização automática.
- Sem Organization, sem repositório central familiar, sem projeto de governança, sem dependência compartilhada com Aurora ou Matias. Não escrever em `/home/andre/ilumino-workspace` nem inspecionar projetos de Aurora/Matias além do estritamente necessário.
- Decisão vigente: `docs/adr/ADR-0001-independencia-e-referencia-metodologica.md`.
- Doutrina de hospedagem (ver `docs/adr/ADR-0002-hosting-independente-e-transicao.md`): `GITHUB != PRODUCTION_HOSTING`; GitHub Pages é publicação transitória, não endpoint canônico; destino é hosting independente e substituível + `tomasdecarvalho.com`.

## Ordem de leitura

1. Este `AGENTS.md`;
2. `PROJECT_STATE.md`;
3. A SPEC ou ADR ativa referenciada nele;
4. `docs/ARCHITECTURE.md`, `docs/IDENTITY.md`, `docs/ROADMAP.md`, `docs/PRIVACY-AND-SAFETY.md` conforme a necessidade;
5. Git, diff e validações conforme a necessidade.

## Regras de operação

1. Toda missão material declara owner e `write_scope` explícitos. Leitura fora do escopo não concede escrita.
2. Separar fato observado, hipótese e decisão. Não apresentar inferência como fato.
3. Mudanças pequenas, verificáveis e reversíveis. Não alterar produto/site além do necessário à coerência documental; não introduzir framework, backend, CMS, analytics ou nova infraestrutura sem decisão material registrada.
4. Preservar ancestry Git: sem `reset --hard`, rebase destrutivo, force-push, sobrescrita de trabalho alheio ou mudança de remote sem autorização material.
5. Gates proporcionais ao estágio: `PREWRITE` (branch, HEAD, status, remote/upstream, ancestry), `PRECOMMIT` (diff integral, consistência documental, scan de segredos), `PREPUSH` (somente se push autorizado e sem exigir credencial/SSH novo), `CLOSEOUT` (veredito factual, HEAD inicial/final, arquivos, validações, pendências).
6. Validação baseada em evidência: `git diff --check`, consistência entre README/site/docs, ausência de mistura com Aurora/Matias, ausência de falsa associação com iLúmino, nenhum segredo ou PII operacional em arquivos versionados.
7. Política de segredos: `.local/` é operacional e gitignored; nunca versionar credenciais, tokens, chaves ou identificadores operacionais. Valor de segredo nunca vai para prompt, log, chat ou Git.
8. `economic-fit-first`: futura decisão material de stack/superfície escolhe o menor meio suficiente, com decisão humana terminal; stack atual (estático, zero framework, zero build) permanece até necessidade comprovada.
9. Não alterar contas, credenciais, SSH, Chrome, remoto GitHub, Pages ou infraestrutura nesta disciplina documental salvo missão própria com autorização explícita.
