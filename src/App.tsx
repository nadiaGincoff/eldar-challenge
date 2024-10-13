import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { UserProvider } from './contexts/useAuth';
import Layout from './components/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Outlet />
          </Layout>
          </Suspense>
        </UserProvider>
    </QueryClientProvider>
  )
}

export default App;