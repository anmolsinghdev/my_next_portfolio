'use client';

import { useState, createContext } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '@/components/Footer/Footer';
import { Montserrat } from 'next/font/google';
import './globals.scss';

interface IthemeContext {
  toggleTheme: boolean;
}
export const ThemeContext =
  createContext<IthemeContext>({
    toggleTheme: false,
  });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggleTheme, setToggleTheme] =
    useState(false);
  function onThemeToggle() {
    setToggleTheme((prev) => !prev);
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main
          className={`${montserrat.variable} font-mont`}
        >
          <ThemeContext.Provider
            value={{ toggleTheme }}
          >
            <ThemeProvider
              theme={
                toggleTheme === false
                  ? lightTheme
                  : darkTheme
              }
            >
              <CssBaseline />
              <Navbar
                onThemeToggle={onThemeToggle}
              />
              {children}
              <Footer />
            </ThemeProvider>
          </ThemeContext.Provider>
        </main>
      </body>
    </html>
  );
}
