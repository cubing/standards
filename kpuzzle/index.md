# `KPuzzle Definition` (DRAFT)

Version: 2018-09-06  
Author: Lucas Garron

## Overview

A `KPuzzle Definition` is a [JSON](https://json.org/) object that specifies a [twisty puzzle](https://en.wikipedia.org/wiki/Combination_puzzle), adapted from [KSolve](https://github.com/cubing/ksolve). The formats are interoperable, with notable differences in the details:

| -            | `KPuzzle Definition`           | KSolve Definition             |
|--------------|------------------------------|-------------------------------|
| Format       | JSON                         | Text                          |
| Permutations | 0-indexed                    | 1-indexed                     |
| Orientations | By slot ("post-permutation") | By pieces ("pre-permutation") |
| Features     | For now: orbits, moves | Orbits, moves, puzzle name, solved state, comments, derived moves (some versions), forbidden pairs/groups (some versions), bandaged pieces (some versions) |

This document currently errs on the side of a limited specification for now, with plans to extend it with more features in the future.

## Example

    {
      orbits: [
        {"name": "EDGE",   "numPieces": 12, "orientations": 2},
        {"name": "CORNER", "numPieces": 8,  "orientations": 3},
        {"name": "CENTER", "numPieces": 6,  "orientations": 4}
      ],
      moves: {
        "U": [
          {"permutation": [3, 0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11], "orientation": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
          {"permutation": [1, 2, 3, 0, 4, 5, 6, 7], "orientation": [0, 0, 0, 0, 0, 0, 0, 0]},
          {"permutation": [0, 1, 2, 3, 4, 5], "orientation": [1, 0, 0, 0, 0, 0]}
        ],
        "F": [
          {"permutation": [9, 1, 2, 3, 8, 5, 6, 7, 0, 4, 10, 11], "orientation": [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0]},
          {"permutation": [3, 1, 2, 5, 0, 4, 6, 7], "orientation": [1, 0, 0, 2, 2, 1, 0, 0]},
          {"permutation": [0, 1, 2, 3, 4, 5], "orientation": [0, 0, 1, 0, 0, 0]}
        ],
        ...
      }
    }

## Specification

Here is a specification of the `KPuzzle Definition` structure in JSON, roughly in TypeScript format (adapted [from `kpuzzle.js`](https://github.com/cubing/kpuzzle.js/blob/master/src/spec.ts)):

    // TODO: Convert to something like JSON Schema?

    // TODO: Rename to `perm` and `ori` to save space for serialized representations?
    interface OrbitTransformation {
      permutation: number[]
      orientation: number[]
    }

    interface Transformation {
      OrbitTransformation[]
    }

    interface OrbitDefinition {
      name: string
      numPieces: number
      orientations: number
    }

    interface KPuzzleDefinition {
      orbits: OrbitDefinition[]
      moves: {[key: string/* move name */]: Transformation}
    }

### Validation

For a definition to be valid, the following must hold:

Let:

- `numOrbits` be the length of `.orbits`
- `i` be a valid index `0 <= i < numOrbits` for an orbit
- `moveNames` be the keys of `.moves`
- `moveName` be any member of `moveNames`

Then:

- Names:
  - `.orbits[i].name` must contain only letters and underscores `[A-Za-z_]+`
  - `moveName` must contain only letters and underscores `[A-Za-z_]+` (TODO: Spec moves with layer prefixes, e.g. `2r`, `2-3r`)
  - The set of keys of `.moves[moveName]` must exactly match `orbitNames`
- Permutations:
  - `.moves[moveName][i].permutation` must be a permutation of the integers from `0` to `.orbits[i].numPieces - 1` (i.e. each integer in the range appears exactly once).
  - The length of `.moves[moveName][i].orientation` must be exactly `.orbits[i].numPieces`
  - Each member of `.moves[moveName][i].orientation` must be in the range from `0` to `.orbits[i].orientations - 1` (inclusive).

Notes:

- For most orbits of most puzzles, the sum of `.moves[moveName][i].orientation` is divisible by `.orbits[i].orientations`, even if partitioned by the orbits of `.moves[moveName][orbitName].permutation`. Programs may want to implement a convenient sanity check of this property for definition authors. However, note that some common definitions (e.g. 3x3x3 with centers) do *not* satisfy this, so programs MUST NOT implement this validation for arbitrary puzzles.
- KSolve allows omitting some information, e.g. specifying the permutation for an orbit without an orientation (which indicates a default orientation of 0 for every piece). As of right now, a `KPuzzle Definition` is not permitted to leave out information like this.

## TODO

- Definition of composition.
- Figure out where repeated moves, inverses, and metrics are handled.
- Features
  - Names: puzzle ID, definition name, definition version(?)
  - Derived variants: different solved state/indistinguishable pieces, ignored orientations/permutations for some orbits.
    - Note: `startPieces` is purposely missing from this spec for now, in case we can replace it with a more general concept.
  - Metadata: author, kpuzzle spec version
  - Axis-aware block moves
  - Derived moves (e.g. define U, x, y for 3x3x3, define all other moves based on those.)

