import { Share2, MapPin, Ruler, FileCheck, Phone } from "lucide-react";

import residentialPlotImg from "@assets/generated_images/residential_plot_in_developing_layout.png";
import farmhouseImg from "@assets/generated_images/farmhouse_in_green_field.png";
import agriLandImg from "@assets/generated_images/serene_indian_agricultural_land_with_hills.png";

export interface Property {
  id: string;
  title: string;
  type: "Plot" | "Farmhouse" | "Agricultural Land" | "Commercial Site";
  priceRange: string;
  size: string;
  location: string;
  landmark: string;
  description: string;
  images: string[];
  features: string[];
  documents: string[];
  distance: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Premium Residential Plot",
    type: "Plot",
    priceRange: "₹18L - ₹25L",
    size: "1200 - 1500 sq.ft",
    location: "Harohalli",
    landmark: "Near Harohalli Industrial Area",
    description: "Verified residential plots in a gated community layout. Red soil, ready for construction. Excellent investment opportunity in the rapidly developing Harohalli industrial belt.",
    images: [residentialPlotImg],
    features: ["Gated Community", "30ft Wide Roads", "Electricity", "Water Connection"],
    documents: ["E-Khata", "DC Conversion", "NOC Available"],
    distance: "10 mins from Kanakapura Main Road"
  },
  {
    id: "2",
    title: "Scenic Farmhouse Land",
    type: "Farmhouse",
    priceRange: "₹45L - ₹60L",
    size: "0.5 Acre",
    location: "Kanakapura Road",
    landmark: "Before Ravishankar Ashram",
    description: "Beautiful farmhouse land with established mango and coconut trees. Perfect for a weekend getaway home. Peaceful surroundings with good access road.",
    images: [farmhouseImg],
    features: ["Fenced Boundary", "Borewell", "Mango Trees", "Good Soil"],
    documents: ["Clear Title", "Agricultural Passbook"],
    distance: "45 mins from NICE Road Junction"
  },
  {
    id: "3",
    title: "Agricultural Investment Land",
    type: "Agricultural Land",
    priceRange: "₹80L - ₹1.2Cr",
    size: "2 Acres",
    location: "Ramanagara District",
    landmark: "Near Ramanagara Hills",
    description: "Large agricultural parcel suitable for organic farming or long-term investment. Scenic views of the hills and fertile soil.",
    images: [agriLandImg],
    features: ["Fertile Soil", "Scenic View", "Road Access"],
    documents: ["Pahani Updated", "Single Owner"],
    distance: "15 mins from Ramanagara Town"
  },
  {
    id: "4",
    title: "Corner Site in Developed Layout",
    type: "Plot",
    priceRange: "₹28L - ₹32L",
    size: "1500 sq.ft",
    location: "Harohalli",
    landmark: "Near BGS International School",
    description: "Premium corner site in a fully developed layout with many houses already constructed. Ready to move in location.",
    images: [residentialPlotImg],
    features: ["Corner Plot", "East Facing", "Drainage", "Street Lights"],
    documents: ["A-Khata", "Tax Paid"],
    distance: "5 mins from Bus Stand"
  }
];
