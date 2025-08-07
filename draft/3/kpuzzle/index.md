# Cubing Standard #3: KPuzzle (DRAFT)

Status: `DRAFT`  
Version: 2018-09-06  
Author: Lucas Garron  
Prescriptive or descriptive: prescriptive (this standard attempts to describe new conventions)

`KPuzzle` is a [JSON](https://json.org/) format for specifying [twisty puzzles](https://en.wikipedia.org/wiki/Combination_puzzle) based on how pieces are permuted and oriented. The format is adapted from [KSolve](https://github.com/cubing/ksolve), with a few notable differences in the details (see section [3.3](#33-comparison-with-ksolve)).

## 3.1 Puzzle Definition

The definition of a puzzle defines mainly which pieces it consists of, what state is considered solved, and what moves can be performed on those pieces (and how). In order to make this as practical as possibly, pieces are divided into orbits, and each piece is described using a position and an orientation. This is in contrast to a simple representation where all facelets are represented using a single permutation (although KPuzzle can be used for such representations).

### 3.1.1 Example

```json5
{
  "name": "3×3×3",
  "orbits": [
    {
      "orbitName": "EDGES",
      "numPieces": 12,
      "numOrientations": 2
    },
    {
      "orbitName": "CORNERS",
      "numPieces": 8,
      "numOrientations": 3
    },
    {
      "orbitName": "CENTERS",
      "numPieces": 6,
      "numOrientations": 4
    }
  ],
  "defaultPattern": {
    "EDGES": {
      "pieces": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      "orientation": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    "CORNERS": {
      "pieces": [0, 1, 2, 3, 4, 5, 6, 7],
      "orientation": [0, 0, 0, 0, 0, 0, 0, 0]
    },
    "CENTERS": {
      "pieces": [0, 1, 2, 3, 4, 5],
      "orientation": [0, 0, 0, 0, 0, 0],
      "orientationMod": [1, 1, 1, 1, 1, 1]
    }
  },
  "moves": {
    "U": {
      "EDGES": {
        "permutation": [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 11],
        "orientationDelta": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "CORNERS": {
        "permutation": [1, 2, 3, 0, 4, 5, 6, 7],
        "orientationDelta": [0, 0, 0, 0, 0, 0, 0, 0]
      },
      "CENTERS": {
        "permutation": [0, 1, 2, 3, 4, 5],
        "orientationDelta": [1, 0, 0, 0, 0, 0]
      }
    },
    // …
  },
  "derivedMoves": {
    "E": "Uw' U",
    // …
  }
}
```

### 3.1.2 Structure

Here is a specification of the `KPuzzle Definition` structure in JSON, roughly in TypeScript format (adapted [from `kpuzzle.js`](https://github.com/cubing/kpuzzle.js/blob/master/src/spec.ts)):

```ts
export type KPatternData = Record<string, KPatternOrbitData>;
export interface KPatternOrbitData {
  pieces: number[];
  orientation: number[];
  orientationMod?: number[];
}

export type KTransformationData = Record<string, KTransformationOrbitData>;
export interface KTransformationOrbitData {
  permutation: number[];
  orientationDelta: number[];
}

export interface KPuzzleOrbitDefinition {
  orbitName: string;
  numPieces: number;
  numOrientations: number;
}

export interface KPuzzleDefinition {
  name: string;
  orbits: KPuzzleOrbitDefinition[];
  defaultPattern: KPatternData;
  moves: Record<string, KTransformationData>;
  derivedMoves?: Record<string, string>;
}
```

### 3.1.3 Validation

For a definition to be valid, the following must hold:

Let:

- `orbitNames` be the set of of `.orbitName` field values of `.orbits` entries, and `orbitIndex` and `orbitName` be values such that `.orbitNames[orbitIndex].orbitName` is `orbitName`.
- `moveNames` be the keys of `.moves`, and `moveName` be any key.

Then:

- Names:
  - `orbitName` must contain only letters, digits, and underscores `[A-Za-z0-9_]+`.
  - `moveName` must contain only letters and underscores `[A-Za-z_]+`, prefixed either by:
    - Nothing (e.g. `R` or `Rw`)
    - A single non-negative integer `[1-9][0-9]*` (e.g. `2R` or `7ur`)
    - A range specified by two non-negative integers `([1-9][0-9]*)-([1-9][0-9]*)` where the first is ≤ the second (e.g. `2-4r`)
  - The set of keys of `.moves[moveName]` must exactly match `orbitNames`.
- Pattern data:
  - `pieces` must contain `.orbits[orbitIndex].numPieces` entries, and each must be a non-negative integer.
  - If `orientationDelta` is populated, it must contain `.orbits[orbitIndex].numPieces` integer entries, and each must be either 0 or a factor of the number `.orbits[orbitIndex].orientations`.
  - `orientation` must contain `.orbits[orbitIndex].numPieces` entries and for each entry at index `i`:
    - If `orientationDelta[i]` is populated and has a value other than `0`, then `orientation[i]` must be an integer in the range from `0` `orientationDelta[i]`.
    - Else, `orientation[i]` must be an integer in the range from `0` to `.orbits[orbitIndex].orientations - 1`.
- Permutations:
  - `.moves[moveName][orbitName].permutation` must be a permutation of the integers from `0` to `.orbits[orbitIndex].numPieces - 1` (i.e. each integer in the range appears exactly once).
  - The length of `.moves[moveName][orbitName].orientationDelta` must be exactly `.orbits[orbitIndex].numPieces`.
  - Each entry of `.moves[moveName][orbitName].orientationDelta` must be in the range from `0` to `.orbits[orbitIndex].orientations - 1` (inclusive).

Notes:

- For most orbits of most puzzles, the sum of `.moves[moveName][orbitName].orientation` is divisible by `.orbits[orbitName].orientations`, even if partitioned by the orbits of `.moves[moveName][orbitName].permutation`. Programs may want to implement a convenient check of this property for definition authors. However, note that some common definitions (e.g. 3x3x3 with centers) do *not* satisfy this, so programs MUST NOT implement this validation for arbitrary puzzles.
- KSolve allows omitting some information, such as leaving out an orbit or leaving out the permutation/orientation of an orbit to indicate that it is unchanged. As of right now, a `KPuzzleDefinition` is not permitted to leave out information like this.

## 3.3 Comparison with KSolve

The `KPuzzle` format is inspired by KSolve, but has the following differences:

| -            | `KPuzzle Definition`         | KSolve Definition                                                                                                                                          |
| ------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format       | JSON                         | Text                                                                                                                                                       |
| Permutations | 0-indexed                    | 1-indexed                                                                                                                                                  |
| Orientations | By slot ("post-permutation") | By pieces ("pre-permutation")                                                                                                                              |
| Features     | For now: orbits, moves       | Orbits, moves, puzzle name, solved state, comments, derived moves (some versions), forbidden pairs/groups (some versions), bandaged pieces (some versions) |

## TODO

- Definition of composition.
- Figure out where repeated moves, inverses, and metrics are handled.
- Features
  - Names: puzzle ID, definition name, definition version(?)
  - Metadata: author, kpuzzle spec version
  - Axis-aware block moves
  - Derived moves (e.g. define U, x, y for 3x3x3, define all other moves based on those.)

