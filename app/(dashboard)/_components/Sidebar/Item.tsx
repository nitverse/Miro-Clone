"use client";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import { FC } from "react";
import Hint from "../Hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item: FC<ItemProps> = ({ id, name, imageUrl }) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;
  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };
  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" sideOffset={18} align="start">
        <Image
          fill
          src={imageUrl}
          alt={name}
          onClick={() => {}}
          className="rounded-md cursor-pointer opacity-75 hover:opacity-100 transition"
        />
      </Hint>
    </div>
  );
};

export default Item;
