import Link from "next/link";
import { Truck, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/utils";

export function Footer() {
    return (
        <footer className="bg-secondary pt-16 pb-8 text-gray-300">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <div className="bg-white/95 p-3 rounded-xl shadow-lg border border-gray-100 inline-block hover:scale-105 hover:shadow-xl transition-all duration-300">
                                <img
                                    src={assetPath("/logo.png")}
                                    alt="New Path Logistics"
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Delivering excellence in transportation across North America. We are committed to safety, reliability, and customer satisfaction.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Full Truckload</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Less Than Truckload</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Intermodal</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Warehousing</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Expedited Shipping</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                                <span>123 Logistics Way<br />Suite 400<br />Transport City, TX 75000</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                                <span>(800) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                                <span>dispatch@newpathlogistics.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter / Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Drive for Us</Link></li>
                            <li><Link href="/track" className="hover:text-primary transition-colors">Track Shipment</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} New Path Logistics. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
