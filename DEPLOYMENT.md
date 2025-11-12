# Vercel Deployment Guide

## Quick Fix

The easiest way to deploy to Vercel is to add the Vercel adapter:

```bash
npm run qwik add vercel
```

This will automatically:
- Install the Vercel adapter
- Configure your project for Vercel
- Update your build scripts
- Create the necessary configuration files

## Manual Setup (if the above doesn't work)

If you prefer to set it up manually or if the automatic setup fails:

1. **Install the Vercel adapter package:**
   ```bash
   npm install --save-dev @builder.io/qwik-city/adapters/vercel
   ```

2. **Create `vercel.json`:**
   ```json
   {
     "buildCommand": "npm run build",
     "framework": null
   }
   ```

3. **Update `vite.config.ts`** to use the Vercel adapter (this is usually done automatically by `qwik add vercel`)

4. **Ensure your build script in `package.json` is:**
   ```json
   "build": "qwik build"
   ```

## Troubleshooting

### Build Error: "@qwik-city-plan" not found

This is a virtual module that Qwik generates during build. Make sure:
- You're running `npm run build` (not just `npm run build.client`)
- All dependencies are installed: `npm install`
- Node.js version matches the engines requirement in `package.json`

### Build Output Not Found

If Vercel can't find the build output:
- Check that the build completes successfully
- The output should be in `.vercel/output` when using the Vercel adapter
- Or in `dist` for static builds

### Static Site Generation

For a simple resume site, you can also use Static Site Generation:

1. Update `vite.config.ts`:
   ```typescript
   qwikCity({
     staticGenerate: {
       origin: "https://yourdomain.com",
     },
   })
   ```

2. Update `vercel.json`:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": null
   }
   ```

## Recommended Approach

**Run this command in your project:**
```bash
npm run qwik add vercel
```

This is the official and recommended way to set up Vercel deployment for Qwik applications.

