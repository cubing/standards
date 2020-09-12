# Notations: SiGN and LGN (DRAFT)

Status: `DRAFT`  
Prescriptive or descriptive: descriptive (this standard attempts to describe existing conventions)

TODO: Create identifiers to distinguish the SiGN definition for cubes / normal puzzles / other puzzles.

## Recommendations

Programs implementing a custom parser who wish to keep it as simple as possible should support reading and writing **Si**mple **G**eneral **N**otation (SiGN), defined at the end of the first section below as `sign-alg`.

Programs wishing to provide "full" algorithm should support **L**arger **G**eneral **N**otation (LGN), defined at the end of the second section below as `lgn-alg`.

## Definition Syntax

Definitions below use a variant of Backus-Naur form. Consider this example:

    foo = "A"
    bar = "1"
    baz = "C" / "-D"
    thing = foo bar /
            foo baz

Then the valid values for `thing` are `"A1"`, `"AC"`, or `"A-D"`.

# Design Goals

These standards aim to satisfy these goals:

- Every SiGN alg and LGN alg has a single valid (i.e. deterministic) parse tree.
- SiGN and LGN parsing is [context-free](https://en.wikipedia.org/wiki/Context-free_grammar).
- Every SiGN alg parse tree has a single valid serialization.

This allows programs to interoperate easily by following the standards in a straightforward way.

# SiGN Move Sequences

## Base Move

The exact set of base moves depends on the puzzle. For cubes and "normal" twistypuzzles, we define `base-move` to be the following specific definition:

    bare-move-family  = x / y / z / m / e / s / M / E / S
    layer-move-family = U / L / F / R / B / D
    range-move-family  = u / l / f / r / b / d / Uw / Lw / Fw / Rw / Bw / Dw

    positive-int = [1-9][0-9]*
    dash = "-"

    base-move =
        bare-move-family /
        layer-move-family /
        positive-int layer-move-family /
        range-move-family /
        positive-int range-move-family /
        positive-int dash positive-int range-move-family

Other puzzles may define variants on this, but they must never contain whitespace or end in a digit.

TODO:

- SiGNw
- Should we disallow `1r`?

## Repeated Move

A `repeated-move` is a `base-move` with an optional suffix to indicate repetition.

    # TODO: Is R0 allowed?
    prime = "'"
    repeated-move =
        base-move /
        base-move prime /
        base-move positive-int /
        base-move positive-int prime

The prime serves the purpose of a negative sign, indicating repetition of the inverse move.

## SiGN Alg

A `sign-alg` is a sequence of moves written out with spacing between them:

    white-space = (" " / "\t" / "\n" / "\r")+
    white-spaced-move-sequence =
        repeated-move  /
        repeated-move white-space white-spaced-move-sequence
    sign-alg = white-spaced-move-sequence

Every `lgn-alg` can be expanded and normalized to a `sign-alg`.

# Algorithms / LGN

## Repeatable Unit

A repeatable unit is a unit that can be repeated without being wrapped in a repeatable unit itself.

    (Definitions of group / commutator / conjugate are below.)

    repeatable-unit = base-move /
                      group /
                      commutator /
                      conjugate

## Repeated Unit

This is similar to `repeated-move` above. In fact, every `repeated-move` is a valid `repeated-unit`.

    repeated-unit = repeatable-unit /
                    repeatable-unit prime /
                    repeatable-unit positive-int /
                    repeatable-unit positive-int prime

The same requirements as documented for `repeated-move` apply, except with units instead of moves.

## Sequence

    sequence = "" /
               repeated-unit /
               repeated-unit white-space sequence

## Group

    optional-white-space = "" / repeated-white-space
    embedded-sequence = optional-white-space sequence optional-white-space
    group = "(" embedded-sequence ")"

The following identities hold:

- `(A B C... X Y Z)' == Z' Y' X' ... C' B' A'`
- `(A B C... X Y Z)n' == (Z' Y' X' ... C' B' A')n`

## Conjugate and Commutator

    conjugate = "[" embedded-sequence ":" embedded-sequence "]"
    commutator = "[" embedded-sequence "," embedded-sequence "]"

The following identities hold:

- `[A: B] == A B A'`
- `[A, B] == A B A' B'`

## Algorithm

A general LGN algorithm is anything that is a valid `sequence`.

    lgn-alg = sequence

# Extensions

- Comments
- Timestamps

# Transformation

- Standard serialization
- Conversion from LGN to SiGN

# Axis Puzzle Rotations

There are 6 axis puzzle rotations: `x`, `x'`, `y`, `y'`, `z` `z'`,

## Axis Puzzle Rotation Directions

This is best defined using an example: `x` moves "like `R`" means that means that `x` rotates the entire puzzle using the same rotation transformation that the `R` layer moves during an `R` move. One can think of this as an `R` move "taking the entire puzzle with it".

| Rotation | Moves Like |
| -------- | ---------- |
| `x`      | `R`        |
| `y`      | `U`        |
| `z`      | `F`        |
| `x'`     | `L`        |
| `y'`     | `D`        |
| `z'`     | `B`        |

Note that this corresponds to the axes defined in [standard 1.4.1](#TODO).
