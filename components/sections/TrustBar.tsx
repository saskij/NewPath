export function TrustBar() {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-wrap justify-between items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-md">
                <span className="font-bold text-gray-500 uppercase text-xs tracking-wider">USDOT:</span>
                <span className="font-mono font-medium text-secondary">######</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-md">
                <span className="font-bold text-gray-500 uppercase text-xs tracking-wider">MC:</span>
                <span className="font-mono font-medium text-secondary">######</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <span className="text-sm font-medium text-gray-600">Fully Licensed & Insured</span>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <span className="text-sm font-medium text-gray-600">USA & Canada Coverage</span>
        </div>
    );
}
