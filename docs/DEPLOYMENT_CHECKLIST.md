# Deployment Checklist for Base Mini App

Use this checklist to ensure your AR Mini App is properly configured before deploying to Base.

## Pre-Deployment

### Assets
- [ ] Add `public/icon.png` (512x512px, app icon)
- [ ] Add `public/splash.png` (1080x1920px, splash screen)
- [ ] Add `public/embed-image.png` (1200x630px, social share image)
- [ ] Optimize all 3D models (< 10MB each recommended)
- [ ] Compress AR target images

### Configuration Files
- [ ] Create `.env.local` with your production values
- [ ] Update app name in `src/app/layout.js`
- [ ] Update app description in `src/app/layout.js`
- [ ] Update embed metadata in `src/app/layout.js`
- [ ] Customize manifest in `src/app/.well-known/farcaster.json/route.js`

### Code Review
- [ ] Test all AR experiences locally
- [ ] Verify all routes work correctly
- [ ] Check console for errors
- [ ] Test responsive design on mobile
- [ ] Verify camera permissions work

## Deployment

### Build & Deploy
- [ ] Run `npm run build` successfully
- [ ] Deploy to hosting platform (Vercel/Netlify)
- [ ] Set environment variables in platform dashboard:
  - `NEXT_PUBLIC_APP_URL`
  - `BASE_OWNER_ADDRESS`
- [ ] Verify deployment URL is accessible

### Domain Configuration
- [ ] Configure custom domain (if applicable)
- [ ] Ensure HTTPS is enabled
- [ ] Test SSL certificate is valid

## Post-Deployment

### Manifest Verification
- [ ] Verify manifest is accessible at `https://your-domain.com/.well-known/farcaster.json`
- [ ] Check JSON format is valid
- [ ] Confirm all URLs are absolute and correct

### Base Account Association
- [ ] Visit [Base Build Account Association Tool](https://base.org/build/account-association)
- [ ] Enter your deployed app URL
- [ ] Complete verification process
- [ ] Copy generated credentials:
  - [ ] `ACCOUNT_ASSOCIATION_HEADER`
  - [ ] `ACCOUNT_ASSOCIATION_PAYLOAD`
  - [ ] `ACCOUNT_ASSOCIATION_SIGNATURE`
- [ ] Update environment variables in hosting platform
- [ ] Redeploy application

### Testing
- [ ] Visit [Base Build Preview Tool](https://base.org/build/preview)
- [ ] Test with your app URL
- [ ] Verify embed displays correctly
- [ ] Check account association status is verified
- [ ] Test "Launch" button works
- [ ] Test AR functionality in production

### Mobile Testing
- [ ] Test on iOS Safari
- [ ] Test on Android Chrome
- [ ] Verify camera access works
- [ ] Test AR tracking accuracy
- [ ] Check loading performance

### Base App Testing
- [ ] Create test post in Base app with your URL
- [ ] Verify embed renders correctly
- [ ] Test launching mini app from embed
- [ ] Verify user context is available
- [ ] Test all AR experiences work

## Launch

### Publication
- [ ] Create announcement post in Base app
- [ ] Share with Base community
- [ ] Submit to Base mini app directory (if available)

### Monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure analytics
- [ ] Monitor performance metrics
- [ ] Check for console errors

### Documentation
- [ ] Update README with production URL
- [ ] Document any custom configuration
- [ ] Create user guide if needed

## Post-Launch

### Maintenance
- [ ] Monitor user feedback
- [ ] Track performance metrics
- [ ] Update dependencies regularly
- [ ] Address bug reports promptly

### Optimization
- [ ] Review and optimize 3D models
- [ ] Improve loading times
- [ ] Optimize AR target images
- [ ] Implement user feedback

## Environment Variables Reference

Required for production:

```env
NEXT_PUBLIC_APP_URL=https://your-actual-domain.com
BASE_OWNER_ADDRESS=0xYourActualAddress
ACCOUNT_ASSOCIATION_HEADER=your_actual_header
ACCOUNT_ASSOCIATION_PAYLOAD=your_actual_payload
ACCOUNT_ASSOCIATION_SIGNATURE=your_actual_signature
```

## Common Issues

### Manifest Not Loading
- Check file path is correct
- Verify route.js exports GET function
- Check environment variables are set
- Clear CDN cache if using one

### Account Association Fails
- Ensure manifest is accessible
- Verify domain matches exactly
- Check all required fields are present
- Complete verification process again

### AR Not Working in Production
- Verify HTTPS is enabled (required for camera)
- Check model file paths are correct
- Verify target files are accessible
- Test on actual mobile devices

### Embed Not Rendering
- Check metadata format in layout.js
- Verify imageUrl is accessible
- Test with Base Preview Tool
- Check console for errors

## Support Resources

- [Base Documentation](https://docs.base.org/)
- [Base Discord](https://discord.gg/base)
- [Project Documentation](./BASE_MINI_APP_SETUP.md)
- [Quick Start Guide](./QUICKSTART.md)

---

**Last Updated**: October 2025
