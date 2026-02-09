---
sidebar_position: 1
---

# Introduction to Laghost

**Laghost** (LAGrangian High-Order Solver for Tectonics) is a Lagrangian finite element code for simulating long-term tectonic deformation. It extends [Laghos](https://github.com/CEED/Laghos) (a high-order hydrodynamics mini-app) to geodynamic applications.

## Key Features

### High-Order Finite Elements
Unlike traditional low-order codes, Laghost uses **arbitrary-order** finite elements via [MFEM](https://mfem.org):
- Velocity and position: continuous high-order (default Q2)
- Stress, energy, composition: discontinuous high-order (default Q1)

### Constitutive Models
- **Elastic** compressible medium
- **Mohr-Coulomb plasticity** with strain weakening
- **Viscoplasticity** (rate-dependent)
- Linear weakening of cohesion, friction, and dilation angles

### Numerical Techniques
- **Dynamic relaxation** for quasi-static solutions
- **Mass scaling** for year-length time steps
- **TMOP remeshing** for mesh quality improvement
- **Winkler foundation** boundary conditions

### Parallelism
- MPI-based domain decomposition via MFEM
- GPU acceleration support (CUDA/HIP/SYCL via MFEM device backends)

## Relationship to DynEarthSol

Laghost shares theoretical foundations with [DynEarthSol](https://github.com/GeoFLAC/DynEarthSol):

| Aspect | DynEarthSol | Laghost |
|--------|-------------|---------|
| FE basis | P1 (linear) | High-order (Q2+) |
| Mesh | Triangles/tetrahedra | Quads/hexahedra (also triangles/tetrahedra) |
| Core library | Custom | MFEM |
| Remeshing | [MMG](https://mmgtools.org) | TMOP |
| Config format | TOML | TOML (CLI11) |

## Getting Started

- [Installation](./usage/installation) - Building from source
- [Configuration](./usage/configuration) - Setting up input files
- [Running](./usage/running) - Executing simulations

## Links

- [Laghost on GitHub](https://github.com/GeoFLAC/Laghost)
- [MFEM](https://mfem.org)
- [Issue Tracker](https://github.com/GeoFLAC/Laghost/issues)
