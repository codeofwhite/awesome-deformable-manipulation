# Awesome 具身智能柔性物体仿真 🧸 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 面向具身智能的可变形体仿真精选资源 — 仿真环境、操作任务、Sim-to-Real 迁移与资产生成。

[Project website](https://codeofwhite.github.io/awesome-soft-body-simulation/) | [English](README.md) | [中文](README.zh-CN.md)

---

## 目录

- [仿真环境与平台](#仿真环境与平台)
- [柔性物体操作任务](#柔性物体操作任务)
- [Sim-to-Real 迁移](#sim-to-real-迁移)
- [基准测试与评估](#基准测试与评估)
- [面向仿真的 3D 资产生成](#面向仿真的-3d-资产生成)
- [基础仿真技术](#基础仿真技术)

---

## 仿真环境与平台

- [SAPIEN: A SimulAted Part-based Interactive ENvironment](https://arxiv.org/abs/2003.08515) - 基于 PhysX 的交互式仿真环境，擅长铰链体与可变形体仿真，具身智能研究广泛使用。 📄 🔧 ⭐
- [Genesis World](https://genesis-world.readthedocs.io/) - 多物理仿真平台，覆盖刚体、柔体、流体等，⭐ 29k+ GitHub stars。 🔧 ⭐
- [SAPIEN ManiSkill](https://maniskill2.github.io/) - 基于 SAPIEN 的统一操作技能学习框架，包含丰富的柔性物体任务。 🔧 📊 ⭐
- [Isaac Sim / Isaac Lab](https://developer.nvidia.com/isaac-sim) - NVIDIA 机器人仿真平台，GPU 加速柔性体支持，面向大规模具身智能训练。 🔧 ⭐
- [MuJoCo](https://mujoco.org/) - 先进物理引擎，v3.x 起支持柔性体仿真，机器人研究广泛采用。 🔧 ⭐
- [Taichi](https://github.com/taichi-dev/taichi) - 高性能并行计算语言，具身智能研究中常用于可微柔体仿真。 🔧
- [Real2Render2Real: Scaling Robot Data Without Dynamics Simulation or Robot Hardware](https://arxiv.org/abs/2505.09601) - 无需动力学仿真或机器人硬件，通过 Real→Render→Real 流水线大规模生成机器人训练数据。 📄 ⭐

## 柔性物体操作任务

- [GarmentLab: A Unified Simulation and Benchmark for Garment Manipulation](https://arxiv.org/abs/2411.01200) - 衣物操作的统一仿真与 benchmark — 折叠、悬挂、穿衣等任务。 📄 📊 ⭐
- [ClothesNet: An Information-Rich 3D Garment Model Repository with Simulated Clothes Environment](https://arxiv.org/abs/2308.09987) - 大规模衣物 3D 数据集，包含关键点和边界的丰富标注，面向操作研究。 📄 📊
- [RAPID: Rapid Adaptation of Particle Dynamics for Generalized Deformable Object Mobile Manipulation](https://arxiv.org/abs/2603.18246) - 粒子动力学的快速适应，面向泛化柔性物体移动操作。 📄 ⭐
- [Benchmarking the Sim-to-Real Gap in Cloth Manipulation](https://arxiv.org/abs/2310.09543) - 布料操作中 sim-to-real gap 的系统评测，对仿真器选型有重要参考价值。 📄 📊
- [SoftMimicGen: A Data Generation System for Scalable Robot Learning in Deformable Object Manipulation](https://arxiv.org/abs/2603.25725) - MimicGen 在柔性物体操作领域的扩展，实现可扩展的机器人操作数据生成。 📄 ⭐
- [DeformGen: Dynamics-Based Topology Augmentation for Deformable Manipulation Policy Learning](https://arxiv.org/abs/2606.25939) - 基于动力学的拓扑增强方法，用于柔性物体操作策略学习，结合 PhysTwin 与 Real2Render2Real。 📄

## Sim-to-Real 迁移

- [Learning to Manipulate Deformable Objects in the Real World via Sim2Real](https://arxiv.org/abs/2512.11070) - 端到端 sim2real 流水线，通过域随机化实现柔性物体操作的实机迁移。 📄

## 基准测试与评估

- [SoftGym: Benchmarking Deep Reinforcement Learning for Deformable Object Manipulation](https://arxiv.org/abs/2011.07215) - 柔性物体操作（布料、绳索、流体）的 benchmark 套件，提供标准化的 RL 环境。 📄 📊 ⭐

## 面向仿真的 3D 资产生成

- [PhysX-3D: Physical-Grounded 3D Asset Generation](https://arxiv.org/abs/2507.12465) - 端到端的物理驱动 3D 资产生成范式，包含 PhysXNet 数据集。 📄 ⭐
- [PhysX-Anything: Simulation-Ready Physical 3D Assets from Single Image](https://arxiv.org/abs/2511.13468) - 从单张图片生成带有物理特性的仿真就绪 3D 资产。 📄
- [PhysX-Omni: Unified Simulation-Ready Physical 3D Generation for Rigid, Deformable, and Articulated Objects](https://arxiv.org/abs/2605.21572) - 首次将可变形体纳入 PhysX 生成范围，统一刚体/柔体/铰链体。 📄 ⭐
- [DiffGI: Differentiable Geometry Images](https://arxiv.org/abs/2607.13365) - 基于可微几何图像的 3D 衣物生成方案（暂未集成物理特性）。 📄
- [PhysTwin: Physics-Informed Reconstruction and Simulation of Deformable Objects from Videos](https://arxiv.org/abs/2503.17973) - 从视频中物理感知地重建与仿真可变形物体，是 Real2Render2Real 和 DeformGen 的前置工作。 📄 ⭐
- [Gaussian Garments: Reconstructing Simulation-Ready Clothing with Photorealistic Appearance from Multi-View Video](https://arxiv.org/abs/2409.08189) - 从多视角视频重建可仿真、具备照片级真实感的独立服装资产。 📄

## 基础仿真技术

- [XRTailor (OpenXRLab)](https://github.com/openxrlab/xrtailor) - GPU 加速布料仿真引擎，面向大规模数据生成。 🔧
- [Position Based Dynamics (PBD)](https://matthias-research.github.io/pages/tenMinutePhysics/) - Position Based Dynamics 模拟的经典入门资源。 🔧
- [ThinShellLab: Thin-Shell Object Manipulations With Differentiable Physics Simulations](https://arxiv.org/abs/2404.00451) - 完全可微的薄壳仿真平台，覆盖纸、布等不同弯曲刚度的材料。 📄 🔧
- [Second-Order FEM for Deformable Surfaces](https://dl.acm.org/doi/10.1145/3592430) - 高阶有限元法用于布料/薄壳仿真的精度提升。 📄

---

## 图例

| 标签 | 含义                 |
| ---- | -------------------- |
| 📄   | 论文                 |
| 🔧   | 工具 / 框架 / 引擎  |
| 📊   | 基准测试 / 数据集    |
| ⭐   | 推荐 / 重要          |

---

## 贡献

欢迎贡献！请先阅读 [贡献指南](CONTRIBUTING.md)。

**快速添加论文：**

1. 编辑 `papers.yml` — 在对应分类下添加条目
2. 运行 `python generate.py`
3. 提交 Pull Request
