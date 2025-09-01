set quiet := true

update-flake:
    nix --option commit-lockfile-summary "chore(flake): update flake.lock" flake update --commit-lock-file
