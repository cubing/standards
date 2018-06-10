# SiGN – **Si**mple **G**eneral **N**otation (DRAFT)

TODO
- Pick a standard format, e.g. ABNF.
- Figure out how to separate syntax and semantics for puzzles in general, and "normal" puzzles in particular.

# Base Move Name

A base move name is a string of alphabetic characters.

    base-move-name = [A-Za-z]+

The valid set of base names depends on the puzzle.

# Base Move

TODO: Can we get away with not requiring every puzzle to have this?

A base move consists of a base move name with an optional positive integer prefix (used to indicate layers):

    positive-int = [1-9][0-9]*
    move = base-move-name / positive-int base-move-name

Each puzzle must define a mapping from each `base-move-name` to a default prefix:

    DefaultPrefix :: base-move-name -> positive-int

For example, SiGN for cubes uses `R -> 1` and `r -> 2`.

TODO: validity of `positive-int` values depends on the puzzle and `base-move-name`.

# Repeatable Unit

A repeatable unit is a unit that can be repeated without being wrapped in a repeatable unit itself.

    # Definitions of group / commutator / conjugate are below.
    repeatable-unit = move / group / commutator / conjugate

# Repeated Unit

A repeated unit is a repeatable unit with an optional suffix to indicate repetition.

    # TODO: Is R0 allowed?
    prime = '
    repeated-unit = repeatable-unit / repeatable-unit positive-int / repeatable-unit positive-int prime

The prime serves the purpose of a negative sign, indicating repetition of the inverse move. That is, the repetition amount is defined by:

    getAmount(UNIT:repeatable-unit):
      return 1

    getAmount(UNIT:repeatable-unit AMOUNT:positive-int):
      return AMOUNT as integer

    getAmount(UNIT:repeatable-unit AMOUNT:positive-int prime):
      return -AMOUNT as integer

[TODO: Do we need this] The following must apply to puzzle using SiGN:

- If 1) two consecutive `repeated-unit`s have the same `repeatable-unit` and `positive-int` and one of them has a `prime` but the other does not, and 2) the sequence of two consecutive units can be applied to a given puzzle state, then the total effect is the same as doing nothing to the puzzle.
- If 1) two sequences of `repeated-unit`s have the same `repeatable-unit`, 2) the sequences can both be applied to a given puzzle state, and 3) the sum of `getAmount()` applied to the moves in each sequence has the same sum, then the effect of applying either sequence to the puzzle must be the same as the other.

# Sequence

    space = " " / "\n" / space space
    sequence = repeated-unit / sequence space repeated-unit

# Group

    space-or-empty = "" / space
    group = "(" space-or-empty sequence space-or-empty ")"

The following identities hold:

- `(A B C... X Y Z)' == Z' Y' X' ... C' B' A'`
- `(A B C... X Y Z)n' == (Z' Y' X' ... C' B' A')n`

# Conjugate and Commutator

    conjugate = "[" space-or-empty sequence space-or-empty ":" space-or-empty sequence space-or-empty "]"
    commutator = "[" space-or-empty sequence space-or-empty "," space-or-empty sequence space-or-empty "]"

The following identities hold:

- `[A: B] == A B (A)'`
- `[A, B] == A B (A)' (B)'`
