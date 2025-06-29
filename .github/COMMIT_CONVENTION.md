# Conventional Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automatic versioning and release notes generation.

## Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Examples

```bash
# Feature
git commit -m "feat: add user authentication"

# Bug fix
git commit -m "fix: resolve login redirect issue"

# Breaking change
git commit -m "feat!: remove deprecated API endpoint"

# With scope
git commit -m "feat(auth): add OAuth2 support"

# With body
git commit -m "feat: add user dashboard

- Add dashboard component
- Implement user stats
- Add navigation menu"

# With footer
git commit -m "fix: resolve memory leak

Closes #123"
```

## Breaking Changes

Use `!` after the type/scope to indicate a breaking change:

```bash
git commit -m "feat!: change API response format"
```

## Version Bumping

- **patch** (1.0.0 → 1.0.1): `fix`, `perf`
- **minor** (1.0.0 → 1.1.0): `feat`
- **major** (1.0.0 → 2.0.0): `feat!`, `fix!` (breaking changes) 