# Literature selection — 2026-09-15

## Scope and review method

This update adds 19 resources to the existing 25-resource list, retaining its six sections. The emphasis is deformable simulation for embodied AI: physical or learned dynamics, simulation-backed manipulation, transfer, evaluation, and simulation-ready assets.

The local reference library was queried read-only. It contained 162 PDF files, which is not a count of unique papers. Titles and identifiers were screened first; the 19 selected papers were checked against their local PDF abstract and method pages and their public arXiv records. This was targeted screening, not a full reading or reproduction of every paper in the library. Duplicate library records were collapsed when selecting additions. No PDFs, personal notes, database contents, or local attachment paths are published.

For new entries, `year` records the first arXiv submission year, not the latest PDF revision or a later conference/journal year. A benchmark tag describes the paper's contribution; it does not certify that code or data are currently downloadable. No new `star` endorsements are assigned. SoftVTBench retains the public record's Early Version designation.

## Selected additions

| Section | Resource | Reason for inclusion |
| --- | --- | --- |
| 仿真环境与平台 | [RFUniverse: A Multiphysics Simulation Platform for Embodied AI](https://arxiv.org/abs/2202.00199) | Multiphysics environment for household robot learning, including soft-body interactions, fluids, airflow, and heat transfer. |
| 柔性物体操作任务 | [DexGarmentLab: Dexterous Garment Manipulation Environment with Generalizable Policy](https://arxiv.org/abs/2505.11032) | Bimanual dexterous garment simulation with structural-correspondence demonstration generation and a hierarchical manipulation policy. |
| 柔性物体操作任务 | [DexDeform: Dexterous Deformable Object Manipulation with Human Demonstrations and Differentiable Physics](https://arxiv.org/abs/2304.03223) | Learns dexterous soft-object skills from human demonstrations and refines planned actions with differentiable physics. |
| 柔性物体操作任务 | [GraphGarment: Learning Garment Dynamics for Bimanual Cloth Manipulation Tasks](https://arxiv.org/abs/2503.05817) | Learns garment dynamics in simulation with graph networks and uses a residual model for real-world bimanual garment hanging. |
| Sim-to-Real 迁移 | [SimWeaver: Zero-Shot RGB Sim-to-Real for Deformable Manipulation](https://arxiv.org/abs/2606.15338) | Combines measurement-backed cloth simulation, topology-aware trajectory synthesis, and photometric augmentation for RGB policy transfer. |
| Sim-to-Real 迁移 | [SIM1: Physics-Aligned Simulator as Zero-Shot Data Scaler in Deformable Worlds](https://arxiv.org/abs/2604.08544) | Real-to-sim-to-real data generation with scene digitization, calibrated deformable dynamics, and filtered trajectory synthesis. |
| Sim-to-Real 迁移 | [Sim-to-Real Gentle Manipulation of Deformable and Fragile Objects with Stress-Guided Reinforcement Learning](https://arxiv.org/abs/2510.25405) | Uses stress-penalized rewards and a rigid-to-deformable curriculum to transfer gentle manipulation policies to fragile real objects. |
| 基准测试与评估 | [DaXBench: Benchmarking Deformable Object Manipulation with Differentiable Physics](https://arxiv.org/abs/2210.13066) | JAX-based differentiable benchmark covering cloth, rope, and fluids for planning, imitation learning, and reinforcement learning. |
| 基准测试与评估 | [Real Garment Benchmark (RGBench): A Comprehensive Benchmark for Robotic Garment Manipulation featuring a High-Fidelity Scalable Simulator](https://arxiv.org/abs/2511.06434) | Combines garment meshes, a cloth simulator, and real-motion measurements to evaluate physical simulation fidelity. |
| 基准测试与评估 | [MoDeSuite: Robot Learning Task Suite for Benchmarking Mobile Manipulation with Deformable Objects](https://arxiv.org/abs/2507.21796) | Mobile manipulation task suite for deformable objects, with reinforcement and imitation learning baselines and real-robot transfer experiments. |
| 基准测试与评估 | [SoftVTBench: A Safety-Aware Visuo-Tactile Benchmark for Physically Constrained Robotic Manipulation of Deformable Objects (Early Version)](https://arxiv.org/abs/2607.04234) | Early-version visuo-tactile benchmark using FEM deformation states to distinguish task success from physically safe manipulation. |
| 基准测试与评估 | [Real-to-Sim Robot Policy Evaluation with Gaussian Splatting Simulation of Soft-Body Interactions](https://arxiv.org/abs/2511.04665) | Reconstructs soft-body digital twins from videos and evaluates robot policies using physics simulation and Gaussian splatting rendering. |
| 基准测试与评估 | [PokeFlex: A Real-World Dataset of Volumetric Deformable Objects for Robotics](https://arxiv.org/abs/2410.07688) | Real-world multimodal deformation data with meshes, RGB-D observations, and interaction forces for learning and validating deformable models. |
| 面向仿真的 3D 资产生成 | [EMPM: Embodied MPM for Modeling and Simulation of Deformable Objects](https://arxiv.org/abs/2601.17251) | Reconstructs deformable objects from RGB-D videos and identifies material parameters with differentiable MPM and online sensory feedback. |
| 面向仿真的 3D 资产生成 | [NeuSpring: Neural Spring Fields for Reconstruction and Simulation of Deformable Objects from Videos](https://arxiv.org/abs/2511.08310) | Reconstructs deformable digital twins using piecewise spring topology and neural spring fields for spatially varying physical properties. |
| 面向仿真的 3D 资产生成 | [Image2Garment: Simulation-ready Garment Generation from a Single Image](https://arxiv.org/abs/2601.09658) | Predicts garment geometry and fabric physics from a single image using material attributes and measured material-to-physics mappings. |
| 基础仿真技术 | [DiffCloth: Differentiable Cloth Simulation with Dry Frictional Contact](https://arxiv.org/abs/2106.05306) | Differentiable cloth simulation with dry frictional contact for parameter identification, assisted dressing, and control. |
| 基础仿真技术 | [AdaptiGraph: Material-Adaptive Graph-Based Neural Dynamics for Robotic Manipulation](https://arxiv.org/abs/2407.07889) | Material-conditioned graph dynamics with online physical-property estimation for adapting manipulation to unfamiliar deformable materials. |
| 基础仿真技术 | [Learning Mesh-Based Simulation with Graph Networks](https://arxiv.org/abs/2010.03409) | MeshGraphNets learns mesh-based dynamics, including cloth, with adaptive discretization and mesh-space and world-space interactions. |

## Project reading guide

- Start with simulation platforms and foundational methods to choose a representation: cloth meshes, particles, spring-mass systems, or continuum models.
- Use the manipulation section for task and policy designs; compare transfer assumptions in the Sim-to-Real section before attempting hardware deployment.
- Use benchmarks to distinguish task completion, physical fidelity, and deformation safety. These are different evaluation goals.
- Use the asset section for geometry plus physical-property reconstruction; a visually plausible asset alone is not evidence of simulation accuracy.

## Deferred candidates and exclusions

These are screening decisions for this update, not claims that the papers lack merit.

- DeMaVLA and DeformPAM: relevant to deformable manipulation, but the metadata emphasizes real-world policy learning. Deferred to a dedicated policy-focused pass so this update remains centered on simulation.
- DextAIRity: promising airflow-based manipulation; deferred for a fuller review of its simulation and training setup.
- FLASH, Particle-Grid Neural Dynamics, Diffusion Dynamics Models, and cloth parameter-identification work: relevant next candidates; not promoted from title/abstract screening to the main list without the same targeted method review.
- DiffAvatar, Dress-1-to-3, and SimAvatar: relevant simulation-ready garment work; deferred for a comparative review of physical-parameter recovery and robotics applicability.
- General VLA models, rigid-only benchmarks, multi-agent planning, and general video generation: not selected unless a direct deformable-simulation contribution is established.
- Existing resources and repeated library records (for example SoftGym, MoDeSuite, DaXBench, PokeFlex, and DiffCloth) are represented once in the main list.

## Limits

Existing entries were retained; this update does not constitute a complete bibliographic or claim audit of the older list. Reported paper results are not independently reproduced. Revisit tool availability and physical-model assumptions before choosing a simulator for experiments.
