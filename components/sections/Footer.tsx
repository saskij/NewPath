import Link from "next/link";
import { Truck, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/utils";

export function Footer() {
    return (
        <footer className="bg-secondary pt-24 pb-12 text-gray-300 border-t-8 border-primary">
            <Container>
                {/* Top CTA Section - Industrial Box */}
                <div className="mb-20 pb-12 border-b border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="text-4xl font-black text-white mb-2 uppercase tracking-tight">Ready to Move?</h3>
                            <p className="text-gray-400 text-lg max-w-xl">Contact us today for a fast, personalized freight quote. We are ready when you are.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
                            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-wide">
                                <Phone className="h-6 w-6 text-primary" />
                                <a href="tel:+18001234567" className="hover:text-primary transition-colors">1-800-123-4567</a>
                            </div>
                            <Link href="/contact">
                                <Button size="lg" className="uppercase font-bold text-lg px-10">
                                    GET A QUOTE
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-white font-black mb-6 uppercase tracking-wider text-lg border-l-4 border-primary pl-4">Company</h3>
                        <ul className="space-y-4 text-sm font-medium tracking-wide uppercase text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors block py-1">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors block py-1">Join The Team</Link></li>
                            <li><Link href="/safety" className="hover:text-white transition-colors block py-1">Safety First</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div className="space-y-6">
                        <h3 className="text-white font-black mb-6 uppercase tracking-wider text-lg border-l-4 border-primary pl-4">Services</h3>
                        <ul className="space-y-4 text-sm font-medium tracking-wide uppercase text-gray-400">
                            <li><Link href="/services/ftl" className="hover:text-white transition-colors block py-1">Full Truckload</Link></li>
                            <li><Link href="/services/ltl" className="hover:text-white transition-colors block py-1">Less Than Truckload</Link></li>
                            <li><Link href="/equipment" className="hover:text-white transition-colors block py-1">Our Equipment</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-white font-black mb-6 uppercase tracking-wider text-lg border-l-4 border-primary pl-4">Contact</h3>
                        <ul className="space-y-4 text-sm font-medium text-gray-400">
                            <li className="flex items-center group">
                                <Phone className="h-5 w-5 mr-4 text-primary group-hover:text-white transition-colors" />
                                <a href="tel:+18001234567" className="group-hover:text-white transition-colors">1-800-123-4567</a>
                            </li>
                            <li className="flex items-start group">
                                <Mail className="h-5 w-5 mr-4 text-primary group-hover:text-white transition-colors mt-1" />
                                <a href="mailto:dispatch@newpath.com" className="group-hover:text-white transition-colors">dispatch@newpath.com</a>
                            </li>
                            <li className="flex items-start group">
                                <MapPin className="h-5 w-5 mr-4 text-primary group-hover:text-white transition-colors mt-1" />
                                <span>123 Industrial Pkwy,<br /> Logistics City, ST 12345</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div className="space-y-6">
                        <h3 className="text-white font-black mb-6 uppercase tracking-wider text-lg border-l-4 border-primary pl-4">Connect</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="bg-gray-800 p-3 hover:bg-primary text-white transition-colors duration-300"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="bg-gray-800 p-3 hover:bg-primary text-white transition-colors duration-300"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="bg-gray-800 p-3 hover:bg-primary text-white transition-colors duration-300"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 uppercase tracking-wider font-bold">
                    <p>&copy; {new Date().getFullYear()} NEW PATH LOGISTICS.</p>
                    <p>All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
