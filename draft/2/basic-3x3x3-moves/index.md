# Cubing Standard #2: Basic 3x3x3 Moves

Status: `DRAFT`

This standard describes the basic moves for a 3x3x3 cube.

The move names in this standard originate from David Singmaster, around 1981 [[1]](#ref1).

## 2.1 Basic Moves

There are 18 basic moves:

<table>
<thead><tr><td></td><td colspan=6>Layer</td></tr></thead>
<tbody>
  <tr><td>Clockwise</td><td><code>U</code></td><td><code>L</code></td><td><code>F</code></td><td><code>R</code></td><td><code>B</code></td><td><code>D</code></td></tr>
  <tr><td>Counter-Clockwise</td><td><code>U'</code></td><td><code>L'</code></td><td><code>F'</code></td><td><code>R'</code></td><td><code>B'</code></td><td><code>D'</code></td></tr>
  <tr><td>Double-Clockwise</td><td><code>U2</code></td><td><code>L2</code></td><td><code>F2</code></td><td><code>R2</code></td><td><code>B2</code></td><td><code>D2</code></td></tr>
</tbody>
</table>

Each move corresponds to one unique way that an outer layer can be moved, while restoring the puzzle shape to a cube. Note that these moves keep each center in its original location (but possibly reoriented).

Note: This standard does _not_ include double-counter-clockwise moves, since those can be written as double-clockwise moves for basic applications. This also matches the World Cube Association, which does not recognize double-counter-clockwise moves (e.g. for the Fewest Moves event) [[2]](#ref2). Extensions of this standard may include such moves.

### 2.1.1 Clockwise Moves

There are 6 clockwise moves on a cube, corresponding to the 6 outer layers (standard [1.3.6](../../1/fundamental-cube-terms/#136-layer)): `U`, `L`, `F`, `R`, `B`, `D`.

Each face letter describes the following physical move:

- Look at the layer corresponding to that letter, from the outside of the cube.
- Turn the layer clockwise until the puzzle shape is restored.

Example: For a cube, `U` describes turning the `U` layer 90° clockwise. If we imagine the plane of the face as a clock face, this corresponds to moving the hour hand forward by 3 hours. Alternatively, this can be visualized as placing a screwdriver into the center of the layer, and turning it clockwise.

### 2.1.2 Counter-Clockwise Moves

A counter-clockwise move is the inverse of a clockwise move. This is written as the corresponding layer letter with a `'` symbol after it The `'` symbol is pronounced "prime".

There are 6 counter-clockwise moves: `U'`, `L'`, `F'`, `R'`, `B'`, `D'`.

Example: `U'` is pronounced "U prime".

### 2.1.3 Double-Clockwise Moves

A double clockwise move is the same as doing two clockwise moves consecutively. This is written as the corresponding layer letter with the number `2` written after it.

There are 6 double-clockwise moves: `U2`, `L2`, `F2`, `R2`, `B2`, `D2`.

Note: In the 1980's, it was common to write `2` as a superscript `²`. A lot of modern cubing software only understands the regular number suffix `2`, so it is recommended to avoid the superscript version.

## References

1. <span id="ref1"></span>Notes on Rubik's Magic Cube, David Singmaster. Section 3. Notation.
2. <span id="ref2"></span><https://www.worldcubeassociation.org/regulations/guidelines.html#E2c4+>

## TODO

- Images/Diagrams/Visualizations
- "move" is a physical move, "turn" is only for metrics?
