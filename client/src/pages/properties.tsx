import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { properties } from "@/lib/data";
import { Link } from "wouter";
import { MapPin, Filter } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Properties() {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredProperties = filterType === "all" 
    ? properties 
    : properties.filter(p => p.type.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Available Properties</h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse our list of verified plots, sites, and agricultural lands in Harohalli and Kanakapura Road regions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            Showing {filteredProperties.length} properties
          </p>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Select onValueChange={setFilterType} defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-white">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="plot">Plots / Sites</SelectItem>
                <SelectItem value="farmhouse">Farmhouses</SelectItem>
                <SelectItem value="agricultural">Agricultural Land</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={property.images[0]} 
                  alt={property.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-sm">
                  {property.type}
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="font-serif text-xl text-primary">{property.title}</CardTitle>
                <div className="flex items-start gap-1 text-sm text-muted-foreground mt-2">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 
                  <span>{property.location} <span className="text-primary/60 text-xs block mt-1">(Near {property.landmark})</span></span>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-border/40">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Size</p>
                    <p className="font-semibold text-primary">{property.size}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
                    <p className="font-semibold text-accent">{property.priceRange}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {property.description}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="pt-2 pb-6">
                <Link href={`/properties/${property.id}`} className="w-full">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">View Property Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
            <h3 className="text-lg font-semibold text-primary mb-2">No properties found</h3>
            <p className="text-muted-foreground mb-6">Try changing the filter or contact us for upcoming listings.</p>
            <Button variant="outline" onClick={() => setFilterType("all")}>Clear Filters</Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
