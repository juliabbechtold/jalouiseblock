import React from 'react';

// Store Providers
import { AuthProvider } from './AuthProvider';
import { CheckoutProvider } from './CheckoutProvider';
import { EventProvider } from './EventProvider';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <EventProvider>
      <CheckoutProvider>{children}</CheckoutProvider>
    </EventProvider>
  </AuthProvider>
);

export default AppProvider;
