import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
        src="/empty-search.svg"
        height={240}
        width={240}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">
        No results found!
      </h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};