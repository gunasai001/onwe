"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import SideBar from "@/components/SideBar/SideBar";
import { Provider } from "react-redux";
import store from "../lib/store";
import MinSideBar from "@/components/SideBar/MinSidebar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const showLayout =
    pathname !== "/sign-in" && pathname !== "/" && pathname !== "/sign-up";

  return (
    <ClerkProvider>
      <Provider store={store}>
        <html lang="en" className="bg-white">
          <body className={`${inter.className} h-screen overflow-hidden`}>
            <div className="flex">
              <div className="w-1/4">{showLayout && <SideBar />}</div>
              <div className="flex-1 h-full w-full overflow-y-auto">
                {children}
              </div>
            </div>
          </body>
        </html>
      </Provider>
    </ClerkProvider>
  );
};

export default RootLayout;
