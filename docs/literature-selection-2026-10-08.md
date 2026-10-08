# Literature selection — 2026-10-08

## Scope and evidence

This update expands the project from simulation to deformable object simulation and manipulation. It adds 13 manipulation-method papers and two surveys from the user's local Zotero library, retaining all 44 existing resources and the original six sections. The resulting list contains 59 unique resources in eight sections.

The library was queried read-only. Titles, identifiers, and abstracts were screened against the existing list. Public arXiv records were checked for all 15 selected additions. Duplicate records, including UniGarmentManip, were collapsed by identifier. This is metadata and abstract screening, not a complete paper reading, code audit, or experimental reproduction. No private notes, database exports, or attachment paths are published.

For new entries, `year` records the first arXiv submission year rather than a revision date or later publication year. FoldNet therefore uses 2025 despite its 2026 revision and journal record; DeformPAM uses 2024 despite ICRA 2025. No new recommended/star endorsements are assigned. Dataset tags describe a contribution and do not certify current download availability.

## Selected additions

| Section | Resource | Reason for inclusion |
| --- | --- | --- |
| Manipulation methods | [Cloth Region Segmentation for Robust Grasp Selection](https://arxiv.org/abs/2008.05626) | Perception and grasping: segments cloth edges and corners from depth images and selects grasp poses, with real-robot grasp evaluation. |
| Manipulation methods | [Center Direction Network for Grasping Point Localization on Cloths](https://arxiv.org/abs/2408.14456) | Perception and grasping: CeDiRNet-3DoF localizes cloth grasp points and provides the ViCoS Towel Dataset; evaluates perception rather than a complete manipulation pipeline. |
| Manipulation methods | [Visuotactile Affordances for Cloth Manipulation with Local Control](https://arxiv.org/abs/2212.05108) | Visuotactile control: grasps cloth edges using visual and tactile affordances, then slides along an edge to a corner with tactile feedback. |
| Manipulation methods | [UniGarmentManip: A Unified Framework for Category-Level Garment Manipulation via Dense Visual Correspondence](https://arxiv.org/abs/2405.06903) | General garment manipulation: learns category-level dense correspondence to guide unfolding, folding, and hanging with one or few demonstrations. |
| Manipulation methods | [CLASP: General-Purpose Clothes Manipulation with Semantic Keypoints](https://arxiv.org/abs/2507.19983) | General garment manipulation: connects VLM task plans to keypoint-conditioned skills for folding, flattening, hanging, and placing, with dual-arm real-robot evaluation. |
| Manipulation methods | [Cloth Funnels: Canonicalized-Alignment for Multi-Purpose Garment Manipulation](https://arxiv.org/abs/2210.09347) | Tidying and folding: combines dynamic flings and pick-and-place actions to canonicalize garment configurations before real-world ironing and folding. |
| Manipulation methods | [FoldNet: Learning Generalizable Closed-Loop Policy for Garment Folding via Keypoint-Driven Asset and Demonstration Synthesis](https://arxiv.org/abs/2505.09109) | Tidying and folding: synthesizes keypoint-annotated garment assets and demonstrations and uses KG-DAgger recovery data for closed-loop folding policies evaluated in simulation and reality. |
| Manipulation methods | [GarmentPile: Point-Level Visual Affordance Guided Retrieval and Adaptation for Cluttered Garments Manipulation](https://arxiv.org/abs/2503.09243) | Cluttered garments: learns point-level affordances and adapts entangled piles to support garment retrieval, with simulation and real-world evaluation. |
| Manipulation methods | [GarmentPile++: Affordance-Driven Cluttered Garments Retrieval with Vision-Language Reasoning](https://arxiv.org/abs/2603.04158) | Cluttered garments: combines vision-language reasoning, segmentation, affordances, and dual-arm coordination for language-guided garment retrieval. |
| Manipulation methods | [DeformPAM: Data-Efficient Learning for Long-horizon Deformable Object Manipulation via Preference-based Action Alignment](https://arxiv.org/abs/2410.11584) | Policy learning: ranks diffusion-generated action candidates using a human-preference reward model for long-horizon real-world deformable manipulation. |
| Manipulation methods | [DeMaVLA: A Vision-Language-Action Foundation Model for Generalizable Deformable Manipulation](https://arxiv.org/abs/2605.31286) | Policy learning: combines real-world demonstration pretraining, flow-matching actions, and human-in-the-loop corrective data for garment folding across categories. |
| Manipulation methods | [Learning to Rearrange Deformable Cables, Fabrics, and Bags with Goal-Conditioned Transporter Networks](https://arxiv.org/abs/2012.03385) | Multiple object types: uses image-goal-conditioned Transporter Networks for multi-step cable, fabric, and bag manipulation, evaluated in simulation and physical experiments. |
| Manipulation methods | [DextAIRity: Deformable Manipulation Can be a Breeze](https://arxiv.org/abs/2203.01197) | Airflow-assisted manipulation: combines grasping and closed-loop blowing actions for cloth unfolding and bag opening on a real three-arm system. |
| Surveys | [A Survey on Robotic Manipulation of Deformable Objects: Recent Advances, Open Challenges and New Frontiers](https://arxiv.org/abs/2312.10419) | Survey: reviews deformable-object perception, modeling, and manipulation, emphasizing data-driven approaches and open research challenges. |
| Surveys | [Unfolding the Literature: A Review of Robotic Cloth Manipulation](https://arxiv.org/abs/2407.01361) | Survey: reviews how textile variation is addressed in modeling, perception, benchmarking, and manipulation, and identifies generalization challenges. |

## Reading guide and limits

- Start with the surveys for perception, modeling, control, and textile variation.
- Use cloth-region segmentation and CeDiRNet for grasp perception. CeDiRNet's perception benchmark is not evidence of complete robotic task success.
- Compare UniGarmentManip's dense correspondence with CLASP's semantic keypoints for general garment manipulation.
- Use Cloth Funnels and FoldNet for canonicalization and folding; use GarmentPile and GarmentPile++ for cluttered retrieval.
- Compare DeformPAM's preference-guided action selection with DeMaVLA's demonstration and corrective-data training.
- Use Transporter Networks and DextAIRity to broaden task coverage to cables, bags, and airflow-assisted manipulation.

The new methods section remains garment-heavy. Cable and volumetric-soft-object manipulation are not comprehensively covered. Simulated training, perception evaluation, and real-robot validation are different types of evidence; the descriptions identify them where supported by the public abstracts. Reported performance is not independently validated.

## Deferred candidates

Learning Visible Connectivity Dynamics for Cloth Smoothing, Diffusion Dynamics Models with Generative State Estimation for Cloth Manipulation, and Learning Visual Feedback Control for Dynamic Cloth Folding are relevant follow-up candidates; they are outside this approved 15-paper change set. General rigid-object dexterity and standalone tactile sensors are excluded without a direct deformable-manipulation contribution. Pure garment graphics remain outside the robotics focus.

## Review status

SELF_REVIEWED_PROVISIONAL. An evidence-grounded self-review checked direct relevance, duplicate identifiers, the distinction between perception and manipulation evidence, and first-submission-year conventions. No external cross-model review or experimental validation was performed. Existing entries were retained and were not comprehensively re-audited.
