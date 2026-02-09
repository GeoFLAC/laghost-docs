---
sidebar_position: 3
---

# Running Laghost

## Basic Usage

Run with default configuration:
```bash
./laghost
```
This uses `./defaults.cfg` if present.

Run with custom configuration:
```bash
./laghost -i ./my_config.cfg
```

Run in parallel with MPI:
```bash
mpirun -np 8 ./laghost -i ./my_config.cfg
```

## Command-Line Options

| Option | Description |
|--------|-------------|
| `-i <file>` | Input configuration file |
| `-dim <n>` | Spatial dimension (2 or 3) |
| `-tf <time>` | Final simulation time |
| `-ms <steps>` | Maximum number of time steps |
| `-rs <levels>` | Serial mesh refinement levels |
| `-rp <levels>` | Parallel mesh refinement levels |
| `-ok <order>` | Kinematic (velocity) FE order |
| `-ot <order>` | Thermodynamic (stress) FE order |
| `-cfl <value>` | CFL number |
| `-vis` / `-no-vis` | Enable/disable GLVis visualization |
| `-paraview` / `-no-paraview` | Enable/disable ParaView output |
| `-h` | Show help |

## Output

Laghost creates output in the directory specified by `sim.basename`:

```
results/Laghost/
├── Laghost.pvd           # ParaView collection file
├── Laghost_0000/         # Time step 0 data
├── Laghost_0001/         # Time step 1 data
└── ...
```

## Visualization

Open `results/Laghost/Laghost.pvd` in ParaView to visualize:
- Velocity field
- Stress components
- Accumulated plastic strain (alpha)
- Material composition
