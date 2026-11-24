const translations = {
  "zh": {
    "pageTitle": "杨雪元 Xueyuan Yang | 个人研究主页",
    "pageDescription": "杨雪元（Xueyuan Yang）的研究主页，围绕人体运动捕捉与三维重建、具身机器人、人机交互，展示运动重建、具身智能与交互式图像分割等合作研究。",
    "skipLink": "跳至论文",
    "navPublications": "论文",
    "heroEyebrow": "个人研究主页",
    "heroNameCn": "杨雪元",
    "heroNameEn": "Xueyuan Yang",
    "researchTitle": "研究方向",
    "interest3D": "人体运动捕捉与三维重建",
    "interestRobotics": "具身机器人",
    "interestHCI": "人机交互",
    "researchBody": "我关注人体运动捕捉与三维重建，并进一步探索运动感知与表示如何支持具身机器人的行动，以及人与智能系统的自然协作。",
    "researchRelated": "相关方向：多模态感知、社会智能与 agent 框架。",
    "portraitAlt": "杨雪元的照片",
    "pubTag": "Selected Publications",
    "pubTitle": "论文与研究",
    "pubIntro": "以下按代表性列出研究工作。作者顺序与原论文一致，加粗标出本人；预印本与正式发表分别标注。",
    "abstractLabel": "阅读摘要",
    "allAuthors": "完整作者名单",
    "figureAlt": "论文研究示意图：",
    "footerSuffix": "Xueyuan Yang · 基于 GitHub Pages 部署"
  },
  "en": {
    "pageTitle": "Xueyuan Yang | Research Portfolio",
    "pageDescription": "Xueyuan Yang’s research portfolio, covering human motion capture and 3D reconstruction, embodied robotics, and human–computer interaction, with work on motion reconstruction, embodied AI, and interactive image segmentation.",
    "skipLink": "Skip to publications",
    "navPublications": "Publications",
    "heroEyebrow": "Research portfolio",
    "heroNameCn": "Xueyuan Yang",
    "heroNameEn": "杨雪元",
    "researchTitle": "Research areas",
    "interest3D": "Human motion capture & 3D reconstruction",
    "interestRobotics": "Embodied robotics",
    "interestHCI": "Human–computer interaction",
    "researchBody": "I focus on human motion capture and 3D reconstruction, and explore how motion perception and representation can support embodied robots’ actions and natural collaboration between people and intelligent systems.",
    "researchRelated": "Related areas: multimodal perception, social intelligence, and agent frameworks.",
    "portraitAlt": "Portrait of Xueyuan Yang",
    "pubTag": "Selected Publications",
    "pubTitle": "Publications & research",
    "pubIntro": "Selected research, ordered by relevance. Author order follows the original papers, with my name in bold. Preprints and published work are labeled separately.",
    "abstractLabel": "Read abstract",
    "allAuthors": "Full author list",
    "figureAlt": "Research illustration for ",
    "footerSuffix": "Xueyuan Yang · Hosted on GitHub Pages"
  }
};

const publications = [
  {
    "venue": "AAAI 2024",
    "year": "2024",
    "status": {
      "zh": "会议论文",
      "en": "Conference Paper"
    },
    "title": "Spatial-Related Sensors Matters: 3D Human Motion Reconstruction Assisted with Textual Semantics",
    "authors": "Xueyuan Yang, Chao Yao, Xiaojuan Ban",
    "teaser": {
      "src": "assets/teasers/aaai2024.webp"
    },
    "abstract": {
      "zh": "可穿戴设备驱动的人体运动重建具有成本低、可部署性强的优势，但仅依赖稀疏 IMU 时，不同姿态可能映射到相同传感器读数，导致欠约束歧义。该工作以动作文本作为监督信号，研究稀疏传感器的空间重要性建模：先引入不确定性估计为各 IMU 生成加权特征，再设计 Hierarchical Temporal Transformer，并结合对比学习实现时间维度与特征维度上的语义对齐。实验结果在多项指标上均优于已有方法。结果表明，文本监督不仅能更好地区分 sitting 与 standing 等易混动作，也能生成更自然、更精确的运动序列。",
      "en": "Wearable-based motion reconstruction is practical and cost-effective, but sparse IMU inputs are highly ambiguous because different poses can produce similar sensor readings. This work studies sensor spatial importance under textual action supervision. It introduces uncertainty-aware weighting for each IMU, proposes a Hierarchical Temporal Transformer, and uses contrastive learning to align sensor dynamics with textual semantics in both temporal and feature spaces. Across benchmarks, the method improves multiple metrics over prior approaches and better disambiguates confusing actions such as sitting versus standing while producing more natural motions."
    },
    "links": [
      {
        "label": {
          "zh": "论文",
          "en": "Paper"
        },
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/28888"
      },
      {
        "label": {
          "zh": "会议展示",
          "en": "Presentation"
        },
        "url": "https://underline.io/lecture/92018-spatial-related-sensors-matters-3d-human-motion-reconstruction-assisted-with-textual-semantics"
      }
    ],
    "id": "aaai-2024",
    "summary": {
      "zh": "结合动作文本语义与稀疏 IMU，研究更准确、自然的人体三维运动重建。",
      "en": "Textual action semantics and sparse IMU signals for more accurate, natural 3D human motion reconstruction."
    }
  },
  {
    "venue": "arXiv 2512.19992",
    "year": "2025",
    "status": {
      "zh": "预印本",
      "en": "Preprint"
    },
    "title": "S³IT: A Benchmark for Spatially Situated Social Intelligence Test",
    "authors": "Zhe Sun, Xueyuan Yang, Yujie Lu, Zhenliang Zhang",
    "teaser": {
      "src": "assets/teasers/s3it-2512.19992.webp"
    },
    "abstract": {
      "zh": "将具身智能体部署到人类环境中，需要同时满足物理约束与社会规范，但现有评测通常割裂为文本社会推理或不含社会因素的物理任务，难以衡量二者的联合权衡能力。S^3IT 为此构建了空间化社会智能基准，以 3D 座位安排任务为核心：智能体需面对由 LLM 驱动、身份与关系复杂的 NPC 群体，通过主动对话获取偏好、通过自主探索感知环境，并在多目标约束网络下完成决策。框架支持程序化扩展与难度可控，可生成大规模多样场景。对 SOTA LLM 的评测显示其相较人类基线仍有明显差距，尤其在空间智能方面不足，但在具有明确文本线索的冲突调解任务上可接近人类水平。",
      "en": "Deploying embodied agents in human environments requires reasoning jointly over physical constraints and social norms. Existing evaluations are usually split between text-only social reasoning and socially-agnostic physical tasks, so they miss this joint trade-off. S^3IT addresses the gap with a spatially situated benchmark centered on a challenging 3D seat-ordering task, where agents interact with LLM-driven NPCs with diverse identities, preferences, and social relationships. Agents must collect preference signals via dialogue, perceive the scene through active exploration, and solve multi-objective optimization under complex constraints. Evaluations of state-of-the-art LLMs show a clear gap to human performance, especially in spatial intelligence, while also revealing near-human behavior on conflicts with explicit textual cues."
    },
    "links": [
      {
        "label": {
          "zh": "论文",
          "en": "Paper"
        },
        "url": "https://arxiv.org/abs/2512.19992"
      },
      {
        "label": {
          "zh": "演示",
          "en": "Demo"
        },
        "url": "https://huggingface.co/spaces/anonymous-author-paper-2025/S3IT"
      }
    ],
    "id": "s3it",
    "summary": {
      "zh": "以三维座位安排为任务，评测智能体如何结合空间约束、对话与社会关系作出决策。",
      "en": "A 3D seat-ordering benchmark for reasoning about spatial constraints, dialogue, and social relationships."
    }
  },
  {
    "venue": "arXiv 2512.20206",
    "year": "2025",
    "status": {
      "zh": "预印本 · 仿真平台",
      "en": "Preprint · Simulation platform"
    },
    "title": "TongSIM: A General Platform for Simulating Intelligent Machines",
    "authors": "Zhe Sun, Kunlun Wu, Chuanjian Fu, Zeming Song, Langyong Shi, Zihe Xue, Bohan Jing, Ying Yang, Xiaomeng Gao, Aijia Li, Tianyu Guo, Huiying Li, Xueyuan Yang, Rongkai Liu, Xinyi He, Yuxi Wang, Yue Li, Mingyuan Liu, Yujie Lu, Hongzhao Xie, Shiyun Zhao, Bo Dai, Wei Wang, Tao Yuan, Song-Chun Zhu, Yujia Peng, Zhenliang Zhang",
    "teaser": {
      "src": "assets/teasers/tongsim-2512.20206.webp"
    },
    "abstract": {
      "zh": "随着多模态大模型发展，研究重心正从单模态文本转向多模态与具身智能，但现有仿真平台多为单任务定制，难以统一支持从低层导航到高层复合任务。TongSIM 提供高保真、通用化训练与评测环境，覆盖 100+ 多房间室内场景及开放式高交互城市场景，能够支持更广泛的研究需求。平台的评测框架可系统衡量感知、认知、决策、人机协作以及空间/社会推理等能力。结合可定制场景、任务自适应保真度、多类型智能体和动态环境仿真，TongSIM 以统一基础设施形态提升具身智能训练与评测效率。",
      "en": "As multimodal large language models advance, research is moving from single-modality text processing toward multimodal and embodied intelligence. Yet many simulators remain task-specific, making it difficult to support both low-level navigation and high-level composite activities in one environment. TongSIM is designed as a high-fidelity general-purpose platform for embodied agent training and evaluation, with over 100 diverse indoor multi-room scenes and an open-ended outdoor town environment. Its benchmark suite supports capability-level assessment across perception, cognition, decision-making, human-robot cooperation, and spatial/social reasoning. With customizable scenes, task-adaptive fidelity, diverse agent types, and dynamic environmental simulation, TongSIM serves as a scalable unified infrastructure for embodied AI research."
    },
    "links": [
      {
        "label": {
          "zh": "项目主页",
          "en": "Project Page"
        },
        "url": "https://tongsim-platform.github.io/tongsim/"
      },
      {
        "label": {
          "zh": "论文",
          "en": "Paper"
        },
        "url": "https://arxiv.org/abs/2512.20206"
      },
      {
        "label": {
          "zh": "代码",
          "en": "Code"
        },
        "url": "https://github.com/bigai-ai/tongsim"
      }
    ],
    "id": "tongsim",
    "summary": {
      "zh": "面向具身智能训练与评测的通用仿真平台，支持多样场景、任务及智能体交互。",
      "en": "A general simulation platform for embodied AI training and evaluation across diverse scenes, tasks, and agent interactions."
    },
    "authorsPreview": "Zhe Sun, Kunlun Wu, Chuanjian Fu, …, Xueyuan Yang, …, Zhenliang Zhang"
  },
  {
    "venue": "IEEE VR 2026 (VRW)",
    "year": "2026",
    "status": {
      "zh": "已发表 · 海报论文",
      "en": "Published · Poster"
    },
    "title": "Towards Trustworthy Human-AI Coexistence: A Physical-Social Benchmark for Safe Embodied AI in Symmetrical Reality",
    "authors": "Xueyuan Yang, Kunlun Wu, Zhe Sun, Yujie Lu, Zhenliang Zhang",
    "teaser": {
      "src": "assets/teasers/vr-p1179.webp"
    },
    "abstract": {
      "zh": "对称现实旨在实现人与 AI 在物理和虚拟环境中的共存，但虚拟原生智能体可能同时缺乏物理认知与社会理解。这项工作提出物理—社会基准，将物理规律和以人为中心的社会规范结合，用于评测具身智能体的安全性与协作行为，并通过初步实验和用户研究探索可信人机共存的条件。",
      "en": "Symmetrical reality envisions human–AI coexistence across physical and virtual environments, but virtual-native agents may lack both physical cognition and social understanding. This work introduces a physical-social benchmark that combines physical laws with human-centered social norms to evaluate embodied agents’ safety and cooperation. Preliminary experiments and a user study explore conditions for trustworthy human–AI coexistence."
    },
    "links": [
      {
        "label": {
          "zh": "论文",
          "en": "Paper"
        },
        "url": "https://ieeexplore.ieee.org/document/11489790"
      },
      {
        "label": {
          "zh": "DOI",
          "en": "DOI"
        },
        "url": "https://doi.org/10.1109/VRW70859.2026.00248"
      }
    ],
    "id": "vr-2026",
    "summary": {
      "zh": "结合物理约束与社会规范，探索对称现实中安全、可信的人与 AI 共存。",
      "en": "A physical-social benchmark for safe, trustworthy human–AI coexistence in symmetrical reality."
    }
  },
  {
    "id": "symmetry-2022",
    "venue": "Symmetry 14(11), 2396",
    "year": "2022",
    "status": {
      "zh": "期刊论文",
      "en": "Journal article"
    },
    "title": "Interactive Image Segmentation Based on Feature-Aware Attention",
    "authors": "Jinsheng Sun, Xiaojuan Ban, Bing Han, Xueyuan Yang, Chao Yao",
    "teaser": {
      "src": "assets/teasers/symmetry2022.webp"
    },
    "summary": {
      "zh": "将用户点击与图像语义相结合，通过特征感知注意力细化交互式图像分割结果。",
      "en": "Feature-aware attention combines user clicks with image semantics to refine interactive segmentation masks."
    },
    "abstract": {
      "zh": "该工作研究用户点击引导的交互式图像分割。模型先生成粗分割，再以特征感知注意力结合点击信息和多尺度语义，最后细化分割掩码。该注意力模块可接入已有分割网络，并在 SBD、GrabCut、DAVIS、Berkeley 和 MS COCO 数据集上进行验证。",
      "en": "This work studies click-guided interactive image segmentation. A coarse segmentation network is followed by feature-aware attention that combines user clicks with multi-scale image semantics, and a refinement module produces the final mask. The attention module can be integrated into existing segmentation networks and is evaluated on SBD, GrabCut, DAVIS, Berkeley, and MS COCO."
    },
    "links": [
      {
        "label": {
          "zh": "论文",
          "en": "Paper"
        },
        "url": "https://www.mdpi.com/2073-8994/14/11/2396"
      },
      {
        "label": {
          "zh": "DOI",
          "en": "DOI"
        },
        "url": "https://doi.org/10.3390/sym14112396"
      }
    ]
  }
];

const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const publicationList = document.getElementById("publication-list");
const motionAllowed = typeof IntersectionObserver !== "undefined" &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealObserver = motionAllowed ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 }) : null;

function observeReveal(element) {
  if (revealObserver) revealObserver.observe(element);
}

function authorNames(names) {
  const fragment = document.createDocumentFragment();
  names.split(/(Xueyuan Yang)/g).forEach((name) => {
    if (name === "Xueyuan Yang") {
      const ownName = document.createElement("strong");
      ownName.textContent = name;
      fragment.append(ownName);
    } else {
      fragment.append(document.createTextNode(name));
    }
  });
  return fragment;
}

function createPaperCard(paper, lang, index, openDetails) {
  const dict = translations[lang];
  const card = document.createElement("article");
  card.className = "paper reveal";
  card.id = paper.id;
  card.setAttribute("aria-labelledby", `${paper.id}-title`);
  card.style.setProperty("--delay", `${Math.min(index * 0.04, 0.12)}s`);

  if (paper.teaser?.src) {
    const figure = document.createElement("a");
    figure.className = "paper-teaser";
    figure.href = paper.links[0].url;
    figure.target = "_blank";
    figure.rel = "noopener noreferrer";
    const image = document.createElement("img");
    image.src = paper.teaser.src;
    image.alt = dict.figureAlt + paper.title;
    image.loading = "lazy";
    image.decoding = "async";
    figure.append(image);
    const visual = document.createElement("div");
    visual.className = "paper-visual";
    visual.append(figure);
    if (paper.id === "symmetry-2022") {
      const credit = document.createElement("p");
      credit.className = "figure-credit";
      credit.append(document.createTextNode("Figure 4 · "));
      const source = document.createElement("a");
      source.href = "https://doi.org/10.3390/sym14112396";
      source.textContent = "Sun et al., Symmetry 2022";
      const license = document.createElement("a");
      license.href = "https://creativecommons.org/licenses/by/4.0/";
      license.textContent = "CC BY 4.0";
      credit.append(source, document.createTextNode(" · "), license);
      visual.append(credit);
    }
    card.append(visual);
  } else {
    card.classList.add("paper-without-teaser");
  }

  const main = document.createElement("div");
  main.className = "paper-main";
  const meta = document.createElement("div");
  meta.className = "paper-meta";
  const venue = document.createElement("span");
  venue.className = "venue";
  venue.textContent = paper.venue;
  const status = document.createElement("span");
  status.className = "status";
  status.textContent = paper.status[lang];
  const year = document.createElement("span");
  year.className = "paper-year";
  year.textContent = paper.year;
  meta.append(venue, status, year);

  const title = document.createElement("h3");
  title.className = "paper-title";
  title.id = `${paper.id}-title`;
  const titleLink = document.createElement("a");
  titleLink.href = paper.links.find((link) => link.label.en === "Paper")?.url || paper.links[0].url;
  titleLink.target = "_blank";
  titleLink.rel = "noopener noreferrer";
  titleLink.textContent = paper.title;
  title.append(titleLink);
  main.append(meta, title);

  if (paper.authorsPreview) {
    const authors = document.createElement("details");
    authors.className = "paper-author-details";
    authors.id = `${paper.id}-authors`;
    authors.open = openDetails.has(authors.id);
    const preview = document.createElement("summary");
    preview.className = "paper-authors";
    preview.append(authorNames(paper.authorsPreview));
    const hint = document.createElement("span");
    hint.className = "authors-hint";
    hint.textContent = ` · ${dict.allAuthors}`;
    preview.append(hint);
    const full = document.createElement("p");
    full.className = "paper-authors full-authors";
    full.append(authorNames(paper.authors));
    authors.append(preview, full);
    main.append(authors);
  } else {
    const authors = document.createElement("p");
    authors.className = "paper-authors";
    authors.append(authorNames(paper.authors));
    main.append(authors);
  }

  const overview = document.createElement("p");
  overview.className = "paper-overview";
  overview.textContent = paper.summary[lang];
  main.append(overview);

  const links = document.createElement("div");
  links.className = "paper-links";
  paper.links.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.label[lang];
    links.append(link);
  });

  const abstract = document.createElement("details");
  abstract.className = "paper-abstract";
  abstract.id = `${paper.id}-abstract`;
  abstract.open = openDetails.has(abstract.id);
  const label = document.createElement("summary");
  label.textContent = dict.abstractLabel;
  const text = document.createElement("p");
  text.className = "block-text";
  text.textContent = paper.abstract[lang];
  abstract.append(label, text);
  main.append(links, abstract);
  card.append(main);
  return card;
}

function renderPublications(lang) {
  const openDetails = new Set(Array.from(publicationList.querySelectorAll("details[open]"), (el) => el.id));
  if (revealObserver) publicationList.querySelectorAll(".reveal").forEach((el) => revealObserver.unobserve(el));
  const fragment = document.createDocumentFragment();
  publications.forEach((paper, index) => fragment.append(createPaperCard(paper, lang, index, openDetails)));
  publicationList.replaceChildren(fragment);
  publicationList.querySelectorAll(".reveal").forEach(observeReveal);
}

function setLanguage(lang) {
  const safeLang = lang === "en" ? "en" : "zh";
  const dict = translations[safeLang];
  document.documentElement.lang = safeLang === "zh" ? "zh-CN" : "en";
  document.title = dict.pageTitle;
  document.querySelector('meta[name="description"]').content = dict.pageDescription;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const text = dict[node.dataset.i18n];
    if (text) node.textContent = text;
  });
  document.querySelector(".hero-portrait img").alt = dict.portraitAlt;
  langButtons.forEach((button) => {
    const active = button.dataset.lang === safeLang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderPublications(safeLang);
  try {
    localStorage.setItem("portfolio_lang", safeLang);
  } catch {
    // Language switching also works when browser storage is unavailable.
  }
}

langButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
const savedLanguage = (() => {
  try { return localStorage.getItem("portfolio_lang"); } catch { return null; }
})();
setLanguage(savedLanguage || "zh");
document.getElementById("year").textContent = new Date().getFullYear();

// Progressive enhancement: static content stays visible without motion support.
if (revealObserver) {
  document.documentElement.classList.add("motion-ready");
  document.querySelectorAll(".reveal").forEach(observeReveal);
}
