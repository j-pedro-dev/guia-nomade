# Skills do Claude

Skills que o Claude Code carrega automaticamente ao trabalhar neste repositório.

Origem: [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)
(commit `be2a406`, licença Apache 2.0; algumas skills têm licença própria no `LICENSE.txt` da pasta).
A pasta `composio-skills` do original (832 integrações com apps como Gmail e Slack) ficou de fora
porque não tem relação com o site.

## Skills aplicadas no site

| Skill | Como foi usada |
| --- | --- |
| `image-enhancer` | Fotos do Lucas tratadas: nitidez, redução de artefatos de compressão, versão 2x para telas retina e formato WebP |
| `artifacts-builder` | Regras contra "cara de IA": sem layout todo centralizado, cantos variados em vez de todos iguais, nada de Inter ou degradê roxo |
| `theme-factory` | Tema próprio do site documentado em `docs/TEMA.md` |
| `webapp-testing` | Testes automáticos com Playwright em `tests/` (`npm run test`) |

As demais ficam disponíveis para tarefas futuras (ex.: `domain-name-brainstormer` para escolher o domínio,
`content-research-writer` para revisar textos, `competitive-ads-extractor` para estudar anúncios de concorrentes).
