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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Company */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-lg border-l-4 border-primary pl-4">Company</h3>
                        <ul className="space-y-2 text-sm font-medium text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors block py-1">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors block py-1">Join The Team</Link></li>
                            <li><Link href="/safety" className="hover:text-white transition-colors block py-1">Safety First</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-lg border-l-4 border-primary pl-4">Services</h3>
                        <ul className="space-y-2 text-sm font-medium text-gray-400">
                            <li><Link href="/services/ftl" className="hover:text-white transition-colors block py-1">Full Truckload</Link></li>
                            <li><Link href="/services/ltl" className="hover:text-white transition-colors block py-1">Less Than Truckload</Link></li>
                            <li><Link href="/equipment" className="hover:text-white transition-colors block py-1">Our Equipment</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-lg border-l-4 border-primary pl-4">Contact</h3>
                        <ul className="space-y-2 text-sm font-medium text-gray-400">
                            <li className="flex items-center group">
                                <Phone className="h-4 w-4 mr-3 text-primary group-hover:text-white transition-colors" />
                                <a href="tel:+18001234567" className="group-hover:text-white transition-colors">1-800-123-4567</a>
                            </li>
                            <li className="flex items-start group">
                                <Mail className="h-4 w-4 mr-3 text-primary group-hover:text-white transition-colors mt-1" />
                                <a href="mailto:dispatch@newpath.com" className="group-hover:text-white transition-colors">dispatch@newpath.com</a>
                            </li>
                            <li className="flex items-start group">
                                <MapPin className="h-4 w-4 mr-3 text-primary group-hover:text-white transition-colors mt-1" />
                                <span className="text-gray-400">123 Industrial Pkwy,<br /> Logistics City, ST 12345</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-lg border-l-4 border-primary pl-4">Legal</h3>
                        <ul className="space-y-2 text-sm font-medium text-gray-400">
                            <li><span className="text-gray-500">MC #000000</span></li>
                            <li><span className="text-gray-500">DOT #0000000</span></li>
                            <li><Link href="#" className="hover:text-white transition-colors block py-1">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors block py-1">Terms of Service</Link></li>
                        </ul>
                        {/* Social Icons */}
                        <div className="flex space-x-4 pt-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700 pt-8 pb-8 text-center text-sm text-gray-600 font-bold uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} New Path Logistics. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
