import Link from "next/link";
import { Truck, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/utils";

export function Footer() {
    return (
        <footer className="bg-[#1e3a5f] pt-20 pb-8 text-gray-300">
            <Container>
                {/* Top CTA Section */}
                <div className="mb-16 pb-12 border-b border-gray-600/30">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Request a Quote in Minutes</h3>
                            <p className="text-gray-300 text-lg">Contact us today for a fast, personalized freight quote.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                            <div className="flex items-center gap-2 text-white font-semibold text-lg">
                                <Phone className="h-5 w-5" />
                                <a href="tel:+18001234567" className="hover:text-primary transition-colors">1-800-123-4567</a>
                            </div>
                            <Link href="/contact">
                                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded uppercase transition-colors">
                                    GET A QUOTE
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">Our Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Full Truckload</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">LTL: least</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Dedicated Freight</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center">
                                <Phone className="h-4 w-4 mr-3 text-primary shrink-0" />
                                <a href="tel:+18001234567" className="hover:text-white transition-colors">1-800-123-4567</a>
                            </li>
                            <li className="flex items-start">
                                <Mail className="h-4 w-4 mr-3 text-primary shrink-0 mt-1" />
                                <a href="mailto:freight@newpath.logistics.com" className="hover:text-white transition-colors">freight@newpath.logistics.com</a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="h-4 w-4 mr-3 text-primary shrink-0 mt-1" />
                                <span>Ctr #12345 Ldrs Ldrs</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">Social</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Mail className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-600/30 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} New Path Copyrights. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
