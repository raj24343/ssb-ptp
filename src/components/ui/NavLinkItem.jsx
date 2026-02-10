import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavLinkItem({ item, onClick }) {
  const { pathname } = useLocation();
  const isActive = item.href && pathname === item.href;

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={`nav-link ${isActive ? 'nav-link-active' : ''}`} onClick={onClick}>
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.href} className={`nav-link ${isActive ? 'nav-link-active' : ''}`} onClick={onClick}>
      {item.label}
    </Link>
  );
}