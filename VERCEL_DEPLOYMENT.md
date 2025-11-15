# Οδηγίες Deployment στο Vercel

## Μέθοδος 1: GitHub Integration (Προτείνεται)

### Βήμα 1: Push το Project στο GitHub
```bash
# Αν δεν έχεις κάνει ήδη:
git add .
git commit -m "Add Vercel configuration"
git push origin main
```

### Βήμα 2: Connect με Vercel
1. Πήγαινε στο https://vercel.com
2. Κάνε login με GitHub account
3. Κάνε "Add New Project"
4. Επέλεξε το repository: `antlies-petrelaiou-efraimidis`
5. Vercel θα detect αυτόματα:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Κάνε "Deploy"

### Βήμα 3: Environment Variables (αν χρειάζονται)
- Settings > Environment Variables
- Προσθήκη variables αν χρειάζονται

## Μέθοδος 2: Vercel CLI

### Βήμα 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Βήμα 2: Login
```bash
vercel login
```

### Βήμα 3: Deploy
```bash
# Production deployment
vercel --prod

# Preview deployment
vercel
```

## Configuration

Το `vercel.json` έχει ήδη:
- ✅ SPA routing (όλα τα routes → index.html)
- ✅ Security headers
- ✅ Build settings

## Automatic Deployments

Μετά το πρώτο deployment:
- Κάθε push στο `main` branch = Production deployment
- Κάθε push σε άλλο branch = Preview deployment
- Pull Requests = Preview deployment

## Custom Domain

1. Πήγαινε στο Project Settings
2. Domains
3. Add domain
4. Follow τις οδηγίες για DNS setup

## Troubleshooting

### Build Fails
- Check build logs στο Vercel dashboard
- Verify ότι `npm run build` λειτουργεί locally

### 404 Errors
- Verify το `vercel.json` έχει rewrites
- Check ότι το `dist` folder περιέχει `index.html`

### Environment Variables
- Settings > Environment Variables
- Add variables που χρειάζονται

