# Email Form Setup Guide for HIGREVA Preschools

## Overview
The enrollment form is now configured to send inquiries via **Formspree**, a free email form backend service. When users submit the form, you'll receive emails at your configured email address.

## Quick Setup (2 Steps)

### Step 1: Create Formspree Account
1. Go to https://formspree.io
2. Sign up with your email: **higrevapreschool26@gmail.com**
3. Click "Create Project"
4. Name it: `HIGREVA Admissions`

### Step 2: Get Your Form ID
1. In Formspree dashboard, create a new form
2. Choose integration type: **Email**
3. You'll get a form ID like: `f/xvgoqgbw`
4. Copy this ID and note it down

### Step 3: Update Code
In `src/components/EnrollmentModal.jsx`, find this line:
```javascript
const response = await fetch('https://formspree.io/f/xvgoqgbw', {
```

Replace `xvgoqgbw` with your actual Formspree form ID.

## Contact Details Updated
Your contact information has been updated in the system:
- **Email:** higrevapreschool26@gmail.com
- **Phone:** +91-8123708724
- **Address:** D No 1002, 7th Main, Ganesha Temple Road, Behind Kanti Sweets, Marathahalli Village, Bangalore - 560037, Karnataka
- **Hours:** Monday-Friday 8:30 AM - 10:00 PM, Saturday 8:30 AM - 10:00 AM, Closed Sunday

## What Happens When Someone Submits?

1. User fills enrollment form (First Name, Last Name, Phone, Email, Program)
2. They solve a simple math captcha
3. They agree to privacy policy
4. Form is sent to Formspree
5. You receive an email at higrevapreschool26@gmail.com with:
   - All form details
   - Submission timestamp (IST)
   - User's contact information

6. Success message shows to user with their phone number confirmation

## Form Fields Captured
- First Name
- Last Name
- Phone Number (validated to Indian format: 6-9 followed by 9 digits)
- Email ID
- Program Selected
- Submission Date & Time (India Standard Time)

## Testing the Form

1. Run dev server: `npm run dev`
2. Visit http://localhost:5175
3. Click "Admissions Open" button or floating admissions button
4. Fill the form with test data
5. Solve the math captcha
6. Check your email (might take 1-2 seconds)

## Formspree Features (Free Plan)
✅ Up to 50 submissions per month
✅ Email notifications
✅ No coding required
✅ Spam protection built-in
✅ Mobile-friendly

## Alternative: Gmail/SendGrid Setup
If you prefer direct email setup, you can:
1. Enable 2FA on Gmail
2. Generate app-specific password
3. Configure backend with node-mailer (requires hosting)

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify Formspree account is active
- Check form ID is correct
- Test with Formspree's test form first

**Form submission failing?**
- Ensure internet connection
- Check browser console (F12) for errors
- Verify Formspree form ID matches
- Try submitting from different browser

## Next Steps
1. Complete Formspree setup
2. Test the form with real submission
3. Check higrevapreschool26@gmail.com for test email
4. Deploy website once confirmed working

---
**Form ID Location:** src/components/EnrollmentModal.jsx (line with fetch URL)
**Contact Email:** higrevapreschool26@gmail.com
**Contact Phone:** 8123708724
