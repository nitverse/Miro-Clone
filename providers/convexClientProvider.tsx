"use client";
import Loading from "@/components/ui/auth/Loading";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React, { FC } from "react";

interface ConvexClientProviderProps {
    children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

const ConvexClientProvider: FC<ConvexClientProviderProps> = ({children}) => {
  return (
    <ClerkProvider>
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
            <Authenticated>
            {children}
            </Authenticated>
            <AuthLoading>
                <Loading />
            </AuthLoading>
        </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;


