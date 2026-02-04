import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/modules/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";

export default function ServicesPage() {
    const services = [
        {
            title: "Full Truckload (FTL)",
            description: "Dedicated, timely transport for large shipments. We provide exclusive trailer use for maximum efficiency across North America.",
            imageSrc: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop",
            href: "/contact"
        },
        {
            title: "Less Than Truckload (LTL)",
            description: "Cost-effective shipping for smaller freight. Consolidate your cargo without compromising on speed or safety.",
            imageSrc: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2940&auto=format&fit=crop",
            href: "/contact"
        },
        {
            title: "Refrigerated Transport",
            description: "Temperature-controlled logistics for perishable goods. We ensure your cold chain remains intact from pickup to delivery.",
            imageSrc: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2874&auto=format&fit=crop",
            href: "/contact"
        },
        {
            title: "Expedited Shipping",
            description: "Time-critical delivery solutions when every minute counts. prioritized routing for urgent shipments.",
            imageSrc: "https://images.unsplash.com/photo-1566576912902-1dcd4f5195e4?q=80&w=2849&auto=format&fit=crop",
            href: "/contact"
        },
        {
            title: "Intermodal Logistics",
            description: "Efficiently combining rail and truck transport for long-haul sustainability and cost savings.",
            imageSrc: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=2940&auto=format&fit=crop",
            href: "/contact"
        },
        {
            title: "Warehousing & Distribution",
            description: "Strategic storage solutions and safe handling of your inventory before it hits the road.",
            imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop",
            href: "/contact"
        }
    ];

    return (
        <div className="flex flex-col font-sans">
            <PageHeader
                title="Our Services"
                description="From single pallets to full truckloads, we offer a comprehensive suite of logistics solutions designed to keep your supply chain moving."
            />

            <section className="bg-gray-50 py-20 lg:py-32">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                {...service}
                                className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
                            />
                        ))}
                    </div>
                </Container>
            </section>
            <CTASection />
        </div>
    );
}
