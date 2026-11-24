# Xueyuan Yang · Research Portfolio

Source for the bilingual academic website of **Xueyuan Yang (杨雪元)**, presenting selected publications and research in human motion capture and 3D reconstruction, embodied robotics, and human–computer interaction.

[Website](https://yxyyundanfengqing.github.io/) · [Contact](mailto:XueyuanYang_ustb@163.com)

## Research areas

- **Human motion capture and 3D reconstruction** — motion perception, representation, and reconstruction from sparse sensor signals.
- **Embodied robotics** — perception, action, and evaluation in physical and social environments.
- **Human–computer interaction** — interactive perception and collaboration between people and intelligent systems.

These areas connect human motion perception and representation with embodied action and human–AI collaboration.

## Website

The site uses HTML, CSS, and JavaScript, with no package installation or build step.

- Chinese and English content, with a persistent language preference when browser storage is available.
- Publication summaries, expandable abstracts, and source links, with published work and preprints labeled separately.
- Original author ordering, highlighted personal authorship, and expandable full author lists for large collaborations.
- Responsive layouts, keyboard-operable disclosures, reduced-motion support, and static publication links when JavaScript is disabled.
- WebP research figures displayed without cropping, alongside retained source images where available.

## Repository structure

```text
.
├── index.html          # Page structure, metadata, and static fallback content
├── script.js           # Bilingual text, publication data, and interactions
├── styles.css          # Typography, layout, and responsive styles
├── assets/
│   ├── avatar.jpg      # Profile portrait
│   ├── favicon.svg     # Site icon
│   └── teasers/        # Publication figures and optimized WebP assets
└── README.md
```

## Local preview

From the repository root, start a local server with Python 3:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open [localhost:8000](http://localhost:8000/). Python is only used to serve the files during preview; the published site runs entirely in the browser.

## Content maintenance

| Content | Location |
| --- | --- |
| Research areas, biography, and interface text | `translations` in `script.js`; corresponding static text in `index.html` |
| Publications and external resources | `publications` in `script.js`; fallback links in `index.html` |
| Portrait and publication figures | `assets/` |
| Email and navigation | `index.html` |
| Visual design and responsive behavior | `styles.css` |

Each publication has a stable `id`, venue, year, publication status, ordered authors, bilingual `summary` and `abstract`, and source links. Keep the full author sequence in `authors`; an optional `authorsPreview` may shorten long lists using ellipses while preserving the original order. Place figures in `assets/teasers/` and reference them through `teaser.src`.

Update Chinese and English entries together. Keep page descriptions and static fallback content consistent with the rendered page. When changing CSS or JavaScript, update the corresponding version query in `index.html` so returning visitors receive the latest assets.

## GitHub Pages

The repository can be published directly from its root. For branch-based publishing, select **Settings → Pages → Deploy from a branch**, then **`main` / `/ (root)`**. No generated output directory is required. See the [GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for configuration details.

## Publication sources

Publication metadata and links refer to the following primary sources:

| Work | Source |
| --- | --- |
| 3D human motion reconstruction | [AAAI 2024](https://ojs.aaai.org/index.php/AAAI/article/view/28888) · [arXiv](https://arxiv.org/abs/2401.05412) |
| S³IT | [arXiv:2512.19992](https://arxiv.org/abs/2512.19992) |
| TongSIM | [arXiv:2512.20206](https://arxiv.org/abs/2512.20206) · [Project](https://tongsim-platform.github.io/tongsim/) |
| Trustworthy human–AI coexistence | [IEEE VRW 2026](https://doi.org/10.1109/VRW70859.2026.00248) |
| Interactive image segmentation | [Symmetry 2022](https://doi.org/10.3390/sym14112396) |

## Image credits

`assets/teasers/symmetry2022.webp` reproduces Figure 4, “Comparison of segmentation results of different models,” from Jinsheng Sun, Xiaojuan Ban, Bing Han, Xueyuan Yang, and Chao Yao, *Interactive Image Segmentation Based on Feature-Aware Attention*, **Symmetry**, 14(11), 2396, 2022. [DOI: 10.3390/sym14112396](https://doi.org/10.3390/sym14112396).

© 2022 by the authors. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The [original figure](https://mdpi-res.com/d_attachment/symmetry/symmetry-14-02396/article_deploy/html/images/symmetry-14-02396-g004.png) has been resized and converted to WebP; its content is unchanged. Attribution also appears beside the figure on the website.
