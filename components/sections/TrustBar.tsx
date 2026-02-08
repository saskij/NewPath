export function TrustBar() {
    return (
        <div className="bg-gray-50 border border-gray-200 p-6 flex flex-wrap justify-center items-center gap-6 rounded-lg">
            <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-700 uppercase text-sm tracking-wide">USDOT#:</span>
                <span className="font-mono font-medium text-secondary">######</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-700 uppercase text-sm tracking-wide">MC #:</span>
                <span className="font-mono font-medium text-secondary">######</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <span className="text-sm font-semibold text-gray-700">Fully Licensed & Insured</span>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <span className="text-sm font-semibold text-gray-700">USA & Canada Coverage</span>
        </div>
    );
}
