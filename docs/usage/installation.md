---
sidebar_position: 1
---

# Installation

## Prerequisites

Laghost requires the following dependencies:

- C++ compiler with C++14 support
- MPI implementation (OpenMPI, MPICH, etc.)
- [MFEM](https://mfem.org) with parallel support
- [hypre](https://github.com/hypre-space/hypre)
- [METIS](http://glaros.dtc.umn.edu/gkhome/metis/metis/overview)
- [gslib](https://github.com/Nek5000/gslib) (for remeshing)

CLI11 is included as a header-only library in `src/extern/`.

## Building MFEM

```bash
# Clone and build hypre
git clone https://github.com/hypre-space/hypre.git
cd hypre/src
./configure --disable-fortran
make -j4
cd ../..

# Clone and build METIS
wget http://glaros.dtc.umn.edu/gkhome/fetch/sw/metis/metis-5.1.0.tar.gz
tar xzf metis-5.1.0.tar.gz
cd metis-5.1.0
make config shared=1
make -j4
cd ..

# Clone and build gslib
git clone https://github.com/Nek5000/gslib.git
cd gslib
make -j4
cd ..

# Clone and build MFEM
git clone https://github.com/mfem/mfem.git
cd mfem
make parallel -j4 HYPRE_DIR=../hypre/src/hypre METIS_DIR=../metis-5.1.0 GSLIB_DIR=../gslib/build
cd ..
```

## Building Laghost

```bash
git clone https://github.com/GeoFLAC/Laghost.git
cd Laghost
make -j4
```

The executable `laghost` will be created in the Laghost directory.

## Verify Installation

```bash
./laghost --help
```
