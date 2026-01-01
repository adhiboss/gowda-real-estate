import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(5, "Please tell us what you are looking for"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you! We will contact you shortly via WhatsApp or Phone.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Get in Touch</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Ready to find your plot or farm land? Contact us directly. No call centers, talk directly to the agents.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-0">
              <CardContent className="pt-8 pb-8 px-8 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Phone</h3>
                    <p className="text-muted-foreground text-sm mb-1">Mon-Sat, 9am to 7pm</p>
                    <a href="tel:+919876543210" className="text-accent font-bold hover:underline">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-1">Fastest response</p>
                    <a href="https://wa.me/919876543210" className="text-accent font-bold hover:underline">Chat on WhatsApp</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Office</h3>
                    <p className="text-muted-foreground text-sm">
                      Harohalli Main Road,<br/>
                      Near Bus Stand,<br/>
                      Ramanagara District - 562112
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/30 p-6 rounded-xl border text-sm text-muted-foreground">
              <strong>Note on Service Area:</strong> We specialize in Harohalli, Kanakapura Road, and Ramanagara outskirts only. We do not have properties in Bangalore City limits.
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 h-full">
              <CardContent className="p-8">
                <h3 className="font-serif font-bold text-2xl text-primary mb-6">Send us an Enquiry</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter 10-digit number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What are you looking for?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="E.g. I am looking for a 1200 sq.ft plot near Harohalli industrial area, budget around 20 Lakhs." 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="bg-primary text-white w-full md:w-auto">Send Message</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </Layout>
  );
}
