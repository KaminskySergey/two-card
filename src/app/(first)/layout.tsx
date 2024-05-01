
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import "../globals.css";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <Theme>
          {children}
        </Theme>

  );
}
