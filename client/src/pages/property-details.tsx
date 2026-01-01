import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { properties } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { MapPin, Phone, MessageCircle, FileCheck, Ruler, ArrowLeft, Lock, Info } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function PropertyDetails() {
  const [match, params] = useRoute("/properties/:id");
  const property = match ? properties.find(p => p.id === params.id) : null;

  if (!match || !property) {
    return <NotFound />;
  }

  return (
    <Layout>
      {/* Breadcrumb / Back */}
      <div className="bg-muted/30 border-b py-4">
        <div className="container mx-auto px-4">
          <Link href="/properties" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Back to All Properties
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header */}
            <div>
              <div className="flex gap-3 mb-4">
                <Badge variant="secondary" className="rounded-sm uppercase tracking-wider text-xs font-bold text-primary px-3 py-1">
                  {property.type}
                </Badge>
                <Badge variant="outline" className="rounded-sm uppercase tracking-wider text-xs font-bold border-accent text-accent px-3 py-1">
                  Verified Listing
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 leading-tight">
                {property.title}
              </h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent mr-2" />
                <span className="text-lg">{property.location} - <span className="italic">Near {property.landmark}</span></span>
              </div>
            </div>

            {/* Media / Video Placeholder */}
            <div className="rounded-xl overflow-hidden bg-black aspect-video relative group shadow-lg">
              <img 
                src={property.images[0]} 
                alt={property.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-6 text-white text-center">
                  <p className="font-bold text-lg drop-shadow-md">Video Placeholder</p>
                  <p className="text-xs opacity-90">YouTube/Video Embed would go here</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none text-muted-foreground leading-relaxed">
              <h3 className="text-primary font-serif text-xl font-bold mb-3">About this property</h3>
              <p>{property.description}</p>
              <p className="mt-4">
                <strong>Distance Reference:</strong> {property.distance}
              </p>
            </div>

            {/* Features & Docs */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/20 p-6 rounded-lg border">
                <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-accent" /> Features
                </h4>
                <ul className="space-y-2">
                  {property.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/20 p-6 rounded-lg border">
                <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-accent" /> Documents
                </h4>
                <ul className="space-y-2">
                  {property.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Approximate Map */}
            <div className="bg-muted/30 rounded-lg p-6 border border-dashed border-primary/20 text-center space-y-4">
              <div className="bg-gray-200 h-48 rounded flex items-center justify-center text-muted-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] opacity-10 bg-cover" />
                <span className="flex flex-col items-center gap-2 relative z-10">
                  <MapPin className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Approximate Area Map</span>
                </span>
              </div>
              <div className="flex items-start gap-3 text-left bg-yellow-50 p-4 rounded text-yellow-800 text-sm border border-yellow-100">
                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                <p>
                  <strong>Transparency Note:</strong> To protect owner privacy and ensure genuine enquiries, we do not display the exact plot number or survey number online. The location shown is approximate.
                </p>
              </div>
            </div>

          </div>

          {/* Sidebar - Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              <Card className="border-t-4 border-t-accent shadow-lg">
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">Price Range</p>
                    <p className="text-3xl font-serif font-bold text-primary">{property.priceRange}</p>
                    <p className="text-sm text-muted-foreground mt-1">Negotiable*</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 text-lg">
                      <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Enquiry
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 font-bold h-12 text-lg">
                      <Phone className="mr-2 w-5 h-5" /> Call Agent
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground text-center px-4 leading-relaxed">
                    <Lock className="w-3 h-3 inline mr-1" />
                    Exact location, survey number, and legal documents will be shared after a brief phone discussion.
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                <h4 className="font-serif font-bold text-lg mb-2">Interested in a site visit?</h4>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  We offer free site visits on weekends from Harohalli town.
                </p>
                <div className="text-sm font-bold text-accent">
                  Call to schedule: +91 98765 43210
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
