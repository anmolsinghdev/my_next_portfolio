'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './globals.scss';
import Footer from '@/components/Footer/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggleTheme, setToggleTheme] = useState(false);
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
      <body>
        <main className={`${montserrat.variable} font-mont`}>
          <ThemeProvider theme={toggleTheme === false ? lightTheme : darkTheme}>
            <CssBaseline />
            <Navbar onThemeToggle={onThemeToggle} />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
