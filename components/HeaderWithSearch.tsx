'use client';

import { useState } from 'react';
import Header from './Header';
import SearchModal from './SearchModal';

export default function HeaderWithSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Header onSearchOpen={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
