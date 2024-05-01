import "../globals.css";
import '@radix-ui/themes/styles.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
        <div>
          {children}
        </div>
      
  );
}
