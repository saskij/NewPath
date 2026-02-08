import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Truck, DollarSign, Shield } from "lucide-react";

export default function JoinOurTeamPage() {
    const benefits = [
        "Competitive Pay & Bonuses",
        "Comprehensive Health Insurance",
        "401(k) Retirement Plan",
        "New, Modern Equipment",
        "Home Time Guarantees",
        "Paid Vacation & Holidays"
    ];

    const requirements = [
        "Valid CDL-A License",
        "Clean Driving Record",
        "2+ Years Experience Preferred",
        "Ability to Pass DOT Physical"
    ];

    return (
        <div className="flex flex-col font-sans">
            <PageHeader
                title="Join Our Team"
                description="Join a company where you're treated like family, not just a number. We're looking for professional drivers who value respect and reliability."
            />

            {/* Why Drive With Us */}
            <section className="py-20 lg:py-32 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-secondary mb-6">Why Drive With New Path?</h2>
                        <p className="text-xl text-gray-600">Join a company that values safety, respects your time, and invests in your success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <DollarSign className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Competitive Pay</h3>
                            <p className="text-gray-600">Fair, consistent pay for honest work. We believe in rewarding our drivers for their dedication.</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <Truck className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Modern Fleet</h3>
                            <p className="text-gray-600">Drive the latest Peterbilt and Kenworth trucks equipped with the best technology.</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <Shield className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Safety First</h3>
                            <p className="text-gray-600">Comprehensive safety training and support to keep you safe on the road.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Benefits & Requirements */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Benefits */}
                        <div>
                            <h3 className="text-3xl font-bold text-secondary mb-8">Benefits Package</h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                                        <span className="text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                            <h3 className="text-3xl font-bold text-secondary mb-8">Requirements</h3>
                            <ul className="space-y-4">
                                {requirements.map((requirement, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                                        <span className="text-lg">{requirement}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12">
                                <Button size="lg" className="w-full sm:w-auto uppercase font-bold">
                                    Apply Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
