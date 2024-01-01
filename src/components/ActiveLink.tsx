"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkprops = {
  activeClassname: string;
  children: React.ReactNode;
  className?: string;
  href: string;
  exact?: boolean;
};

const ActiveLink = ({
  className = "",
  activeClassname,
  children,
  exact = false,
  ...rest
}: ActiveLinkprops) => {
  const pathname = usePathname();

  const isActive = () => {
    if (exact) {
      return pathname === rest.href;
    } else {
      const initialRoute = pathname.substring(0, rest.href.length);
      return initialRoute === rest.href;
    }
  };

  return (
    <Link className={`${className} ${isActive() && activeClassname}`} {...rest}>
      {children}
    </Link>
  );
};

export default ActiveLink;
