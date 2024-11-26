import React from 'react'
import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import JobListing from './pages/JobListing';
import JobPage from './pages/JobPage';
import PostJob from './pages/PostJob';
import SavedJobs from './pages/SavedJobs';
import MyJobs from './pages/MyJobs';
import { ThemeProvider } from './components/theme-provider';

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/onboarding",
        element:<OnboardingPage/>
      },
      {
        path:"/jobs",
        element:<JobListing/>
      },
      {
        path:"/job/:id",
        element:<JobPage/>
      },
      {
        path:"/post-job",
        element:<PostJob/>
      },
      {
        path:"/saved-job",
        element:<SavedJobs/>
      },
      {
        path:"/my-jobs",
        element:<MyJobs/>
      },
    ],
  },
])
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App
