---
sidebar_position: 2
---

# Configuration

Laghost uses TOML-format configuration files parsed by CLI11.

## Configuration File Structure

```toml
[sim]
problem = 1
dim = 3
t_final = 1.0e6
max_tsteps = -1
year = true
visualization = false
vis_steps = 1000
paraview = true
basename = results/Laghost

[solver]
ode_solver_type = 7
cfl = 0.5
cg_tol = 1.0e-10
cg_max_iter = 300

[control]
pseudo_transient = false
lithostatic = true
init_dt = 1.0
mscale = 5.0e5
gravity = 10.0
dyn_damping = true
dyn_factor = 0.8

[mesh]
mesh_file = data/meshes/box.mesh
rs_levels = 2
rp_levels = 0
order_v = 2
order_e = 1

[bc]
vbc_unit = cm/yr
vbc_x0 = 1
vbc_x0_val0 = -1.0
vbc_x1 = 1
vbc_x1_val0 = 1.0
winkler_foundation = true
winkler_rho = 3200.0

[mat]
plastic = true
viscoplastic = false
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

## Key Parameters

### Simulation `[sim]`
| Parameter | Description | Default |
|-----------|-------------|---------|
| `dim` | Spatial dimension (2 or 3) | 3 |
| `t_final` | Final simulation time (seconds) | 1.0 |
| `year` | Use years for output instead of seconds | false |
| `paraview` | Enable ParaView output | true |

### Control `[control]`
| Parameter | Description | Default |
|-----------|-------------|---------|
| `mscale` | Mass scaling factor | 5.0e5 |
| `gravity` | Gravitational acceleration | 10.0 |
| `dyn_damping` | Enable dynamic relaxation | true |
| `dyn_factor` | Damping coefficient | 0.8 |

### Materials `[mat]`
| Parameter | Description |
|-----------|-------------|
| `nmat` | Number of materials |
| `rho` | Density array [kg/m³] |
| `lambda`, `mu` | Lamé parameters [Pa] |
| `cohesion0`, `cohesion1` | Cohesion before/after weakening [Pa] |
| `friction_angle0`, `friction_angle1` | Friction angles [degrees] |
| `alpha0`, `alpha1` | Plastic strain for weakening start/end |
