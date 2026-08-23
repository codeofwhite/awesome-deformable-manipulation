# Awesome Deformable Object Simulation for Embodied AI 🧸 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of resources on simulating deformable objects (cloth, rope, soft bodies) for embodied intelligence — simulation environments, manipulation tasks, sim-to-real transfer, and asset generation.

[Project website](https://codeofwhite.github.io/awesome-soft-body-simulation/) | [English](README.md) | [中文](README.zh-CN.md)

---

## Contents

- [Simulation Environments & Platforms](#simulation-environments--platforms)
- [Deformable Object Manipulation Tasks](#deformable-object-manipulation-tasks)
- [Sim-to-Real Transfer](#sim-to-real-transfer)
- [Benchmarks & Evaluation](#benchmarks--evaluation)
- [3D Asset Generation for Simulation](#3d-asset-generation-for-simulation)
- [Foundational Simulation Techniques](#foundational-simulation-techniques)
- [Legend](#legend)

---

## Simulation Environments & Platforms

- [SAPIEN: A SimulAted Part-based Interactive ENvironment](https://arxiv.org/abs/2003.08515) - Interactive simulation environment based on PhysX, excelling at articulated and deformable object simulation. Widely used in Embodied AI research. 📄 🔧 ⭐
- [Genesis World](https://genesis-world.readthedocs.io/) - Multi-physics simulation platform covering rigid, deformable, and fluid bodies. 29k+ GitHub stars. 🔧 ⭐
- [SAPIEN ManiSkill](https://maniskill2.github.io/) - Unified framework for manipulation skill learning built on SAPIEN, with rich deformable object tasks. 🔧 📊 ⭐
- [Isaac Sim / Isaac Lab](https://developer.nvidia.com/isaac-sim) - NVIDIA's robotics simulation platform with GPU-accelerated deformable body support for large-scale Embodied AI training. 🔧 ⭐
- [MuJoCo](https://mujoco.org/) - Advanced physics engine with deformable body simulation support (since v3.x), widely adopted in robotics research. 🔧 ⭐
- [Taichi](https://github.com/taichi-dev/taichi) - High-performance parallel computing language, popular for differentiable soft body simulation in Embodied AI research. 🔧
- [Real2Render2Real: Scaling Robot Data Without Dynamics Simulation or Robot Hardware](https://arxiv.org/abs/2505.09601) - Scales robot training data via a Real→Render→Real pipeline without dynamics simulation or physical robot hardware. 📄 ⭐

## Deformable Object Manipulation Tasks

- [GarmentLab: A Unified Simulation and Benchmark for Garment Manipulation](https://arxiv.org/abs/2411.01200) - Unified simulation and benchmark for garment manipulation tasks — folding, hanging, dressing. 📄 📊 ⭐
- [ClothesNet: An Information-Rich 3D Garment Model Repository with Simulated Clothes Environment](https://arxiv.org/abs/2308.09987) - Large-scale 3D garment dataset with rich annotations for manipulation research. 📄 📊
- [RAPID: Rapid Adaptation of Particle Dynamics for Generalized Deformable Object Mobile Manipulation](https://arxiv.org/abs/2603.18246) - Rapid adaptation of particle dynamics for generalized deformable object mobile manipulation. 📄 ⭐
- [Benchmarking the Sim-to-Real Gap in Cloth Manipulation](https://arxiv.org/abs/2310.09543) - Systematic evaluation of the sim-to-real gap in cloth manipulation across different simulators. 📄 📊
- [SoftMimicGen: A Data Generation System for Scalable Robot Learning in Deformable Object Manipulation](https://arxiv.org/abs/2603.25725) - Extends MimicGen to deformable object manipulation, enabling scalable robot demonstration data generation. 📄 ⭐
- [DeformGen: Dynamics-Based Topology Augmentation for Deformable Manipulation Policy Learning](https://arxiv.org/abs/2606.25939) - Dynamics-based topology augmentation for deformable object manipulation policy learning, built on PhysTwin and Real2Render2Real. 📄

## Sim-to-Real Transfer

- [Learning to Manipulate Deformable Objects in the Real World via Sim2Real](https://arxiv.org/abs/2512.11070) - End-to-end sim2real pipeline for deformable object manipulation with domain randomization. 📄

## Benchmarks & Evaluation

- [SoftGym: Benchmarking Deep Reinforcement Learning for Deformable Object Manipulation](https://arxiv.org/abs/2011.07215) - Benchmark suite for deformable object manipulation (cloth, rope, fluid) with standardized RL environments. 📄 📊 ⭐

## 3D Asset Generation for Simulation

- [PhysX-3D: Physical-Grounded 3D Asset Generation](https://arxiv.org/abs/2507.12465) - End-to-end paradigm for physical-grounded 3D asset generation with PhysXNet dataset. 📄 ⭐
- [PhysX-Anything: Simulation-Ready Physical 3D Assets from Single Image](https://arxiv.org/abs/2511.13468) - Generate simulation-ready 3D assets with physical properties from a single image. 📄
- [PhysX-Omni: Unified Simulation-Ready Physical 3D Generation for Rigid, Deformable, and Articulated Objects](https://arxiv.org/abs/2605.21572) - First to include deformable objects in PhysX generation scope, unifying rigid/deformable/articulated. 📄 ⭐
- [DiffGI: Differentiable Geometry Images](https://arxiv.org/abs/2607.13365) - 3D garment generation via differentiable geometry images (no integrated physics yet). 📄
- [PhysTwin: Physics-Informed Reconstruction and Simulation of Deformable Objects from Videos](https://arxiv.org/abs/2503.17973) - Physics-informed reconstruction and simulation of deformable objects from video; a precursor to Real2Render2Real and DeformGen. 📄 ⭐
- [Gaussian Garments: Reconstructing Simulation-Ready Clothing with Photorealistic Appearance from Multi-View Video](https://arxiv.org/abs/2409.08189) - Reconstructs simulation-ready, photorealistic standalone garment assets from multi-view video. 📄

## Foundational Simulation Techniques

- [XRTailor (OpenXRLab)](https://github.com/openxrlab/xrtailor) - GPU-accelerated cloth simulation engine for large-scale data generation. 🔧
- [Position Based Dynamics (PBD)](https://matthias-research.github.io/pages/tenMinutePhysics/) - Classic introductory resource for Position Based Dynamics simulation. 🔧
- [ThinShellLab: Thin-Shell Object Manipulations With Differentiable Physics Simulations](https://arxiv.org/abs/2404.00451) - Fully differentiable simulation platform for thin-shell materials (paper, cloth) with varying bending stiffness. 📄 🔧
- [Second-Order FEM for Deformable Surfaces](https://dl.acm.org/doi/10.1145/3592430) - High-order finite element method for improving accuracy in cloth / thin-shell simulation. 📄

---

## Legend

| Tag | Meaning                   |
| --- | ------------------------- |
| 📄  | Paper                     |
| 🔧  | Tool / Framework / Engine |
| 📊  | Benchmark / Dataset       |
| ⭐   | Recommended / Important   |

---

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

**Quick way to add a paper:**

1. Edit `papers.yml` — add your entry under the appropriate section
2. Run `python generate.py`
3. Submit a Pull Request
