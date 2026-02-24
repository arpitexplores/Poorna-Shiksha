# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c564aeba-7e64-4361-930c-eb942d1e9981

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c564aeba-7e64-4361-930c-eb942d1e9981) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c564aeba-7e64-4361-930c-eb942d1e9981) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## SEO automation setup

This project now auto-generates SEO files from a shared config:

- `src/seo/seo-config.json` (single source for site metadata and public routes)
- `public/sitemap.xml` (generated during build)
- `public/robots.txt` (generated during build)

Build flow:

1. `prebuild` runs `npm run seo:generate`
2. `build` creates production assets
3. `postbuild` runs `npm run seo:submit-sitemap`

### Google Search Console auto submission (optional)

To enable automatic sitemap submission to Google, configure these environment variables in Replit:

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` (keep `\n` in the value; script converts it)
- `GOOGLE_SEARCH_CONSOLE_SITE_URL` (example: `https://www.poornashiksha.com/` or `sc-domain:poornashiksha.com`)

Also:

1. Add your site in Google Search Console.
2. Add the service account email as an owner/user for that property.

### Disable submission if needed

Set `DISABLE_SITEMAP_SUBMIT=true` to skip post-build submission.
