"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { FC } from "react";

interface InviteButtonProps {}

const InviteButton: FC<InviteButtonProps> = ({}) => {
  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"}>
                <Plus className="w-4 h-4 mr-2"/>
                Invite Members
            </Button>
        </DialogTrigger>
        <DialogContent className="p-0 border-none bg-transparent max-w-[880px]">
            <OrganizationProfile/>
        </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
