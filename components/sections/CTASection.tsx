import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-gray-200"
            >
                <div
                    className="absolute inset-0 opacity-100"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2921&auto=format&fit=crop')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
            </div>

            <Container className="relative z-20 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-secondary mb-6 tracking-tight">
                    Request a Quote in Minutes
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Contact us today for a fast, personalized freight quote.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" variant="primary" className="text-base px-10 h-14 uppercase font-bold shadow-xl bg-primary hover:bg-primary/90">
                            Request a Quote
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
