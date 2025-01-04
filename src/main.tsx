import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  console.error("VITE_CLERK_PUBLISHABLE_KEY is not defined in the environment variables.");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={clerkPubKey || 'pk_test_c2V0dGxpbmctYmlyZC00NS5jbGVyay5hY2NvdW50cy5kZXYk'}>
    <App />
  </ClerkProvider>
);
