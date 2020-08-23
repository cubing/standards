# Cubing Standard #1: Fundamental Cube Terms

Status: `DRAFT`  
Version: 2018-09-06

This standard defines terms for twisty puzzles. The definitions in this standard are focused around the [3x3x3 cube](https://en.wikipedia.org/wiki/Rubik%27s_Cube) in particular, although many of them can be used for other twisty puzzles.

## 1.1 Faces

### 1.1.1 Face

The word "face" refers to a flat face of the puzzle. A cube has 6 faces.

Caveat: it is best to avoid the word "side" when "face" is meant. "Side" can refer to a face, but speedcubers often use "side" to refer a "layer" (see standard [1.3.6](#136-layer)) To avoid ambiguity, it is recommended to use the word "face" (or "layer") when possible, and avoid giving a specific meaning to "side".

### 1.1.2 Face Names/Letters

The faces of a cube are named and lettered as follows:

| Name  | Letter |
| ----- | ------ |
| Up    | `U`    |
| Left  | `L`    |
| Front | `F`    |
| Right | `R`    |
| Back  | `B`    |
| Down  | `D`    |

These names originate from David Singmaster, around 1981 [[1]](#ref1).

Note: informally, "Top" is sometimes used as a colloquial synonym for "Up", and "Bottom" for "Down". However, the face letters always use the standard names (e.g. `U` for "Top", `D` for "Bottom").

### 1.1.3 Facelet/Sticker

The part of a face that belongs to a given piece is called a "facelet", or colloquially a "sticker".

Example: the top 9 facelets/stickers of a 3x3x3 cube are called the "`U` face".

### 1.1.4 Face Layout

The standard face layout of a cube is in the following net:

    | - | U | - | - |
    | L | F | R | B |
    | - | D | - | - |

Note: this matches the convention used by, most cubers, and most cubing timers, and by TNoodle (the World Cube Association scramble program). It's also used in other standards like the face order for Speffz, a common convention for naming facelets for blindfolded solving. [[2]](#ref2)

### 1.1.5 Face Order

Faces are ordered using according to the face layout in left-to-right reading order: `U`, `L`, `F`, `R`, `B`, `D`.

## 1.2 Color Scheme and Puzzle Orientation

### 1.2.1 Standard Color Scheme

The standard color scheme for a cube (in standard puzzle orientation; see [section 1.2.3](#123-standard-orientation)) is:

| Face | Color  |
| ---- | ------ |
| `U`  | White  |
| `L`  | Orange |
| `F`  | Green  |
| `R`  | Red    |
| `B`  | Blue   |
| `D`  | Yellow |

Note: This color scheme is known among speedcubers as the "BOY" color scheme (because the colors Blue-Orange-Yellow are clockwise around one of the corners) or the "Western" color scheme (because Japanese cubers used to use a color scheme with blue and white swapped). [[3]](#ref3)

Depending on the application, the cube may be reoriented so that there are different colors on each of the faces. Unless otherwise specified, e.g. "the U face" refers to the face currently on top, not necessarily the white face.

### 1.2.2 Puzzle Orientation Description

Puzzle orientation is described by specifying the colors on U and F (in that order).

### 1.2.3 Standard Orientation

Standard puzzle orientation matches the standard color scheme when the puzzle has not been reoriented:

- White on the U face.
- Green on the F face.

Note: Colloquially, this is often said out loud as "white on top, green in front".

If a puzzle does not have white, or green adjacent to white, standard puzzle orientation is as follows:

- The lightest color is on the `U` face.
- Of the faces adjacent to the `U` face, the darkest color is on the `F` face.

Note: this convention matches the WCA Regulations [[4]](#ref4).

### 1.2.5 Orientation Priority of Faces

For many applications, it is useful to define an order of faces grouped by axis. For a cube, this order is:

- `U` or `D`, then
- `F` or `B`, then
- `R` or `L`.

Example: For a given piece, its orientation is typically defined by the facelet on the highest-priority side (see [section 1.3.3](#133-piece-location)).

## 1.3 Pieces

### 1.3.1 Pieces

A "piece" is a part of the puzzle that stays together as during normal puzzle operation. Pieces can also be called "cubies", especially for NxNxN puzzles.

Caveat: it is best to avoid the word "part" when "piece" is meant. "Part" can refer to a piece, but "part" is also often used to refer to a smaller part of the puzzle, such as a single facelet/sticker, or the associated part of the mechanism.

### 1.3.2 Centers, Edges, Corners

Pieces are named by how many facelets they have:

- Center: 1 facelet
- Edge: 2 facelets
- Corner: 3 facelets

### 1.3.3 Piece Location

A location for a piece is named by which sides its facelets are on. These letters are assigned starting with the highest-priority facelet (see [section 1.1.5](#115-face-order)), then in counter-clockwise while looking at the piece from the outside of the puzzle.

For example, a cube has 8 corner locations: `UFR`, `URB`, `UBL`, `ULF`, `DRF`, `DFL`, `DLB`, `DBR`. At given moment, a corner location may have any of the 8 corners in it, in any of 3 orientations.

Note: for applications that accept input from humans, it is recommended to allow the letters after the first one to be in any order. For example, `URF` should be considered to mean `UFR`.

### 1.3.4 Piece Orientation

It is possible for a piece to occupy the same physical location while being oriented (rotated) different ways. On a 3x3x3 cube, each piece has multiple possible orientations for a given location:

- Center: 4 orientations
- Edge: 2 orientations
- Corner: 3 orientations

Note: for many applications, all four orientations of a center piece in a given location are considered indistinguishable, i.e. centers are treated as if they have 1 orientation in a given location (colloquially, "centers don't have orientation" or "center orientation doesn't matter"). However, it is critical for some applications to be able to distinguish which way a center is facing. It is encouraged for anyone building on this standard to be able to accommodate use cases where centers have 4 orientation, or to have flexibility for support for this in the furure if needed.

### 1.3.5 Piece Names

The name of a piece is the name of its home location when the puzzle is solved in standard puzzle orientation.

Example: UFR refers to the piece that is on the corner of the faces `U`, `F`, and `R` in standard orientation. This is the "white-green-red corner" in the standard color scheme. In this case, the "`UFR` piece" will always refer to the white-green-red corner _piece_, although any other corner may be in the `UFR` _location_.

Example: a 3x3x3 cube has the following 26 pieces that affect the visible state of the puzzles:

- 6 centers: `U`, `L`, `F`, `R`, `B`, `D`
- 12 edges: `UF`, `UR`, `UB`, `UL`, `DF`, `DR`, `DB`, `DL`, `FR`, `FL`, `BR`, `BL`
- 8 corners: `UFR`, `URB`, `UBL`, `ULF`, `DRF`, `DFL`, `DLB`, `DBR`

Note: as with location names, it is recommended to allow the letters after the first one to be in any order. For example, `URF` should be considered to mean `UFR`.

### 1.3.6 Layer

An layer is the set of pieces separated by "cuts" on an axis where pieces may slide along each other. A 3x3x3 cube has 3 layers in along each of the 3 axes.

The outer layer on the furthest side of each axis is named using the same letter as the face it contains. (See [section 1.1.2](#112-face-namesletters))

For example, "`U` layer" refers to the 9 pieces that have facelets on the `U` face, i.e. 1 center, 4 edges, and 4 corners. This includes all the facelets an all these pieces (a total of 21 facelets).

### 1.3.7 Puzzle State

The state of a puzzle consists of the location of each piece (including the orientation of each piece).

### 1.3.7 Solved State

A solved state of a puzzle is a state where each piece is in its home location, oriented correctly.

Note that the solved state for a 3x3x3 may or may not depend on distinguishable center orientations, depending on the use case.

## 1.4 Axes

### 1.4.1 Axis Directions

The cube uses a right-handed coordinate system. If the axes are centered inside the cube, then the centers of the faces are located in the following directions:

| Name  | Letter |
| ----- | ------ |
| Right | `+x`   |
| Up    | `+y`   |
| Front | `+z`   |
| Left  | `-x`   |
| Down  | `-y`   |
| Back  | `-z`   |

Therefore, the face names are consistent with the perspective of a camera:

- positioned along the the positive direction of the `z` axis,
- with the `+y` direction as up,
- facing the origin (i.e. the center of the cube).

This is a somewhat arbitrary convention, but it matches what is widely used by cubers to describe cube rotations. Applications are encouraged to use this coordinate system if possible.

## References

1. <span id="ref1"></span>Notes on Rubik's Magic Cube, David Singmaster. Section 3. Notation.
2. <span id="ref2"></span><https://www.speedsolving.com/wiki/index.php/Speffz>
3. <span id="ref3"></span><https://www.speedsolving.com/wiki/index.php/Western_Color_Scheme>
4. <span id="ref4"></span><https://www.worldcubeassociation.org/regulations/#4d>

## TODO

- Images/Diagrams/Visualizations
- define "position" as a combination of "piece location" + "piece orientation"?
- Write location specification so taht the wording still works when there are distinguishable pieces.
