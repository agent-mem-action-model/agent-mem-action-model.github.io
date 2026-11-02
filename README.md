# 2AM project website

Official research project page for **2AM: Grounding Agent-Side Memory as Guidance for Steerable Action Models in Long-Horizon Manipulation**.

- Paper: https://arxiv.org/abs/2609.11308
- Website: https://agent-mem-action-model.github.io/

## Content boundary

Published content and results follow arXiv v1 (September 10, 2026), including the aligned reproduction and language-only ablation. Coming soon announces an experimental expansion across LIBERO-Mem, RMBench, RoboMME, and RoboDojo-Mem. It does not report new results or disclose unpublished method details.

## Local preview

This is a buildless HTML/CSS/JavaScript website. No package installation, API keys, analytics, or server-side services are needed.

```sh
python -m http.server 8000
```

Open http://localhost:8000. Edit `index.html`, `style.css`, and `script.js`. Commit only website sources and public assets.

## GitHub Pages

In **Settings → Pages**, use **Deploy from a branch → main → /(root)**. The `.nojekyll` file disables Jekyll processing. Pushing to `main` publishes the static files. If Pages has not yet been enabled, a repository administrator must select this publishing source once.

## Assets

`assets/overview.png`, `training.png`, and `agent-errors.png` are the authors' figures from arXiv v1. Benchmark images are reference scenes from official project resources, not 2AM rollouts. See `ASSETS.md` for attribution.

The source repository is the website, not a release of the model or training implementation.
