"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";

export function NavigationDock() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <Dock>
        <DockIcon onClick={() => scrollToSection('home')}>
          <FiHome className="w-7 h-7 text-gray-700" />
        </DockIcon>
        <DockIcon onClick={() => scrollToSection('about')}>
          <FiUser className="w-7 h-7 text-gray-700" />
        </DockIcon>
        <DockIcon onClick={() => scrollToSection('skills')}>
          <FiCode className="w-7 h-7 text-gray-700" />
        </DockIcon>
        <DockIcon onClick={() => scrollToSection('projects')}>
          <FiBriefcase className="w-7 h-7 text-gray-700" />
        </DockIcon>
        <DockIcon onClick={() => scrollToSection('contact')}>
          <FiMail className="w-7 h-7 text-gray-700" />
        </DockIcon>
      </Dock>
    </div>
  );
} 