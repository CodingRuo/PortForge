"use client";

import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ReactQueryProviderProps = {
    children: React.ReactNode;
}

const CONFIGURATION = {
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000
        }
    }
}

const makeQueryClient = () => {
    return new QueryClient(CONFIGURATION)
}

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
    if (isServer) {
        return makeQueryClient();
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
    }
}

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
    const queryClient = getQueryClient();



    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export { ReactQueryProvider };
