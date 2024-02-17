import Image from "next/image";
import { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-4 justify-center items-center ">
      <Image src="/logo.svg" alt="logo" width={220} height={220} className="animate-pulse duration-700"/>
    </div>
  );
};

export default Loading;
