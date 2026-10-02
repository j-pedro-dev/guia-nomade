# Tema: Pôr do Sol Noturno

Tema próprio do site, criado no formato da skill `theme-factory` (`.claude/skills/theme-factory`).
É a noite de quem trabalha de qualquer lugar: fundo azul-noite e o laranja do pôr do sol como única cor quente.

## Paleta

| Nome | Hex | Uso | Token Tailwind |
| --- | --- | --- | --- |
| Noite | `#0a0c12` | Fundo da página | `night` |
| Noite 2 | `#11141c` | Fundo dos cards | `night-2` |
| Névoa | `#9aa1b2` | Texto secundário | `mist` |
| Sol | `#ffb547` | Destaque, ícones, rótulos | `sun` |
| Coral | `#ff6b6b` | Fim do degradê, ícones de "não" | `sun-rose` |
| Céu | `#7cc4ff` | Só no brilho frio atrás da oferta | `sky` |

Degradê da marca: `#ffb547 → #ff7a59` nos botões (`.bg-sunset`) e `#ffb547 → #ff6b6b` nos títulos (`.text-sunset`).

## Tipografia

- **Títulos:** Sora 600–800 (`font-display`)
- **Textos:** Manrope 400–700 (`font-sans`)

## Regras

- Uma cor quente só: o degradê aparece em títulos-chave, botões de compra e números. O resto é neutro.
- Cantos variam pelo papel: cards `rounded-2xl`, fotos e oferta maiores, chips e botões redondos. Nunca tudo igual.
- Fotos sempre nítidas e inteiras: sem opacidade baixa, sem sombra escura e sem texto por cima.
- Layout alinhado à esquerda. Centralizado só na oferta e no último botão.
- Evitar: fonte Inter, degradê roxo/azul, layout todo centralizado.
