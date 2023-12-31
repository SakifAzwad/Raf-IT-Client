import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import AuthProv from './Provider/AuthProv';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
   <QueryClientProvider client={queryClient}>
   <AuthProv>
    <RouterProvider router={router} />
    </AuthProv>
   </QueryClientProvider>
  </React.StrictMode>,
)
