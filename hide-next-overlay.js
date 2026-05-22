const fs = require('fs');
const path = require('path');

const targetFile = path.join(
  __dirname,
  'node_modules',
  'next',
  'dist',
  'client',
  'components',
  'react-dev-overlay',
  'internal',
  'components',
  'ShadowPortal.js'
);

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');
  if (!content.includes('portalNode.current.style.display = "none"')) {
    content = content.replace(
      'portalNode.current = ownerDocument.createElement("nextjs-portal");',
      'portalNode.current = ownerDocument.createElement("nextjs-portal"); portalNode.current.style.display = "none";'
    );
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('Successfully patched Next.js ShadowPortal to hide dev errors.');
  } else {
    console.log('Next.js ShadowPortal is already patched.');
  }
} else {
  console.log('Could not find Next.js ShadowPortal file to patch.');
}
