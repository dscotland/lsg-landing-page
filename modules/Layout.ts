import { type NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type PageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  pageProps: { requireAuth: boolean; role: string };
};
