import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const EmptyOrg = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image src="/elements.svg" alt="elements" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome To Board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an Organisation to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-indigo-700">
              Create organization
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
