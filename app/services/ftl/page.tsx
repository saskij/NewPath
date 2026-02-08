import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { Truck, Clock, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { assetPath } from "@/lib/utils";

export default function FTLPage() {
    const benefits = [
        {
            title: "Exclusive Use",
            description: "Your freight is the only freight on the truck. No co-loading, no confusion, just your goods from pickup to delivery.",
            icon: Truck
        },
        {
            title: "Faster Transit",
            description: "Direct routes mean no stops for other deliveries. Your shipment gets to its destination faster.",
            icon: Clock
        },
        {
            title: "Maximum Security",
            description: "With a sealed trailer from dock to dock, the risk of handling damage or theft is virtually eliminated.",
            icon: ShieldCheck
        },
        {
            title: "Real-Time Tracking",
            description: "Know exactly where your shipment is. We provide personal updates so you're never left guessing.",
            icon: MapPin
        }
    ];

    return (
        <div className="flex flex-col font-sans">
            <PageHeader
                title="Full Truckload (FTL)"
                description="Dedicated transport for when your business needs the whole trailer. Fast, secure, and reliable."
            />

            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Why Choose Full Truckload?</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    When you have a large shipment or time-sensitive cargo, Full Truckload (FTL) is the gold standard.
                                    With FTL, you reserve the entire trailer for your goods, ensuring that they are the sole priority of the driver.
                                </p>
                                <p>
                                    At New Path Logistics, we treat every FTL shipment with the care it deserves.
                                    Our drivers are experienced professionals who understand that they aren't just moving freight—they're moving your business.
                                </p>
                                <div className="pt-4">
                                    <Link href="/contact">
                                        <Button size="lg" className="uppercase font-bold">
                                            Get an FTL Quote
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <benefit.icon className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
