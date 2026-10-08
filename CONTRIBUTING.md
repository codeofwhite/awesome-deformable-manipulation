# Contributing Guidelines / 贡献指南

Thank you for your interest in contributing! 🎉

## Scope / 范围

This list focuses on deformable object simulation **and manipulation for embodied AI**:

- Simulation environments and platforms with deformable object support
- Manipulation tasks involving deformable objects (cloth, rope, soft bodies)
- Sim-to-Real transfer for deformable manipulation
- Benchmarks and evaluation for deformable object tasks
- 3D asset generation for building simulation environments
- Perception, grasp selection, visual/tactile feedback control, and policy learning directly tied to deformable object manipulation, including real-robot methods without simulation
- Surveys and reading guides on deformable object simulation and manipulation
- Foundational simulation techniques (physics engines, numerical methods)

**Out of scope:** pure graphics/rendering, rigid-body-only work, tactile sensing (unless directly tied to deformable manipulation).

## How to Add a Paper / 如何添加论文

**Edit one file, run one command:**

1. Open `papers.yml`
2. Add your entry under the appropriate section:

```yaml
- title: "Your Paper Title"
  url: "https://arxiv.org/abs/xxxx.xxxxx"
  venue: "ICRA"          # optional
  year: 2026             # optional
  tags: [paper, star]    # paper / tool / dataset / benchmark / star
  desc_en: "One-line English description."
  desc_zh: "一行中文描述。"
```

3. Run `python generate.py` (requires `pip install pyyaml`)
4. This auto-generates both `README.md` (EN) and `README.zh-CN.md` (CN)
5. Submit a Pull Request

## Tags / 标签

| Tag | Meaning | 含义 |
|-----|---------|------|
| 📄 `paper` | Research paper | 论文 |
| 🔧 `tool` | Tool / Framework / Engine | 工具 / 框架 / 引擎 |
| 📊 `dataset` | Dataset | 数据集 |
| 📊 `benchmark` | Benchmark | 基准测试 |
| ⭐ `star` | Recommended / Important | 推荐 / 重要 |

## Sections / 分类

| Section | Description |
|---------|-------------|
| `environments` | Simulation environments & platforms for Embodied AI |
| `tasks` | Deformable object manipulation tasks (cloth, rope, etc.) |
| `methods` | Perception, grasping, control, and policy learning for deformable manipulation |
| `sim2real` | Sim-to-real transfer methods and research |
| `benchmarks` | Standardized evaluation environments and datasets |
| `generation` | 3D asset generation for building simulation environments |
| `foundations` | Foundational simulation techniques (engines, numerical methods) |
| `surveys` | Surveys and reading guides |

## Quality Criteria / 质量标准

- Resources must be **relevant** to deformable object simulation or manipulation for embodied AI
- Papers should be **published** (conference, journal, or reputable preprint)
- Tools should be **open source** or publicly available
- Each entry should have a **working URL**
- Deduplicate by paper identifier or canonical URL; choose one primary section
- State whether evidence concerns perception, simulation, or real-robot manipulation; do not equate perception accuracy with task success
- For new papers, `year` records the first public preprint submission year; record later publication venues separately
- Please provide **both English and Chinese descriptions** (`desc_en` and `desc_zh`)

## Questions? / 有问题？

Open an issue if you have any questions!
有问题请提 issue！
