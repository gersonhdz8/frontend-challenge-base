/* eslint-disable prettier/prettier */
"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <NextUIProvider>{children}</NextUIProvider>;
}
