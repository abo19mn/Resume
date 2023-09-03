"use client";

import { NextIntlClientProvider } from "next-intl";

function ClientProviders({
  children,
  params: { locale },
  messages,
}: {
  children: React.ReactNode;
  params: { locale: any };
  messages: any;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
export default ClientProviders;
