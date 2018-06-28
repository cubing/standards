# Notation: SiGN and LGN (DRAFT)

TODO: Create identifiers to distinguish the SiGN definition for cubes / normal puzzles / other puzzles.

##  Recommendations

Programs implementing a custom parser who wish to keep it as simple as possible should support reading and writing **Si**mple **G**eneral **N**otation (SiGN), defined at the end of the first section below as `sign-alg`.

Programs wishing to provide "full" algorithm should support **L**arger **G**eneral **N**otation (LGN), defined at the end of the second section below as `lgn-alg`.

## Definition Syntax

Definitions below use a variant of Backus-Naur form. Consider this example:

    foo = "A"
    bar = "1"
    baz = "C" / "-D"
    thing = foo bar /
            foo baz

Then the valid values for `thing` are `A1`, `AC`, or `A-D`.

# Design Goals

These standards aim to satisfy these goals:

- Every SiGN alg and LGN alg has a single valid (i.e. deterministic) parse tree.
- SiGN parsing is [context-free](https://en.wikipedia.org/wiki/Context-free_grammar).
- Every SiGN alg parse tree has a single valid serialization.

This allows programs to interoperate easily by following the standards in a straightforward way.

# SiGN Move Sequences

## Base Move

The exact set of base moves depends on the puzzle. For cubes and "normal" twistypuzzles, we define `base-move` to be the following specific definition:

    unsliced-move-family = x / y / z
    slice-move-family    = U / L / F / R / B / D / M / E / S
    wide-move-family     = u / l / f / r / b / d / m / e / s

    positive-int = [1-9][0-9]*
    dash = "-"

    base-move =
        unsliced-move-family /
        slice-move-family /
        positive-int slice-move-family /
        wide-move-family /
        positive-int wide-move-family /
        positive-int dash positive-int wide-move-family

Other puzzles may define variants on this, but they must never contain whitespace or end in a digit.

TODO:
- SiGNw
- Should we disallow `1r`?

## Repeated Move

A `repeated-move` is a `base-move` with an optional suffix to indicate repetition.

    # TODO: Is R0 allowed?
    prime = "'"
    repeated-unit =
        base-move /
        base-move positive-int /
        base-move positive-int prime

The prime serves the purpose of a negative sign, indicating repetition of the inverse move.

## SiGN Alg

A `sign-alg` is a sequence of moves written out with spacing between them:

    single-space = " "
    single-spaced-move-sequence = 
        repeated-move  /
        repeated-move single-space single-spaced-move-sequence
    sign-alg = single-spaced-move-sequence

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
                    repeatable-unit positive-int /
                    repeatable-unit positive-int prime

The same requirements as documented for `repeated-move` apply, except with units instead of moves.

## Sequence

TODO: document when `white-space` can contain newlines.

    white-space          = single-space
    repeated-white-space = white-space /
                           white-space repeated-white-space

    sequence = repeated-unit /
               repeated-unit repeated-white-space sequence

## Group

    flexible-white-space = "" / repeated-white-space
    embedded-sequence = flexible-white-space sequence flexible-white-space
    group = "(" embedded-sequence ")"

The following identities hold:

- `(A B C... X Y Z)' == Z' Y' X' ... C' B' A'`
- `(A B C... X Y Z)n' == (Z' Y' X' ... C' B' A')n`

## Conjugate and Commutator

    conjugate = "[" embedded-sequence ":" embedded-sequence "]"
    commutator = "[" embedded-sequence "," embedded-sequence "]"

The following identities hold:

- `[A: B] == A B (A)'`
- `[A, B] == A B (A)' (B)'`

## Algorithm

A general LGN algorithm is anything that is a valid `sequence`.

    lgn-alg = sequence

# Extensions

- Comments
- Timestamps

# Transformation

- Standard serialization
- Conversion from LGN to SiGN
