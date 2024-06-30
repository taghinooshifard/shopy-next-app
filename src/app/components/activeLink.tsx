import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactElement | (({ active }: { active: boolean }) => ReactElement);
  href: string;
  as: string;
}

export default function ActiveLink({ children, ...props }: Props) {
  const currentPath = usePathname();
  const active = props.href == currentPath || props.as == currentPath;
  return (
    <Link {...props}>
      {typeof children == "function" ? children({ active }) : children}
    </Link>
  );
}
