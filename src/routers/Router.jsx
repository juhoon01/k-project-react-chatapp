import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import InnerRouter from './innerRouter';
import OuterRouter from './outerRouter';

const queryClient = new QueryClient();

export default function Router() {
  const [jwt, setJWT] = useState(null);

  useEffect(() => {
    const getJwt = () => localStorage.getItem('x-jwt');
    setJWT(getJwt());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {jwt ? <InnerRouter jwt={jwt} /> : <OuterRouter setJWT={setJWT} />}
      </BrowserRouter>
    </QueryClientProvider>
  );
}
