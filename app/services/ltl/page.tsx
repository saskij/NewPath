import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { Package, DollarSign, Calendar, Layers } from "lucide-react";
import Link from "next/link";
import { assetPath } from "@/lib/utils";

export default function LTLPage() {
    const benefits = [
        {
            title: "Cost Effective",
            description: "Pay only for the space your freight occupies. Ideal for shipments between 150 and 15,000 lbs.",
            icon: DollarSign
        },
        {
            title: "Flexible Options",
            description: "Ship what you need, when you need it. You don't have to wait to fill a whole truck.",
            icon: Layers
        },
        {
            title: "Expert Handling",
            description: "Our team ensures your cargo is consolidated safely and efficiently to prevent damage.",
            icon: Package
        },
        {
            title: "Reliable Schedules",
            description: "Consistent pickup and delivery windows help you keep your supply chain running smoothly.",
            icon: Calendar
        }
    ];

    return (
        <div className="flex flex-col font-sans">
            <PageHeader
                title="Less Than Truckload (LTL)"
                description="Efficient and cost-effective shipping for smaller loads. The same reliability, scaled to your needs."
            />

            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Efficient LTL Solutions</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Not every shipment requires a full 53-foot trailer. For smaller loads, Less Than Truckload (LTL)
                                    shipping offers a flexible and budget-friendly alternative without sacrificing reliability.
                                </p>
                                <p>
                                    We treat your LTL freight with the same "white glove" attention as our full loads.
                                    By consolidating shipments intelligently, we help you save money while ensuring your goods arrive safely and on time.
                                </p>
                                <div className="pt-4">
                                    <Link href="/contact">
                                        <Button size="lg" className="uppercase font-bold">
                                            Get an LTL Quote
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
