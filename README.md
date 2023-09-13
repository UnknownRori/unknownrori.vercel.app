# unknownrori.vercel.app (In Development)

<img src="./public/cover.png" align="center" />

<div align="center" style="margin: 0.85rem 0">
    <a href="https://github.com/UnknownRori/unknownrori.vercel.app/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/UnknownRori/unknownrori.vercel.app" />
    </a>
    <a href="https://unknownrori.vercel.app">
        <img src="https://img.shields.io/github/deployments/UnknownRori/unknownrori.vercel.app/Production?label=Vercel" />
    </a>
    <a href="https://github.com/UnknownRori/unknownrori.vercel.app">
        <img src="https://img.shields.io/github/repo-size/UnknownRori/unknownrori.vercel.app?logo=github" />
    </a>
    <a href="https://wakatime.com/@UnknownRori">
        <img src="https://wakatime.com/badge/github/UnknownRori/unknownrori.vercel.app.svg" />
    </a>
</div>

[unknownrori.vercel.app](https://unknownrori.vercel.app) is a minimal online portfolio with built in Content Management System to manage Blog and featured Project, it was built on using Nuxt.js and Supabase. It's uses SSR for rendering for SEO reason but you can opt in to SPA because of Nuxt.js flexibility

The origin of this project is to decommission my [portfolio project](https://unknownrori-firebase.web.app/) that was written in React.js, it's share some similarity on project structure.

## 🛠️ Development

### 📦 Requirements

- [pnpm](https://pnpm.io/) (recommended)
- [node.js](https://nodejs.org/en/) >= 18
- [Supabase Project](https://supabase.com/) (see [docs](./docs/supabase-setup.md) for further setting up the database and policy)

```sh
# Clone the repo
git clone https://github.com/UnknownRori/unknownrori.vercel.app
cd unknownrori.vercel.app

# Copy .env.example and fill out the environment variable
cp ./.enx.example .env
nvim .env

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Generate SSR
pnpm run build

# Generate static deployment
pnpm run generate
```

## ⭐ Contribution

Feel free to contribute, I don't have any specific instruction.

## 📖 License

Source code is distributed under BSD 3-Clause License. See [LICENSE](./LICENSE) for more information
