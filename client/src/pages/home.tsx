import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { properties } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight, MapPin, ShieldCheck, UserCheck, Video } from "lucide-react";
import heroImage from "@assets/generated_images/serene_indian_agricultural_land_with_hills.png";

export default function Home() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent text-accent text-sm font-semibold mb-6 backdrop-blur-sm">
            Local Experts &bull; Physically Verified &bull; Trust Based
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white">
            Find Verified Land in <br/>
            <span className="text-accent">Harohalli & Kanakapura Road</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
            We help serious buyers find clear-title plots, farmhouses, and agricultural land. No fake listings, no hidden locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 h-auto">
                View Properties
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 h-auto backdrop-blur-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Notice */}
      <section className="bg-muted py-8 border-b border-primary/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium">
            <MapPin className="inline-block w-5 h-5 mr-2 text-accent mb-1" />
            Serving: Harohalli Industrial Area &bull; Kanakapura Main Road &bull; Ramanagara Outskirts &bull; Nearby Villages
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Why Trust Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real estate in outskirts can be tricky. We act as your local filter, ensuring you only see properties that pass our physical verification.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Physically Verified</h3>
              <p className="text-muted-foreground">
                We personally visit every site, check basic documents, and verify the owner's intent before listing.
              </p>
            </div>
            <div className="p-8 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Video Presentation</h3>
              <p className="text-muted-foreground">
                See the actual property through our walkthrough videos. No misleading photos or old stock images.
              </p>
            </div>
            <div className="p-8 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                <UserCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direct Guidance</h3>
              <p className="text-muted-foreground">
                We guide you from the first site visit to the final registration. Transparent facilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Hand-picked opportunities for you.</p>
            </div>
            <Link href="/properties">
              <Button variant="ghost" className="text-primary hover:text-primary/80 hidden sm:flex">
                View All Properties <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={property.images[0]} 
                    alt={property.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                    {property.type}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                    <p className="text-white font-semibold flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-accent" /> {property.location}
                    </p>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-lg text-primary line-clamp-1">{property.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>{property.size}</span>
                    <span className="font-semibold text-primary">{property.priceRange}</span>
                  </div>
                  <p className="text-xs text-muted-foreground border-t pt-3 mt-2">
                    <span className="font-semibold text-primary/80">Landmark:</span> {property.landmark}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/properties/${property.id}`} className="w-full">
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/properties">
              <Button variant="outline" className="w-full">
                View All Properties <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Looking for something specific?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
            We get new inventory weekly. Tell us your requirement - budget, size, and purpose. We will find the right verified property for you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-10 py-6 h-auto">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
