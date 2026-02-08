import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Gauge, Shield, Snowflake, Wrench } from "lucide-react";

export default function EquipmentPage() {
    const fleet = [
        {
            title: "Premium Tractors",
            description: "Late-model Peterbilt and Kenworth tractors equipped with the latest safety and comfort features.",
            specs: [
                "Peterbilt 579 & 389 Models",
                "Kenworth T680 & W900",
                "Average Fleet Age: 2 Years",
                "Advanced Safety Systems"
            ],
            icon: Gauge
        },
        {
            title: "Trailer Variety",
            description: "Diverse trailer fleet to handle any freight requirement, from dry van to specialized equipment.",
            specs: [
                "53' Dry Van Trailers",
                "48' & 53' Flatbeds",
                "Refrigerated Units",
                "Step Deck & Lowboy"
            ],
            icon: Shield
        },
        {
            title: "Temperature Control",
            description: "State-of-the-art refrigerated units for temperature-sensitive cargo with precision control.",
            specs: [
                "Carrier & Thermo King Units",
                "Multi-Temperature Zones",
                "-20°F to 70°F Range",
                "Real-Time Monitoring"
            ],
            icon: Snowflake
        },
        {
            title: "Maintenance Program",
            description: "Rigorous preventive maintenance schedule ensures our fleet stays road-ready and reliable.",
            specs: [
                "Certified Technicians",
                "24/7 Roadside Assistance",
                "Regular Inspections",
                "Parts Replacement Program"
            ],
            icon: Wrench
        }
    ];

    return (
        <div className="flex flex-col font-sans">
            <PageHeader
                title="Our Equipment"
                description="Industry-leading fleet maintained to the highest standards for safety, reliability, and efficiency."
            />

            {/* Fleet Overview */}
            <section className="py-20 lg:py-32 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-secondary mb-6">Quality Equipment, Meticulously Maintained</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We take pride in our equipment. Our trucks are late-model, meticulously maintained, and equipped with the latest safety technology to ensure your freight is always in good hands.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {fleet.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-primary/30 transition-colors">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mr-4">
                                            <Icon className="h-7 w-7 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-secondary">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                                    <ul className="space-y-3">
                                        {item.specs.map((spec, i) => (
                                            <li key={i} className="flex items-start text-gray-700">
                                                <span className="text-primary mr-2 font-bold">•</span>
                                                <span>{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">100%</div>
                            <div className="text-gray-600 font-medium">Reliable Fleet</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">2</div>
                            <div className="text-gray-600 font-medium">Years Avg Age</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">99.8%</div>
                            <div className="text-gray-600 font-medium">Uptime Rate</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-gray-600 font-medium">Support</div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
