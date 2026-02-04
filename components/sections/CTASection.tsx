import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-gray-200"
            >
                <div
                    className="absolute inset-0 opacity-100" // using image directly 
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2921&auto=format&fit=crop')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            <Container className="relative z-20 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-secondary mb-6 tracking-tight">
                    Request a Quote in Minutes
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    Contact us today for a fast, personalized freight quote.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="primary" className="text-lg px-10 h-14 uppercase tracking-wider font-bold shadow-xl shadow-primary/20">
                        Request a Quote
                    </Button>
                </div>
            </Container>
        </section>
    );
}
