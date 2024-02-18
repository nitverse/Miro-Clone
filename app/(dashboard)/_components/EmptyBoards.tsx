"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const EmptyBoards = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="note" height={210} width={210} />
      <h2 className="text-2xl font-semibold mt-6">Create Your First Board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">Start by creating a board for your organization</p>
      <div className="mt-6">
        <Button size={"lg"} className="bg-indigo-700">
            Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
