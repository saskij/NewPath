import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { assetPath } from "@/lib/utils";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col font-sans">
            <PageHeader
                title="About New Path"
                description="Founded on the principles of reliability and transparency, New Path Logistics has grown from a single truck operation into a premier logistics partner."
            />

            <section className="py-20 lg:py-32">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={assetPath("/images/new-path-truck-white.jpg")}
                                alt="New Path Logistics Team"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    We believe that logistics is more than just moving boxes from point A to point B. It's about keeping promises, ensuring safety, and driving the economy forward. Our team of dedicated drivers and logistics experts work around the clock to ensure your supply chain never stops.
                                </p>
                                <div className="bg-gray-50 border-l-4 border-primary p-6 mt-8 rounded-r-lg">
                                    <p className="font-medium text-secondary italic">
                                        "Our mission is to redefine the standard of freight transport through innovation, integrity, and verified excellence."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
