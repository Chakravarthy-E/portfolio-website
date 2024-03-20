import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section>
      <article>
        <div>{children}</div>
      </article>
    </section>
  );
}
