# ADR-0002 — GitHub como versionamento; hospedagem independente como destino

- Data: 2026-10-01
- Estado: aceita (fundação); seleção final de hosting pendente de decisão humana (ver SHORTLIST)
- Owner: `/home/andre/tomas-de-carvalho`
- `write_scope`: `["/home/andre/tomas-de-carvalho"]`
- Missão: `SITE_CUSTOM_HOSTING_FOUNDATION`
- Complementa: ADR-0001; especifica SPEC-0001 (invariante 1: o domínio é o identificador canônico)

## Contexto

Fato: a publicação em GitHub Pages (`https://tomasdecarvalho.github.io/`,
HTTP 200 em 2026-10-01) foi tecnicamente válida, mas interpretou
incorretamente o papel arquitetural do GitHub: tratou a plataforma de
versionamento como plataforma canônica de hospedagem do produto.

Fato: nenhum documento vigente declarava essa distinção. `README.md`
rotulava o URL `github.io` como "site canônico"; `docs/ARCHITECTURE.md`
registrava o mesmo URL como metadata canonical sem qualificá-lo como
transitório; `PROJECT_STATE.md` celebrava `PAGES-LIVE` como estado final;
`docs/IDENTITY.md` dizia "GitHub como patrimônio" sem separar código de
hospedagem.

Intenção humana corrigida: site totalmente personalizado para Tomás,
hospedado em serviço independente e substituível; Git/GitHub como
versionamento, histórico e backup remoto; `tomasdecarvalho.com` como
endereço público soberano futuro (ainda não comprado; sem compra nesta
missão).

## Decisão

1. `GITHUB != PRODUCTION_HOSTING`. A conta `TomasDeCarvalho` e o repo
   `TomasDeCarvalho/TomasDeCarvalho.github.io` são remote versionado,
   backup remoto, continuidade e prova histórica. Não são identidade
   arquitetural obrigatória do produto.
2. `GITHUB_PAGES != CANONICAL_PUBLIC_ENDPOINT`. O Pages publicado é
   prova técnica transitória, mantido no ar até existir hospedagem
   substituta validada. Não orienta arquitetura futura; será desativado
   da função pública somente após produção independente comprovada e
   decisão humana explícita. Sem downtime deliberado nesta missão.
3. `HOSTING = REPLACEABLE_DEPLOYMENT_INFRASTRUCTURE`. A hospedagem de
   produção é independente do GitHub como versionamento, suporta o
   produto estático atual (HTML/CSS/JS, zero framework, zero build),
   aceita `tomasdecarvalho.com` sem redesign estrutural e é substituível:
   os artefatos de deploy são arquivos estáticos portáteis, sem lock-in.
4. Deploy desacoplado: a infra de deploy pode consumir artefatos Git por
   conveniência econômica, mas sem tornar o GitHub (nem o Pages)
   obrigatório — deploy por CLI/upload direto precisa permanecer
   possível para o mesmo conjunto de arquivos.
5. Sem backend/CMS/framework/analytics nesta fundação: nenhuma
   necessidade atual comprovada (ver SPEC-0002, fora de escopo).

## Alternativas consideradas

- S — GitHub Pages permanente como endpoint canônico. Rejeitada:
  contraria a intenção humana; amarra a identidade pública soberana a
  um provedor de versionamento.
- V — Vercel Hobby (gratuito, domínio próprio, HTTPS). Depriorizado:
  plano Hobby restringe-se a uso pessoal não comercial, e o roadmap
  prevê futura Prateleira (Fase 3); uso comercial exigiria plano pago.
  Tecnicamente apto, juridicamente incompatível com a trajetória.
- P — VPS genérico / infraestrutura reaproveitada de outro projeto
  (Contabo, Elgin, Cloudflare sob outra custódia). Rejeitada:
  superdimensionada para site estático (custo recorrente, operação de
  SO, sem backend necessário); viola `economic-fit-first` e a regra
  `CURRENT_INFRA != FUTURE_SURFACE_DEFAULT`. Nova superfície exige
  conta/custódia próprias, nunca compartilhadas.
- N — Netlify Free. Shortlist (ver abaixo).
- C — Cloudflare Pages (plano Free). Shortlist (ver abaixo).

## SHORTLIST (decisão humana pendente)

Fatos verificados em 2026-10-01, ambos no nível gratuito, ambos
suficientes para o produto atual:

| Critério | N — Netlify Free | C — Cloudflare Pages Free |
|---|---|---|
| Custo inicial/recorrente | US$ 0; 300 créditos/mês (deploy prod. 15 créd., preview 5) | US$ 0; 500 builds/mês, 20 mil arquivos, 100 domínios/projeto |
| Domínio próprio + HTTPS | Sim, SSL gerenciado incluído | Sim (HTTPS padrão da plataforma) |
| Deploy sem GitHub obrigatório | Sim (CLI / arrastar-e-soltar) | Sim (upload direto / Wrangler) |
| Portabilidade | Artefatos estáticos idênticos; saída sem conversão | Idem |
| Evolução | Forms/functions serverless quando (e se) preciso | Workers/Pages Functions quando (e se) preciso |

N e C são materialmente equivalentes para este estágio: nenhum vence
por custo, portabilidade ou simplicidade para um site de poucos KB.
Diferenças reais (modelo de medição, painel, custódia de conta) não são
decisivas agora. Por honestidade técnica, nenhuma escolha é inventada
aqui: falta decisão humana N vs C antes da próxima missão de deploy.

Boundary: qualquer que seja o escolhido, a conta pertence à cadeia de
custódia deste projeto (responsável adulto), sem compartilhar conta,
pagamento ou DNS com outros projetos. Cloudflare é avaliado aqui por
mérito próprio, não por já existir em outro contexto.

## Transição de publicação (sequência futura, sem pular etapas)

1. Humano escolhe N ou C → 2. preparar deploy independente →
3. publicar candidato → 4. validar candidato (conteúdo, HTTPS, domínio
provisório do host) → 5. comprar `tomasdecarvalho.com` (missão
financeira própria) e associar → 6. provar produção no domínio soberano
→ 7. somente então, com decisão humana explícita, desativar/retirar o
Pages da função pública. Nunca duas identidades públicas canônicas.

## Consequências

- Docs corrigidos: `README.md`, `docs/ARCHITECTURE.md`,
  `docs/ROADMAP.md`, `docs/IDENTITY.md`, `AGENTS.md`,
  `PROJECT_STATE.md` + SPEC-0002.
- Produto/site inalterado: `index.html` (canonical/og para o URL
  provisório), `robots.txt`, `sitemap.xml` e `content/catalog.json`
  continuam descrevendo corretamente a publicação provisória vigente;
  metadados mudam na missão de migração, quando houver endpoint
  substituto real.
- Próxima missão (pós-decisão humana): construir o site personalizado
  da Bancada já orientado ao hosting escolhido, não ao Pages.

## Validação

- `git diff --check` limpo; diff integral revisado; nenhuma contradição
  restante sobre papel do GitHub/Pages (busca por `Pages|canônico|
  canonical` revisada); nenhum segredo/PII; ancestry preservada;
  push fast-forward.
