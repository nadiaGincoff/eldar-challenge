import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';

import { DrawerProvider } from "./contexts/DrawerProvider";
import { UserProvider } from './contexts/AuthProvider';

import Layout from './components/layouts/Layout';
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <UserProvider>
          <DrawerProvider>  
              <Suspense fallback={<CircularProgress color="secondary" />}>
                <Layout>
                  <Outlet />
                </Layout>
              </Suspense>
          </DrawerProvider>
        </UserProvider>
    </QueryClientProvider>
  )
}

export default App;