import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './routing/routing'
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <MantineProvider withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
);