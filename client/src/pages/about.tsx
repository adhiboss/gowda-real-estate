import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, CheckCircle2, Users, Map } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Local. Trusted. Verified.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are a family-run real estate service bridging the gap between genuine land owners in Ramanagara district and serious buyers from Bangalore.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Story</h2>
            <div className="prose text-muted-foreground space-y-4">
              <p>
                Started in 2015, we noticed a major problem in the local real estate market: lack of transparency. Buyers were often shown properties with legal issues, unclear boundaries, or inflated prices.
              </p>
              <p>
                We decided to change that. We don't just "list" properties; we curate them.
              </p>
              <p>
                Every property on this website has been physically visited by our team. We check the preliminary documents, talk to the neighbors, and understand the ground reality before we even click a photo.
              </p>
              <p className="font-medium text-primary">
                We believe in offline trust first. The website is just a medium to connect; the real business happens on the ground, face-to-face.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <Link href="/contact">
                <Button className="bg-primary text-white">Contact Us</Button>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
             <div className="bg-accent/10 p-6 rounded-2xl text-center space-y-3">
               <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm">
                 <CheckCircle2 className="w-6 h-6 text-accent" />
               </div>
               <h3 className="font-bold text-primary">100+</h3>
               <p className="text-sm text-muted-foreground">Verified Sites Sold</p>
             </div>
             <div className="bg-primary/5 p-6 rounded-2xl text-center space-y-3 translate-y-8">
               <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm">
                 <Users className="w-6 h-6 text-primary" />
               </div>
               <h3 className="font-bold text-primary">500+</h3>
               <p className="text-sm text-muted-foreground">Happy Families</p>
             </div>
             <div className="bg-primary/5 p-6 rounded-2xl text-center space-y-3">
               <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm">
                 <Map className="w-6 h-6 text-primary" />
               </div>
               <h3 className="font-bold text-primary">10 Years</h3>
               <p className="text-sm text-muted-foreground">Local Expertise</p>
             </div>
             <div className="bg-accent/10 p-6 rounded-2xl text-center space-y-3 translate-y-8">
               <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm">
                 <CheckCircle2 className="w-6 h-6 text-accent" />
               </div>
               <h3 className="font-bold text-primary">Zero</h3>
               <p className="text-sm text-muted-foreground">Litigation Cases</p>
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
