# Cubing Standard #7: 4D Projection and Basic Hypercube Twists (DRAFT)

Status: `DRAFT`  
Prescriptive or descriptive: descriptive (this standard attempts to describe existing conventions)

This standard describes the basic moves for a N×N×N×N facet-turning hypercube.

## 7.1 Polytope elements

When possible, pieces are named according to the rank of the element of the polytope they correspond to. Let _d_ be the rank (i.e., dimension) of the puzzle.

| Rank of element | Name   |
| --------------- | ------ |
| 0               | Corner |
| 1               | Edge   |
| 2               | Face   |
| 3               | Cell   |
| _d_ - 3         | Peak   |
| _d_ - 2         | Ridge  |
| _d_ - 1         | Facet  |

These terms are taken from [Polytope - Wikipedia](https://en.m.wikipedia.org/wiki/Polytope#Elements), with the exception of "corner" instead of "vertex."

The terms "corner" and "edge" are preferred over "peak," "ridge," and "facet." For puzzles in 4 or more dimensions, the terms "peak", "ridge", and "facet" are preferred over "face" and "cell."

For a 4D hypercube, the terms "corner," "edge," "ridge," and "facet" are preferred, although "cell" is also in common use. In 4D specifically, "facet" and "cell" are interchangeable.

## 7.1 Facets

There are 8 facets of a 4-dimensional hypercube, along with the color in standard orientation:

| Facet letter | Facet name | Vector     | Color  |
| ------------ | ---------- | ---------- | ------ |
| `R`          | Right      | positive X | Red    |
| `L`          | Left       | negative X | Orange |
| `U`          | Up         | positive Y | White  |
| `D`          | Down       | negative Y | Yellow |
| `F`          | Front      | positive Z | Front  |
| `B`          | Back       | negative Z | Back   |
| `O`          | Out        | positive W | Pink   |
| `I`          | In         | negative W | Purple |

Note: historically, `K` ("kata") has been used instead of `O`, and `A` ("ana") or `T` ("top") have been used instead of `I`. It is recommended to avoid these because it is confusing which one corresponds to which cell. Furthermore, `A` conflicts with 5D notation (`A` for "anterior").

These also define the standard projection:

- Positive X pointing to the right
- Positive Y pointing up
- Positive Z pointing forward toward the 3D camera
- Positive W pointing forward toward the 4D camera

The `O` facet is typically hidden, but the other seven facets are typically visible and spaced apart. The default 3D camera may have a rotational offset applied to give a better view of the 7 facets as follows:

- `R` may point more forward and down
- `F` may point more left and down
- `U` may point more forward

## 7.2 Clockwise Twists

Twists are named using 2, 3, or 4 letters, each corresponding to a facet. All letters are uppercase, with no space or punctuation between them. The first letter indicates which facet is rotated; the remaining letters describe the polytope element that is fixed by the twist. Letters other than the first one may be specified in any order. The twist occurs in a 2D plane, over the minimum nonzero angle necessary to restore the puzzle to its original shape.

| Twist type   | Number of letters | Angle | Example |
| ------------ | ----------------- | ----- | ------- |
| Ridge twist  | 2                 | 90°   | `IR`    |
| Edge twist   | 3                 | 180°  | `OUR`   |
| Corner twist | 4                 | 120°  | `DUFR`  |

Rotations appear clockwise when the 4D camera is facing along the vector of the first facet and the 3D camera is facing along the _opposite_ vector from the polytope element described by the second facet. For example, the twist `IR` twists a layer of the `I` facet from positive Z to positive Y, which keeps the vector along the X axis fixed.

Examples:

| Twist name | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `IR`       | `R` twists 90° from `F` to `U`                                           |
| `OUR`      | `O` twists 180°, such that `U` and `R` swap and `F` and `B` swap         |
| `DUFR`     | `D` twists 120° clockwise, such that `F` goes to `I` and `I` goes to `R` |
|            |                                                                          |

In software with mouse controls, these twists are typically executed by right-clicking on the described sticker. For example, `DUFR` is executed by right-clicking on the `D` sticker of the `DUFR` corner piece.

## 7.3 Double Twists

Ridge twists may be doubled by appending `2` to the move. For example, `DF2` denotes the `DF` twist repeated twice.

Edge twists have order 3 and so do not need to be doubled.

Corner twists have order 2 and so do not need to be doubled.

## 7.4 Counterclockwise Twists

Twists may be suffixed with `'` to invert them. Alternatively, all but the first letter may be replaced with the letter of the opposite facet. For example, the inverse of `IUR` is `IUR'` or `IDL`.

## 7.5 Layers

Twists may be prefixed with a layer or layer range using SiGN Notation.

## 7.5 Slice Twists

There are four middle slice layers. Slice twists are constructed from facet twists on a parallel facet according to the following table.

| Letter | Mnemonic     | Parallel facet |
| ------ | ------------ | -------------- |
| `M`    | "Middle"     | `L`            |
| `E`    | "Equitorial" | `D`            |
| `S`    | "Standing"   | `F`            |
| `P`    | "Planetary"  | `O`            |

For example, `MD` is equivalent to `2LD`

## 7.6 xyz Notation

Ridge twists may instead be specified using a facet letter followed by a lowercase letter `x`, `y`, or `z`. Each combination of a facet and lowercase `x`/`y`/`z` maps to a ridge turn based on its projection in 3D. In the following table, `_` represents the facet letter.

| Facet | `_x` | `_y` | `_z` |
| ----- | ---- | ---- | ---- |
| `R`   | `RO` | `RU` | `RF` |
| `L`   | `LI` | `LU` | `LF` |
| `U`   | `UR` | `UO` | `UF` |
| `D`   | `DR` | `DI` | `DF` |
| `F`   | `FR` | `FU` | `FO` |
| `B`   | `BR` | `BU` | `BI` |
| `O`   | `OL` | `OD` | `OB` |
| `I`   | `IR` | `IU` | `IF` |

For example, `Fz` is equivalent to `FO`.

This notation is generally preferred for puzzle keybinds, for Melinda's 2×2×2×2, and for other physical puzzles. It should be avoided otherwise.

## 7.6.1 Legacy xyz Notation

Edge and corner twists may be represented using two `x`/`y`/`z` letters, where the last one may be followed by the digit `2` (which applies only to the last letter), but this is discouraged. It is preferred to group multiple ridge twists using parentheses. For example, `Ozx2` should instead be represented as `(Oz Ox2)` or simply `OUFR`.
