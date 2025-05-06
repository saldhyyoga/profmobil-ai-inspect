
import React, { useEffect, useState } from "react";
import { Car, Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  useEffect(() => {
    // Check for the authentication cookie
    const authCookie = Cookies.get('profmobil-access');
    setIsLoggedIn(!!authCookie);
  }, []);

  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    Cookies.remove('profmobil-access');
    navigate('/');
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-automotive-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ProfMobil <span className="text-automotive-600">AI</span></span>
            </Link>
          </div>
          
          {!isDashboard && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-automotive-600 text-sm font-medium">Fitur</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-automotive-50 to-automotive-100 p-6 no-underline outline-none focus:shadow-md"
                                to="/fitur"
                              >
                                
                                {/*
                                <div className="mb-2 mt-4 text-lg font-medium text-automotive-600">
                                  Fitur ProfMobil AI
                                </div>
                                <p className="text-sm leading-tight text-gray-600">
                                  Jelajahi semua fitur unggulan kami untuk membantu Anda dalam transaksi mobil bekas.
                                </p>
                                */}
                              
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <ListItem href="/inspeksi-mobil-ai" title="Inspeksi Mobil + AI">
                            Inspeksi mobil dengan bantuan AI untuk hasil yang akurat dan terpercaya.
                          </ListItem>
                          
                          {/* Commented out other features
                          <ListItem href="/surat-perjanjian-digital" title="Surat Perjanjian Digital">
                            Buat dan kelola surat perjanjian jual beli secara digital dan aman.
                          </ListItem>
                          <ListItem href="/mediator-transaksi" title="Mediator Transaksi by Inspector (Manual)">
                            Dapatkan bantuan mediator langsung dari inspector kami yang berpengalaman.
                          </ListItem>
                          <ListItem href="#" title="Mediator Transaksi by System (Coming Soon)">
                            Fitur mediasi otomatis oleh sistem kami akan segera hadir.
                          </ListItem>
                          <ListItem href="#" title="Kalkulasi Harga Pasar">
                            Dapatkan estimasi harga pasar untuk mobil bekas berdasarkan data terkini.
                          </ListItem>
                          */}
                          
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-automotive-600 text-sm font-medium">Cara Kerja</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          <ListItem href="/cara-kerja" title="Cara Kerja ProfMobil AI">
                            Pelajari bagaimana ProfMobil AI membantu Anda mendapatkan mobil bekas berkualitas.
                          </ListItem>
                          <ListItem href="/standar-inspeksi" title="Standar Inspeksi">
                            Ketahui standar inspeksi yang kami terapkan untuk memastikan kualitas mobil.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-automotive-600 text-sm font-medium">Tentang Kami</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          <ListItem href="/kenapa-harus-profmobil" title="Kenapa Harus ProfMobil AI">
                            Temukan alasan mengapa ProfMobil AI adalah pilihan terbaik untuk transaksi mobil bekas Anda.
                          </ListItem>
                          <ListItem href="/tentang-profmobil" title="Tentang ProfMobil AI">
                            Ketahui lebih lanjut tentang visi, misi, dan tim di balik ProfMobil AI.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="text-gray-700 hover:text-automotive-600 inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium"
                        href="#pricing"
                      >
                        Harga
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/pusat-bantuan"
                          className="text-gray-700 hover:text-automotive-600 inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Pusat Bantuan
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Button 
                  className="bg-automotive-600 hover:bg-automotive-700"
                  onClick={handleAuthButtonClick}
                >
                  {isLoggedIn ? 'Dashboard' : 'Mulai'}
                </Button>
              </div>
            </div>
          )}

          {/* Profile dropdown menu (only shown in dashboard) */}
          {isDashboard && (
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full p-0 h-10 w-10 ml-2" aria-label="Profile menu">
                    <Avatar>
                      <AvatarFallback className="bg-automotive-100 text-automotive-600">
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="cursor-pointer" onClick={() => navigate('/profile')}>
                    <User className="h-4 w-4 mr-2" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleLogout}>
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {!isDashboard && (
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {isOpen && !isDashboard && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <MobileNavItem title="Fitur" items={[
              { title: "Inspeksi Mobil + AI", href: "/inspeksi-mobil-ai" },
              
              /* Commented out other features
              { title: "Surat Perjanjian Digital", href: "/surat-perjanjian-digital" },
              { title: "Mediator Transaksi by Inspector (Manual)", href: "/mediator-transaksi" },
              { title: "Mediator Transaksi by System (Coming Soon)", href: "#" },
              { title: "Kalkulasi Harga Pasar", href: "#" },
              */
              
            ]} />
            <MobileNavItem title="Cara Kerja" items={[
              { title: "Cara Kerja ProfMobil AI", href: "/cara-kerja" },
              { title: "Standar Inspeksi", href: "/standar-inspeksi" },
            ]} />
            <MobileNavItem title="Tentang Kami" items={[
              { title: "Kenapa Harus ProfMobil AI", href: "/kenapa-harus-profmobil" },
              { title: "Tentang ProfMobil AI", href: "/tentang-profmobil" },
            ]} />
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automotive-600 hover:bg-gray-100">Harga</a>
            <Link to="/pusat-bantuan" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automotive-600 hover:bg-gray-100">Pusat Bantuan</Link>
            <Button 
              className="w-full mt-2 bg-automotive-600 hover:bg-automotive-700"
              onClick={handleAuthButtonClick}
            >
              {isLoggedIn ? 'Dashboard' : 'Mulai'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Helper component for mobile navigation items with dropdowns
const MobileNavItem = ({ title, items }: { title: string; items: { title: string; href: string }[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-1">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automotive-600 hover:bg-gray-100"
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "transform rotate-180")} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-1">
          {items.map((item) => (
            <React.Fragment key={item.title}>
              {item.href.startsWith('/') ? (
                <Link 
                  to={item.href} 
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-automotive-600 hover:bg-gray-50"
                >
                  {item.title}
                </Link>
              ) : (
                <a 
                  href={item.href} 
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-automotive-600 hover:bg-gray-50"
                >
                  {item.title}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

// Helper component for navigation menu items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, children, href, ...props }, ref) => {
  const isInternalLink = typeof href === 'string' && href.startsWith('/');
  
  if (isInternalLink) {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
