
#!/bin/bash
# Build the project
npm run build

# Output message
echo "Build completed! The static files are in the 'dist' directory."
echo ""
echo "To deploy:"
echo "1. Push to your Git repository connected to Netlify, Vercel, or GitHub Pages."
echo "2. Or manually upload the 'dist' directory to any static hosting service."
echo ""
echo "For local testing of the production build:"
echo "npx serve -s dist"
