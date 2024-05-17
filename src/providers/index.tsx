'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AppRouterCacheProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
    </AppRouterCacheProvider>
  );
};

export default AppProvider;
