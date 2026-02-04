import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export default function CareersPage() {
    const benefits = [
        "Competitive Pay & Bonuses",
        "Comprehensive Health Insurance",
        "401(k) Retirement Plan",
        "New, Modern Equipment",
        "Home Time Guarantees",
        "Paid Vacation & Holidays"
    ];

    const jobs = [
        {
            title: "CDL-A OTR Driver",
            location: "Nationwide / Remote",
            type: "Full-time",
            description: "Join our elite fleet of drivers. We offer consistent miles, no-touch freight options, and top-tier equipment."
        },
        {
            title: "Logistics Coordinator",
            location: "Headquarters - Chicago, IL",
            type: "Full-time",
            description: "Manage fleet dispatching and ensure on-time deliveries. Requires strong communication skills and attention to detail."
        },
        {
            title: "Diesel Mechanic",
            location: "Maintenance Hub - Dallas, TX",
            type: "Full-time",
            description: "Maintain our fleet of Peterbilt and Kenworth trucks. Experience with heavy-duty diesel engines required."
        }
    ];

    return (
        <div className="flex flex-col font-sans">
            <PageHeader
                title="Drive With The Best"
                description="We're always looking for talented individuals to join the New Path family. Whether you're behind the wheel or behind a desk, we offer a path to success."
            />

            <section className="py-20 lg:py-32 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Benefits Sidebar */}
                        <div>
                            <h3 className="text-2xl font-bold text-secondary mb-6">Why Join Us?</h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Job Listings */}
                        <div className="lg:col-span-2 space-y-6">
                            <h3 className="text-2xl font-bold text-secondary mb-6">Current Openings</h3>
                            {jobs.map((job, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                        <h4 className="text-xl font-bold text-secondary">{job.title}</h4>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2 sm:mt-0 w-fit">
                                            {job.type}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-3 font-medium">{job.location}</p>
                                    <p className="text-gray-600 mb-6">{job.description}</p>
                                    <Button variant="outline" className="text-sm">Apply Now</Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
