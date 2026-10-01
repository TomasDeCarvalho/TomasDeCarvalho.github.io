# SPEC-0002 — Fundação de hospedagem independente

Status: ATIVA (fundação; seleção N vs C pendente — ver ADR-0002).
Missão: `SITE_CUSTOM_HOSTING_FOUNDATION` · 2026-10-01.
Especifica: ADR-0001 (owner independente) e ADR-0002 (hospedagem
independente). Herda: SPEC-0001 (identidade; invariante 1: o domínio é
o identificador canônico).

## Papéis canônicos

1. Workspace `/home/andre/tomas-de-carvalho`: desenvolvimento e
   documentação. Único `write_scope`.
2. Git local: histórico primário de engenharia/versionamento.
3. GitHub (`TomasDeCarvalho/...github.io`): remote versionado, backup
   remoto, continuidade, prova histórica. Não é hospedagem canônica.
4. GitHub Pages: publicação transitória comprovada (HTTP 200 em
   2026-10-01); manter no ar até substituto validado; sem downtime
   deliberado; desativação só com produção independente + decisão
   humana explícita.
5. Hospedagem de produção: independente, substituível, artefatos
   estáticos portáteis, pronta para `tomasdecarvalho.com`.
6. Domínio `tomasdecarvalho.com`: endpoint soberano futuro; não
   comprado; sem compra sem autorização humana explícita.

## Critérios de hosting (economic-fit)

Custo inicial zero ou desprezível; custo recorrente previsível e
mínimo; domínio próprio + HTTPS gerenciado; deploy simples (CLI ou Git,
sem acoplamento obrigatório ao GitHub); portabilidade total dos
artefatos; sem vendor lock-in; estático hoje; evolução futura sem
reescrita; operação mínima por adulto custodiante; sem backend/CMS/
analytics/tracking agora; compatível com HTML/CSS/JS simples; migração
futura sem conversão; patrimônio digital de longo prazo.

## Critérios de transição (gates da próxima missão)

Candidato publicado em URL do host; conteúdo idêntico ao provisório;
HTTPS válido; domínio próprio associado (após compra autorizada);
prova de produção registrada; só então Pages sai da função pública,
com decisão humana explícita. Nunca duas identidades canônicas.

## Fora de escopo desta fundação

Redesign do site; framework; CMS; backend; banco; analytics; tracking;
autenticação; formulário público; comentários; integrações externas;
compra de domínio; contratação/criação de conta paga; desativação do
Pages; qualquer escrita fora de `/home/andre/tomas-de-carvalho`.
