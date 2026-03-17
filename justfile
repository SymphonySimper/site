set quiet := true

dev:
    pnpm run dev

format:
    pnpm run format

check:
    pnpm run check
    pnpm run lint

update:
    pnpm outdated || pnpm update
