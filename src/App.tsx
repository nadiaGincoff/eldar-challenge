import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { UserProvider } from './contexts/useAuth';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Outlet />
        </Layout>
      </Suspense>
    </UserProvider>
  )
}

export default App;