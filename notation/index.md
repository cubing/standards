# Notation: SiGN and LGN (DRAFT)

**Si**mple **G**eneral **N**otation (SiGN) and Larger General Notation (LGN)

## Definition Syntax

Definitions below use a variant of Backus-Naur form. Consider this example:

    foo = "A"
    bar = "1"
    baz =
        "C"
        "-D"
    thing =
        foo bar
        foo baz

Then the valid values for `thing` are `A1`, `AC`, or `A-D`. `SiGN` is context-free, and `LGN` has a deterministic parsed tree for every expression.

# SiGN Move Sequences

## Base Move

A base move is a string of alphabetic characters with an optional positive integer prefix. (TODO: can we make this more general without inviting parser bugs?)

    positive-int =
        [1-9][0-9]*

    base-move =
        [A-Za-z]+
        positive-int base-move

The valid set of base moves depends on the puzzle.

## Repeated Move

A `repeated-move` is a `base-move` with an optional suffix to indicate repetition.

    # TODO: Is R0 allowed?
    prime =
        '
    repeated-unit =
        base-move
        base-move positive-int
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
        repeated-move 
        repeated-move single-space single-spaced-move-sequence

    white-space = single-space
        "\n"
        white-space white-space
    move-sequence = 
        repeated-move 
        repeated-move white-space move-sequence

All SiGN `algorithm`s can be normalized to a `single-spaced-move-sequence`. Cubing programs should consider it as the simplest option for processing input from other SiGN-compatible sources, if they are implementing a custom parser and wish to keep it as simple as possible.

# TODO: SiGN Algorithms / LGN

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

    sequence = 
        repeated-unit 
        repeated-unit white-space move-sequence

## Group

    white-space-or-empty =
        ""
        white-space

    embedded-sequence =
        white-space-or-empty sequence white-space-or-empty
    group =
        "(" embedded-sequence ")"

The following identities hold:

- `(A B C... X Y Z)' == Z' Y' X' ... C' B' A'`
- `(A B C... X Y Z)n' == (Z' Y' X' ... C' B' A')n`

## Conjugate and Commutator

    conjugate =
        "[" embedded-sequence ":" embedded-sequence "]"
    commutator =
        "[" embedded-sequence "," embedded-sequence "]"

The following identities hold:

- `[A: B] == A B (A)'`
- `[A, B] == A B (A)' (B)'`

## Algorithm

`algorithm` is another name for `sequence`.

    algorithm = 
        sequence

# Extensions

- Comments
- Timestamps
