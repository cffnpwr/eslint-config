export const NegativeArbitrary = () => <div className="-m-[-5px]">x</div>;
export const NotShorthand = () => <div className="w-4 h-4">x</div>;
export const Contradicting = () => <div className="px-2 px-4">x</div>;
export const UnnecessaryArbitrary = () => <div className="mt-[8px]">x</div>;
export const WrongOrder = () => <div className="items-center flex">x</div>;
export const ExtraWhitespace = () => <div className="flex  items-center">x</div>;
export const LongLine = () => <div className="flex flex-row items-center justify-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md">x</div>;
