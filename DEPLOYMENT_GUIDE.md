# Deployment Guide - HIGREVA Preschools

## Overview
Complete guide for deploying HIGREVA Preschools website to production environments.

**Project**: HIGREVA Preschools Website
**Build Output**: `dist/` directory
**Build Command**: `npm run build`
**Node Version**: 18+ recommended
**Package Manager**: npm

## Pre-Deployment Checklist

- [x] Production build created (`npm run build`)
- [x] All tests passed
- [x] No console errors
- [x] Performance targets met
- [x] SEO metadata complete
- [x] Images optimized
- [x] Dependencies updated
- [x] Security review done
- [ ] Environment variables configured
- [ ] HTTPS certificate ready
- [ ] CDN configured (if applicable)
- [ ] Domain DNS configured
- [ ] Analytics setup ready
- [ ] Monitoring configured

## Build Artifact Details

**Location**: `dist/` directory

**Files to Deploy**:
```
dist/
├── assets/
│   ├── fa-v4compatibility-CErXDOsT.woff2
│   ├── fa-regular-400-DRN8N0d1.woff2
│   ├── fa-brands-400-Bs6tcqqs.woff2
│   ├── fa-solid-900-IAB4Droh.woff2
│   ├── index-B6ZeVku2.css (Main stylesheet)
│   └── index-BxslUtTd.js (Main bundle)
├── favicon.svg
├── icons.svg
├── index.html (Entry point)
├── robots.txt
└── sitemap.xml
```

**Total Size**: ~1.26 MB (250 KB gzipped)

## Deployment Platforms

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel**:
- ✓ Free tier available
- ✓ Auto-deploys on git push
- ✓ Automatic HTTPS
- ✓ Global CDN
- ✓ Serverless functions (if needed)
- ✓ Optimal for React apps

#### Setup Steps

**1. Install Vercel CLI**
```bash
npm install -g vercel
```

**2. Deploy to Vercel**
```bash
# First deployment (interactive)
vercel

# Follow prompts:
# - Link to existing project or create new
# - Set project name: higreva-preschools
# - Framework: React
# - Build command: npm run build
# - Output directory: dist
```

**3. Configure Domain**
```
Dashboard > Settings > Domains
Add your domain: higreva-bangalore.com
```

**4. GitHub Integration (Optional)**
```
Connect GitHub repository
Enable auto-deployment on push
```

**Environment Variables** (if using API):
```
VITE_API_URL=https://api.higreva.com
VITE_GA_ID=G-XXXXXXXXXX
```

**Verification**:
- ✓ Visit: https://higreva-preschools.vercel.app
- ✓ Custom domain works: https://higreva-bangalore.com
- ✓ HTTPS enabled
- ✓ Performance optimized

---

### Option 2: Netlify

**Why Netlify**:
- ✓ Free tier with good limits
- ✓ Git-based deployments
- ✓ Automatic HTTPS
- ✓ Edge functions
- ✓ Form handling
- ✓ Analytics included

#### Setup Steps

**1. Install Netlify CLI**
```bash
npm install -g netlify-cli
```

**2. Connect to Git**
```
Dashboard > New site from Git
Connect your Git repository
Select branch: main
```

**3. Configure Build Settings**
```
Build command: npm run build
Publish directory: dist
```

**4. Deploy**
```bash
# Automatic on git push
# Or manual:
netlify deploy --prod
```

**Domain Configuration**:
- DNS settings provided by Netlify
- Update domain registrar nameservers
- Or use CNAME records

**Environment Variables**:
```
VITE_API_URL=https://api.higreva.com
VITE_GA_ID=G-XXXXXXXXXX
```

---

### Option 3: GitHub Pages

**Why GitHub Pages**:
- ✓ Free hosting
- ✓ HTTPS included
- ✓ No build time limits
- ✓ Integrated with GitHub

#### Setup Steps

**1. Update package.json**
```json
{
  "homepage": "https://higreva.github.io/higreva-preschools"
}
```

**2. Create GitHub Actions Workflow**
```
.github/workflows/deploy.yml
```

**Content**:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**3. Deploy**
```bash
git push origin main
# GitHub Actions automatically builds and deploys
```

**Custom Domain**:
- Add CNAME file to dist/
- Configure DNS records
- Update domain in GitHub settings

---

### Option 4: AWS S3 + CloudFront

**Why AWS**:
- ✓ Scalable
- ✓ Cost-effective
- ✓ Global CDN
- ✓ Advanced features

#### Setup Steps

**1. Create S3 Bucket**
```bash
aws s3 mb s3://higreva-preschools
```

**2. Configure Static Website Hosting**
```bash
aws s3 website s3://higreva-preschools \
  --index-document index.html \
  --error-document index.html
```

**3. Upload Build Files**
```bash
aws s3 sync dist/ s3://higreva-preschools --delete
```

**4. Create CloudFront Distribution**
```bash
# Use AWS Console or AWS CLI
# - Origin: S3 bucket
# - Custom domain: higreva-bangalore.com
# - SSL certificate: AWS Certificate Manager
```

**5. Update Route 53**
```bash
# Point domain to CloudFront distribution
```

**Deployment Script** (optional):
```bash
#!/bin/bash
npm run build
aws s3 sync dist/ s3://higreva-preschools --delete
aws cloudfront create-invalidation \
  --distribution-id E1234ABCD \
  --paths "/*"
```

---

### Option 5: Self-Hosted Server (VPS)

**Why Self-Hosted**:
- ✓ Full control
- ✓ Custom configuration
- ✓ Potential cost savings (long-term)

#### Setup Steps

**1. Server Setup** (Ubuntu 20.04+)
```bash
# SSH into server
ssh root@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt-get install -y nginx

# Install Git
sudo apt-get install -y git
```

**2. Clone Repository**
```bash
cd /var/www
git clone https://github.com/your-org/higreva-preschools.git
cd higreva-preschools
npm ci --omit=dev
```

**3. Configure Nginx**
```
/etc/nginx/sites-available/higreva
```

**Content**:
```nginx
server {
    listen 80;
    server_name higreva-bangalore.com;
    
    root /var/www/higreva-preschools/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**4. Enable Site**
```bash
sudo ln -s /etc/nginx/sites-available/higreva \
           /etc/nginx/sites-enabled/higreva
sudo systemctl restart nginx
```

**5. SSL Certificate (Let's Encrypt)**
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d higreva-bangalore.com
```

**6. CI/CD Pipeline** (GitHub Actions)
```yaml
name: Deploy to VPS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Build
        run: npm run build
      
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/higreva-preschools
            git pull origin main
            npm ci --omit=dev
            npm run build
            sudo systemctl restart nginx
```

---

## Deployment Comparison

| Platform | Cost | Setup Time | Performance | Maintenance | Recommendation |
|----------|------|-----------|-------------|------------|-----------------|
| **Vercel** | Free | 5 min | Excellent | None | ⭐⭐⭐⭐⭐ Best |
| Netlify | Free | 5 min | Excellent | None | ⭐⭐⭐⭐⭐ Best |
| GitHub Pages | Free | 10 min | Good | Low | ⭐⭐⭐⭐ Good |
| AWS S3+CF | $1-5/mo | 30 min | Excellent | Low | ⭐⭐⭐⭐ Good |
| Self-Hosted | $5-20/mo | 1 hour | Good | High | ⭐⭐⭐ OK |

## Post-Deployment Configuration

### 1. Domain Setup

**For Vercel/Netlify**:
```
Domain Registrar (GoDaddy, Namecheap, etc.)
1. Get nameservers from Vercel/Netlify
2. Update domain registrar
3. Wait 24-48 hours for propagation
```

**For AWS**:
```
Route 53
1. Create hosted zone
2. Update domain registrar nameservers
3. Create A record pointing to CloudFront
```

### 2. HTTPS Certificate

**Automatic** (Vercel, Netlify, GitHub Pages):
- ✓ Automatic SSL/TLS
- ✓ Auto-renewal
- ✓ No action needed

**Manual** (AWS, Self-Hosted):
```bash
# AWS Certificate Manager
# or Let's Encrypt with Certbot
sudo certbot renew --dry-run  # Test
sudo certbot renew             # Renew
```

### 3. Environment Variables

**Create `.env.production`**:
```
VITE_API_URL=https://api.higreva.com
VITE_GA_ID=G-YOUR_GA_ID
VITE_FB_PIXEL_ID=YOUR_FB_PIXEL_ID
```

**Build with environment variables**:
```bash
npm run build
# Variables baked into dist/ during build
```

### 4. Analytics Setup

**Google Analytics 4**:
```
1. Create GA4 property
2. Get Measurement ID: G-XXXXXXXXXX
3. Add to environment variables
4. Verify in GA4 dashboard
```

**Implementation**:
- Add measurement ID to index.html meta
- Or use gtag.js library

**Google Search Console**:
```
1. Add property: https://search.google.com/search-console
2. Verify domain (DNS or HTML file)
3. Submit sitemap.xml
4. Check coverage and errors
```

### 5. Monitoring & Logging

**Error Tracking**:
```bash
# Install Sentry (optional)
npm install @sentry/react @sentry/tracing
```

**Performance Monitoring**:
- Vercel: Built-in analytics
- Netlify: Built-in analytics
- Custom: Google Analytics + Web Vitals

**Uptime Monitoring**:
- UptimeRobot: https://uptimerobot.com
- Pingdom: https://www.pingdom.com
- StatusPage: https://www.atlassian.com/statuspage

## Deployment Checklist

### Pre-Deployment
- [x] Code committed and pushed
- [x] npm run build succeeds
- [x] No TypeScript/ESLint errors
- [x] All tests pass
- [x] Environment variables set
- [x] Domain registered
- [x] SSL certificate ready

### Deployment
- [ ] Select platform (Vercel recommended)
- [ ] Connect repository
- [ ] Configure build settings
- [ ] Deploy
- [ ] Verify site loads
- [ ] Check all pages work
- [ ] Test forms
- [ ] Verify animations
- [ ] Check images load

### Post-Deployment
- [ ] Update DNS records
- [ ] Wait for propagation (24-48 hours)
- [ ] Test with custom domain
- [ ] Setup Google Analytics
- [ ] Submit to Google Search Console
- [ ] Create Google My Business
- [ ] Setup monitoring
- [ ] Configure backups
- [ ] Document procedures

## Rollback Procedure

### If Deployment Fails

**Vercel**:
```
1. Go to Deployments
2. Find previous stable deployment
3. Click "Promote to Production"
4. Done! Instant rollback
```

**Netlify**:
```
1. Go to Deploys
2. Click on previous successful deploy
3. Click "Publish deploy"
4. Done!
```

**GitHub Pages**:
```
1. Revert git commit
2. Push to main
3. GitHub Actions re-deploys
```

**Self-Hosted**:
```
git revert HEAD
git push origin main
# CI/CD pipeline re-deploys previous version
```

## Performance Optimization Post-Launch

### 1. Monitoring Core Web Vitals
```bash
# Use Web Vitals library
npm install web-vitals

# Track in Analytics
```

### 2. CDN Optimization
- Set cache headers
- Enable compression (gzip, brotli)
- Use optimized image formats (WebP)

### 3. Database Optimization (if applicable)
- Index frequently queried fields
- Optimize queries
- Implement caching layer

### 4. Load Testing
```bash
# Before launch, simulate traffic
# Use Apache JMeter or similar
# Target: 1000+ concurrent users
```

## Security Checklist

- [x] HTTPS enabled
- [x] Security headers configured
- [x] XSS prevention
- [x] CSRF protection (if forms)
- [x] Input validation
- [x] No sensitive data in code
- [ ] Regular backups configured
- [ ] Firewall rules configured
- [ ] DDoS protection enabled
- [ ] Regular security audits

### Security Headers (Nginx)
```nginx
# Add to Nginx config
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()";
```

## Backup & Disaster Recovery

### Automated Backups
- **Vercel**: Automatic
- **Netlify**: Automatic
- **GitHub Pages**: Git history
- **Self-Hosted**: Configure daily backups

```bash
# Manual backup script
#!/bin/bash
BACKUP_DIR="/backups/higreva-$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR
cp -r /var/www/higreva-preschools/dist $BACKUP_DIR
tar -czf $BACKUP_DIR.tar.gz $BACKUP_DIR
```

## Support & Maintenance

### Regular Maintenance Tasks

**Weekly**:
- Monitor uptime
- Check error logs
- Review user feedback

**Monthly**:
- Update dependencies: `npm update`
- Run security audit: `npm audit`
- Review analytics
- Check Core Web Vitals

**Quarterly**:
- Full security audit
- Performance optimization
- Content updates
- Browser compatibility check

### Issue Resolution

1. **Check Deployment Logs**
   - Platform console
   - Build logs
   - Runtime errors

2. **Test Locally**
   ```bash
   npm run build
   npm run preview
   ```

3. **Verify Environment Variables**
   - Check secrets are set
   - Verify API endpoints
   - Check analytics IDs

4. **Review Browser Console**
   - Check for JavaScript errors
   - Check network requests
   - Check mixed content warnings

## Scaling for Growth

### If Traffic Increases

**Vercel/Netlify**:
- ✓ Automatic scaling
- ✓ No configuration needed

**AWS**:
- ✓ CloudFront edge locations
- ✓ S3 auto-scaling
- ✓ DynamoDB (if database needed)

**Self-Hosted**:
- Load balancer setup
- Multiple server instances
- Database replication
- Caching layers

---

**Last Updated**: September 27, 2026
**Status**: Ready for Deployment
**Recommended Platform**: Vercel (easiest, most reliable)
**Estimated Deployment Time**: 5-30 minutes

## Next Steps
1. Choose deployment platform
2. Follow platform-specific setup
3. Configure domain & DNS
4. Setup analytics
5. Monitor performance
6. Gather user feedback
7. Plan content updates
