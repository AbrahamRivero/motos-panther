"use client";

import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  Home,
  ShoppingCart,
  Info,
  Phone,
  BookOpen,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/store/cart";
import { useTranslations } from "next-intl";
import Link from "next/link";
import CartSheet from "../cart/cart-sheet";

export default function Header() {
  const t = useTranslations("Header");
  const navLinks = [
    { href: "/", label: t("Links.home"), icon: Home },
    { href: "/products", label: t("Links.products"), icon: ShoppingBag },
    { href: "/about", label: t("Links.about"), icon: Info },
    { href: "/contact", label: t("Links.contact"), icon: Phone },
    { href: "/blog", label: t("Links.blog"), icon: BookOpen },
  ];

  const { getTotalItems } = useCartStore();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const onCloseCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <header className="w-full bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo (hidden on mobile) */}
          <Link href="/" className="flex-shrink-0 hidden lg:block">
            <span className="text-2xl font-bold text-primary-foreground">
              B<span className="text-accent">i</span>ke
            </span>
          </Link>

          {/* Mobile Sidebar Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="lg:hidden text-primary-foreground hover:text-accent transition-colors"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t("Menu.accesibilityButton")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] bg-primary border-none"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="text-primary-foreground">
                  <span className="text-2xl font-bold">
                    B<span className="text-accent">i</span>ke
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center text-primary-foreground hover:text-accent transition-colors text-lg"
                  >
                    <link.icon className="h-5 w-5 mr-4" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
              <Separator className="my-6 bg-primary-foreground/20" />
              <div className="flex flex-col gap-6">
                <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                  <SheetTrigger asChild>
                    <button className="flex items-center text-primary-foreground hover:text-accent transition-colors">
                      <ShoppingCart className="h-5 w-5 mr-4" />
                      <span>{t("MobileLinks.cartButton")}</span>
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[300px] sm:w-1/4 bg-primary border-none"
                  >
                    <CartSheet onClose={onCloseCartHandler} />
                  </SheetContent>
                </Sheet>
                <button className="flex items-center text-primary-foreground hover:text-accent transition-colors">
                  <Heart className="h-5 w-5 mr-4" />
                  <span>{t("MobileLinks.favoritesButton")}</span>
                </button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Search Bar */}
          <div className="flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Input
                className="w-full bg-primary-foreground/10 border-primary-foreground/20 pl-10 pr-4 py-2 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-2 focus-visible:ring-accent transition-all"
                placeholder="Search for products..."
                type="search"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-foreground/50" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground hover:text-accent transition-colors relative"
                  >
                    <ShoppingBag className="h-6 w-6" />
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {getTotalItems()}
                      </span>
                    )}
                    <span className="sr-only">
                      {t("MobileLinks.cartButton")}
                    </span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-1/4 bg-primary border-none text-primary-foreground"
                >
                  <CartSheet onClose={onCloseCartHandler} />
                </SheetContent>
              </Sheet>

              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-accent transition-colors relative"
              >
                <Heart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
                <span className="sr-only">
                  {t("MobileLinks.favoritesButton")}
                </span>
              </Button>
            </div>

            {/* User Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              <User className="h-6 w-6" />
              <span className="sr-only">{t("MobileLinks.accountButton")}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
