# Notation: SiGN and LGN (DRAFT)

**Si**mple **G**eneral **N**otation (SiGN) and **L**arger **G**eneral **N**otation (LGN)

# TODO: Allow naming the SiGN definition for cubes / normal puzzles / other puzzles.

We that simple programs should support reading and writing the `sign-alg` format.

Programs wishing to provide "full" algorithm should support the `lgn-alg` format.

## Definition Syntax

Definitions below use a variant of Backus-Naur form. Consider this example:

    foo = "A"
    bar = "1"
    baz = "C" / "-D"
    thing = foo bar /
            foo baz

Then the valid values for `thing` are `A1`, `AC`, or `A-D`. `SiGN` is context-free, and `LGN` has a deterministic parsed tree for every expression.

# SiGN Move Sequences

## Base Move

The exact set of base moves depends on the puzzle. For cubes and "normal" twistypuzzles, we define `base-move` to be the following specific definition:

    unsliced-move-name = x / y / z
    slice-move-name    = U / L / F / R / B / D / M / E / S
    wide-move-name     = u / l / f / r / b / d / m / e / s

    positive-int = [1-9][0-9]*
    dash = "-"

    base-move =
        unsliced-move-name
        slice-move-name /
        positive-int slice-move-name /
        wide-move-name /
        positive-int wide-move-name /
        positive-int dash positive-int wide-move-name

Other puzzles may define variants on this, but they must never contain whitespace or end in a digit.

TODO:
- SiGNw
- Should we disallow `1r`?

# Algorithms / LGN

## Repeated Move

A `repeated-move` is a `base-move` with an optional suffix to indicate repetition.

    # TODO: Is R0 allowed?
    prime = "'""
    repeated-unit =
        base-move /
        base-move positive-int /
        base-move positive-int prime

The prime serves the purpose of a negative sign, indicating repetition of the inverse move. That is, the repetition amount is defined by:

    getAmount(UNIT:repeatable-unit):
      return 1

    getAmount(UNIT:repeatable-unit AMOUNT:positive-int):
      return AMOUNT as integer

    getAmount(UNIT:repeatable-unit AMOUNT:positive-int prime):
      return -AMOUNT as integer

[TODO: Do we need this?] The following must apply to puzzle using SiGN:

- If 1) two consecutive `repeated-move`s have the same `repeatable-move` and `positive-int` and one of them has a `prime` but the other does not, and 2) the sequence of two consecutive units can be applied to a given puzzle state, then the total effect is the same as doing nothing to the puzzle.
- If 1) two sequences of `repeated-move`s have the same `repeatable-move`, 2) the sequences can both be applied to a given puzzle state, and 3) the sum of `getAmount()` applied to the moves in each sequence has the same sum, then the effect of applying either sequence to the puzzle must be the same as the other.

## Move Sequence

A `move-sequence` is a sequence of moves written out with spacing between them:

    single-space = " "
    single-spaced-move-sequence = 
        repeated-move  /
        repeated-move single-space single-spaced-move-sequence
    sign-alg = single-spaced-move-sequence

All `lgn-alg`s can be normalized to a `sign-alg`. Cubing programs should consider it as the simplest option for processing input from other SiGN-compatible sources, if they are implementing a custom parser and wish to keep it as simple as possible.


## Repeatable Unit

A repeatable unit is a unit that can be repeated without being wrapped in a repeatable unit itself.

    (Definitions of group / commutator / conjugate are below.)

    repeatable-unit =
        move
        group
        commutator
        conjugate

## Repeated Unit

This is similar to `repeated-move` above. In fact, every `repeated-move` is a valid `repeated-unit`.

    repeated-unit =
        repeatable-unit
        repeatable-unit positive-int
        repeatable-unit positive-int prime

The same requirements as documented for `repeated-move` apply, except with units instead of moves.

# Sequence

    white-space =
        single-space /
        "\n"
    repeated-white-space =
        white-space
        white-space repeated-white-space

    sequence = 
        repeated-unit 
        repeated-unit repeated-white-space move-sequence

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
