"use client";
import { UserButton, useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/EmptyOrg";
import BoardList from "./_components/BoardList";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}
export default function Home({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  return (
    <div className="flex flex-1 h-[calc(100%-80px)]  p-6  gap-y-4">

      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
}
