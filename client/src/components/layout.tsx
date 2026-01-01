import { Link, useLocation } from "wouter";
import { Phone, Menu, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-bold text-primary tracking-tight">Verified Realty</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-sm">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`text-lg font-medium ${isActive(link.href) ? "text-primary" : "text-muted-foreground"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-accent text-white mt-4">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <span className="font-serif text-xl font-bold">Verified Realty</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Your trusted local partner for verified plots, sites, and farmhouses in Harohalli, Kanakapura Road, and Ramanagara. We prioritize trust, transparency, and peace of mind.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Harohalli Main Road</li>
                <li>Ramanagara District</li>
                <li>Karnataka, India</li>
                <li className="pt-2 font-semibold text-white">+91 98765 43210</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-white">Service Areas</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Harohalli Industrial Area</li>
                <li>Kanakapura Road</li>
                <li>Ramanagara Outskirts</li>
                <li>Nearby Villages</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 mt-8">
            <h4 className="font-bold mb-2 text-sm text-accent">Disclaimer & Transparency Note</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed text-justify">
              Verified Realty acts as a facilitator and broker. While we conduct our own physical verification, all property details are based on information provided by owners and our preliminary checks. We do not provide legal title opinions. Buyers are strongly advised to conduct their own independent legal due diligence before entering into any transaction. We do not deal in Bangalore City properties. Property locations shown on the website are approximate to protect owner privacy. Exact locations and documents are shared only after direct contact and verification of genuine interest.
            </p>
            <p className="text-center text-xs text-primary-foreground/40 mt-8">
              &copy; {new Date().getFullYear()} Verified Realty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
