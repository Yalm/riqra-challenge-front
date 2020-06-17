import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';
import { FC, AnchorHTMLAttributes } from 'react';

const BlueLink = styled.a`
  color: #0500FF;
  text-decoration: none;
`;

const NavLink: FC<
  LinkProps & { name: string } & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ href, name, className }) => {
  return (
    <Link href={href} passHref>
      <BlueLink className={className}>{name}</BlueLink>
    </Link>
  );
};

export default NavLink;
