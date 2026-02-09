---
sidebar_position: 1
---

# 2D Compression Example

This tutorial demonstrates setting up a simple 2D compression simulation.

## Configuration

Create `compression.cfg`:

```toml
[sim]
problem = 1
dim = 2
t_final = 1.0e13
year = true
paraview = true
basename = results/compression

[solver]
cfl = 0.25

[control]
mscale = 1.0e6
gravity = 10.0
dyn_damping = true

[mesh]
mesh_file = data/meshes/2d_box.mesh
rs_levels = 2
order_v = 2
order_e = 1

[bc]
vbc_unit = cm/yr
vbc_x0 = 1
vbc_x0_val0 = -1.0
vbc_x1 = 1
vbc_x1_val0 = 1.0
winkler_foundation = true

[mat]
plastic = true
nmat = 1
rho = [2700.0]
lambda = [3.0e10]
mu = [3.0e10]
cohesion0 = [4.0e7]
cohesion1 = [4.0e6]
friction_angle0 = [30.0]
friction_angle1 = [15.0]
alpha0 = [0.0]
alpha1 = [0.5]
```

## Running

```bash
mpirun -np 4 ./laghost -i compression.cfg
```

## Expected Results

The simulation applies 1 cm/yr compression from both sides. You should observe:
- Elastic stress buildup initially
- Plastic failure when yield criterion is met
- Strain localization in shear zones
- Weakening of cohesion and friction with accumulated plastic strain
