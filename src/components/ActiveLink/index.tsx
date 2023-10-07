"use client";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  //asPath junto com useRouter me dá a rota que estou
  const { asPath } = useRouter();
  const className = asPath === rest.href ? activeClassName : "";
  return (
    <>
      <Link {...rest} legacyBehavior>
        {cloneElement(children, {
          className,
        })}
      </Link>
    </>
  );
}
