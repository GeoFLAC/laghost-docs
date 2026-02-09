---
sidebar_position: 1
---

# Theory Overview

Laghost solves the time-dependent momentum balance equation in a moving Lagrangian frame:

$$
\rho\dot{\mathbf{u}}=\nabla\cdot\boldsymbol{\sigma}+\rho\mathbf{g}
$$

where $\rho$ is the material density, $\mathbf{u}$ is the velocity vector, $\boldsymbol{\sigma}$ is the Cauchy stress tensor, and $\mathbf{g}$ is the gravitational acceleration.

## Discretization

The momentum equation is discretized using high-order finite elements:

- **Velocity and position**: Continuous high-order elements (H1 space)
- **Stress, energy, composition**: Discontinuous elements (L2 space)

The semi-discrete system becomes:

$$
m_{a}\mathbf{a}_{a}=\mathbf{f}_{a}=\mathbf{f}_{a}^{int}+\mathbf{f}_{a}^{bc}+\mathbf{f}_{a}^{ext}
$$

where $m_a$ is the lumped nodal mass, $\mathbf{a}_a$ is acceleration, and $\mathbf{f}_a$ is the total force.

## Key Techniques

### Dynamic Relaxation

For quasi-static tectonic modeling, we apply Cundall's damping:

$$
\mathbf{f}_{damped} = \mathbf{f} - 0.8 \cdot \text{sgn}(\mathbf{u}) \cdot |\mathbf{f}|
$$

This damps oscillations when force and velocity are anti-parallel, and amplifies when parallel.

### Mass Scaling

To achieve year-length time steps, we scale density such that:

$$
u_{\text{elastic}}=\sqrt{K_{s}/\rho_{f}}=c_{1} \cdot u_{\text{tectonic}}
$$

where $c_1 \sim 10^4$ to $10^8$ is the scaling factor and $\rho_f$ is the fictitious density.

## Further Reading

- [Constitutive Models](./constitutive) - Mohr-Coulomb plasticity
- [Dynamic Relaxation](./dynamicrelaxation) - Cundall damping details
- [Mass Scaling](./massscaling) - Time step optimization
- [Time Integration](./timeintegration) - Velocity and position update