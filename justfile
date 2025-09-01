set quiet := true

update-flake:
    nix --option commit-lockfile-summary "chore(flake): update flake.lock" flake update --commit-lock-file

dev:
    pnpm run dev

format:
    pnpm run format

check:
    pnpm run check
    pnpm run lint

update:
    pnpm outdated || pnpm update
