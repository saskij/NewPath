import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Shield, Award, CheckCircle, AlertTriangle } from "lucide-react";

export default function SafetyPage() {
    const commitments = [
        {
            title: "Driver Training",
            description: "Comprehensive safety training programs including defensive driving, hazmat handling, and emergency response protocols.",
            icon: Shield
        },
        {
            title: "Equipment Inspections",
            description: "Regular pre-trip and post-trip inspections, plus scheduled maintenance to ensure all vehicles meet DOT standards.",
            icon: CheckCircle
        },
        {
            title: "Safety Technology",
            description: "Advanced collision avoidance systems, lane departure warnings, and electronic logging devices in all trucks.",
            icon: AlertTriangle
        },
        {
            title: "Certifications",
            description: "DOT certified, FMCSA compliant, and recognized by industry safety organizations for our exemplary record.",
            icon: Award
        }
    ];

    const initiatives = [
        "Zero tolerance policy for distracted driving",
        "24/7 driver support and assistance hotline",
        "Weather monitoring and route optimization",
        "Fatigue management and rest compliance",
        "Drug and alcohol testing programs",
        "Continuous safety performance monitoring"
    ];

    return (
        <div className="flex flex-col font-sans">
            <PageHeader
                title="Safety First"
                description="At New Path Logistics, safety is not just a priority—it's our culture. We are committed to protecting our drivers, cargo, and everyone on the road."
            />

            {/* Safety Commitments */}
            <section className="py-20 lg:py-32 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-secondary mb-6">Our Safety Commitment</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We maintain an impeccable safety record through rigorous training, well-maintained equipment, and a personal commitment to every load.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {commitments.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Statistics */}
            <section className="py-20 bg-primary text-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="text-6xl font-bold mb-3">99.9%</div>
                            <div className="text-xl opacity-90">Safety Compliance Rate</div>
                        </div>
                        <div>
                            <div className="text-6xl font-bold mb-3">0</div>
                            <div className="text-xl opacity-90">Major Accidents (2025)</div>
                        </div>
                        <div>
                            <div className="text-6xl font-bold mb-3">5★</div>
                            <div className="text-xl opacity-90">DOT Safety Rating</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Safety Initiatives */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Safety Initiatives</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {initiatives.map((initiative, index) => (
                                <div key={index} className="flex items-start bg-white p-6 rounded-lg border border-gray-200">
                                    <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700 text-lg">{initiative}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-3xl font-bold text-secondary mb-4">Questions About Our Safety Programs?</h3>
                        <p className="text-gray-600 mb-8">Our safety team is available to discuss our protocols and answer any questions.</p>
                        <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg uppercase transition-colors">
                            Contact Safety Department
                        </button>
                    </div>
                </Container>
            </section>
        </div>
    );
}
