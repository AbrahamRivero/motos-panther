import { QueryClient } from '@tanstack/react-query';

const client = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 1000 } },
});
export default client;
