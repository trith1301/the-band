# The Band Landing

## Information

### About

This is a personal project.

### Technologies

This project build on **Angular** framework.

Environment requirements:

| Tools | Version |
|------------|-------------|
| `Node` | 20.11.0 |
| `NPM` | 10.2.4 |

### Installation

Run the command below to install all dependencies:

```bash
npm install
```

Start the application

```bash
npm run start
```

## Contribute to this project

### To create new branch

Create new branch from the **development** branch

Branch name convention: `[Type]/[Short description]`
| Types | Description |
|------------|-------------|
| `release` | Release branches, for releasing new version |
| `feature` | Feature branches, for developing new features |
| `bugfix`  | Bugfix branches, for fixing bugs |
| `hotfix`  | Hotfix branches, for hot fixing |
| `docs`    | Documentation branches, for updating documentation |
| `style`   | Style branches, for code style changes |
| `refactor`| Refactor branches, for code refactoring |
| `move`    | Move branches, for moving or renaming files/folders |
| `chore`   | Chore branches, for routine tasks or other small changes |
|    | Others |

**Notes:**

- Use the specified prefixes to categorize and describe the purpose of the branch.
- Keep branch names descriptive but concise.
- Use lowercase letters and separate words with a slash (/) for better readability.

**Examples:**

```git
git branch feature/user-authentication
```

```git
git branch bugfix/data-loading-issue
```

```git
git branch other-change
```

### To commit your changes

Commit message convention: `[Emoji][Short description]`

With task tag: `[Task tag]: [Emoji][Short description]`

|   Commit type              | Emoji                                         |
|:---------------------------|:----------------------------------------------|
| Initial commit             | 🎉 `:tada:`                               |
| Version tag                | 🔖 `:bookmark:`                       |
| New feature                | ✨ `:sparkles:`                       |
| Bugfix                     | 🐛 `:bug:`                                 |
| Metadata                   | 📇 `:card_index:`                   |
| Documentation              | 📚 `:books:`                             |
| Documenting source code    | 💡 `:bulb:`                               |
| Performance                | 🐎 `:racehorse:`                     |
| Cosmetic                   | 💄 `:lipstick:`                       |
| Tests                      | 🚨 `:rotating_light:`           |
| Adding a test              | ✅ `:white_check_mark:`       |
| Make a test pass           | ✔️ `:heavy_check_mark:`       |
| General update             | ⚡ `:zap:`                                 |
| Improve format/structure   | 🎨 `:art:`                                 |
| Refactor code              | 🔨 `:hammer:`                           |
| Removing code/files        | 🔥 `:fire:`                               |
| Continuous Integration     | 💚 `:green_heart:`                 |
| Security                   | 🔒 `:lock:`                               |
| Upgrading dependencies     | ⬆️ `:arrow_up:`                       |
| Downgrading dependencies   | ⬇️ `:arrow_down:`                   |
| Lint                       | 👕 `:shirt:`                             |
| Translation                | 👽  `:alien:`                             |
| Text                       | 📝 `:pencil:`                           |
| Critical hotfix            | 🚑  `:ambulance:`                     |
| Deploying stuff            | 🚀 `:rocket:`                           |
| Fixing on MacOS            | 🍎 `:apple:`                             |
| Fixing on Linux            | 🐧 `:penguin:`                         |
| Fixing on Windows          | 🏁 `:checkered_flag:`           |
| Work in progress           | 🚧 `:construction:`              |
| Adding CI build system     | 👷 `:construction_worker:` |
| Analytics or tracking code | 📈 `:chart_with_upwards_trend:` |
| Removing a dependency      | ➖ `:heavy_minus_sign:`       |
| Adding a dependency        | ➕ `:heavy_plus_sign:`         |
| Docker                     | 🐳 `:whale:`                             |
| Configuration files        | 🔧 `:wrench:`                           |
| Package.json in JS         | 📦 `:package:`                         |
| Merging branches           | 🔀 `:twisted_rightwards_arrows:` |
| Bad code / need improv.    | 💩 `:hankey:`                           |
| Reverting changes          | ⏪ `:rewind:`                           |
| Breaking changes           | 💥 `:boom:`                               |
| Code review changes        | 👌 `:ok_hand:`                         |
| Accessibility              | ♿ `:wheelchair:`                   |
| Move/rename repository     | 🚚 `:truck:`                       |

**Notes:**

- Use meaningful prefixes to describe the purpose of the commit.
- Add a short title and provide detailed description in the commit message.
- Keep commit messages concise and understandable.
- Avoid overly long commit messages; try to keep them under 72 characters when possible.
- Use icons sparingly; only use them when necessary to maintain clarity.

**Examples:**

```git
git commit -m "✨ Add user authentication"
```

```git
git commit -m "🐛 Resolve issue with data not loading"
```

```git
git commit -m "TASK-456: ⬆️ Update dependencies"
```
