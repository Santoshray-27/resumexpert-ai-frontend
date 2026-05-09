/**
 * Layout Component — Premium Enterprise Redesign
 * Sidebar: Grouped nav, left-border accent active state, user pill
 * Header: Breadcrumb, search, notifications, avatar
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard, Upload, Brain, FileText, Briefcase,
  MessageSquare, LogOut, Menu, X, Star, Users,
  Shield, Crosshair, Bell, Search, ChevronRight,
  BarChart3, Settings2, Sparkles, UserSearch, Cpu
} from 'lucide-react';
import LogoIcon from './LogoIcon';

const navGroups = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
      { label: 'Upload Resume', icon: Upload, path: '/upload' },
      { label: 'Analysis', icon: BarChart3, path: '/analysis' },
    ]
  },
  {
    label: 'Tools',
    items: [
      { label: 'Resume Screening', icon: Shield, path: '/screening' },
      { label: 'Skill Gap Analyzer', icon: Crosshair, path: '/skill-gap' },
      { label: 'Resume Builder', icon: FileText, path: '/builder' },
      { label: 'Job Finder', icon: Briefcase, path: '/jobs' },
      { label: 'Interview Prep', icon: MessageSquare, path: '/interview' },
    ]
  },
  {
    label: '',
    items: [
      { label: 'Feedback', icon: Star, path: '/feedback' },
    ]
  }
];

const allNavItems = [
  ...navGroups.flatMap(g => g.items)
];

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const currentPage = allNavItems.find(n => n.path === location.pathname);
  const pageLabel = currentPage?.label || (location.pathname === '/profile' ? 'Profile' : 'Home');

  const NavLink = ({ item }) => (
    <Link
      to={item.path}
      onClick={() => setSidebarOpen(false)}
      className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
      aria-current={isActive(item.path) ? 'page' : undefined}
    >
      <item.icon size={17} className="shrink-0" />
      <span className="truncate">{item.label}</span>
    </Link>
  );

  const Sidebar = () => (
    <aside
      className="flex flex-col h-full w-64 shrink-0"
      style={{ background: 'var(--sidebar)', borderRight: '1px solid var(--sidebar-border)' }}
    >
      {/* Logo */}
      <div className="px-5 py-6" style={{ borderBottom: '1px solid var(--sidebar-border)' }}>
        <Link to="/dashboard" className="flex items-center gap-3 group">
          <div className="relative group/logo">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md transition-transform group-hover/logo:scale-110" 
                 style={{ backgroundColor: 'var(--primary)' }}>
              <LogoIcon size={18} className="text-white" />
            </div>
          </div>
          <span className="text-[17px] font-black tracking-tighter leading-none flex items-baseline" style={{ color: 'var(--foreground)' }}>
            Resume<span style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 900, fontSize: '18px', padding: '0 1px' }}>X</span>pert<span style={{ color: 'var(--muted-foreground)', fontWeight: 600, fontSize: '11px', marginLeft: '3px' }}>AI</span>
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-4">
        {navGroups.map((group, gi) => (
          <div key={gi}>
            {group.label && (
              <p className="px-3 mb-1 text-[10px] font-bold uppercase tracking-widest"
                 style={{ color: 'var(--muted-foreground)' }}>
                {group.label}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map(item => (
                <NavLink key={item.path} item={item} />
              ))}
            </div>
            {gi < navGroups.length - 1 && group.label && (
              <div className="mt-4" style={{ borderTop: '1px solid var(--sidebar-border)' }} />
            )}
          </div>
        ))}


      </nav>

      {/* User Profile Pill */}
      <div className="px-3 py-4" style={{ borderTop: '1px solid var(--sidebar-border)' }}>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors cursor-pointer group"
             style={{ background: 'transparent' }}
             onMouseEnter={e => e.currentTarget.style.background = 'var(--sidebar-accent)'}
             onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <Link to="/profile" className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs shrink-0"
                 style={{ backgroundColor: 'var(--primary)' }}>
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: 'var(--foreground)' }}>
                {user?.name || 'User'}
              </p>
              <p className="text-[11px] capitalize" style={{ color: 'var(--muted-foreground)' }}>
                {user?.role || 'Job Seeker'}
              </p>
            </div>
          </Link>
          <button
            onClick={logout}
            title="Sign Out"
            aria-label="Sign Out"
            className="p-1.5 rounded-lg transition-colors shrink-0 text-muted-foreground hover:text-red-500 hover:bg-red-50"
          >
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--background)' }}>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 z-50 shadow-2xl">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* ─── Top Header ─── */}
        <header
          className="h-14 px-6 flex items-center justify-between shrink-0 sticky top-0 z-30"
          style={{
            background: 'rgba(var(--card), 0.85)',
            borderBottom: '1px solid var(--border)',
            backdropFilter: 'blur(8px)',
            backgroundColor: 'oklch(0.9818 0.0054 95.0986 / 0.92)'
          }}
        >
          {/* Left: Mobile toggle + Breadcrumb */}
          <div className="flex items-center gap-3 text-sm">
            <button
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-accent"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5" style={{ color: 'var(--muted-foreground)' }}>
              <span className="hidden sm:inline">Home</span>
              <ChevronRight size={13} className="hidden sm:inline opacity-60" />
              <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                {pageLabel}
              </span>
            </div>
          </div>

          {/* Right: Search + Bell + Avatar */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <button
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-colors hover:bg-accent"
              style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}
              aria-label="Search (Ctrl+K)"
            >
              <Search size={15} />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden lg:inline px-1.5 py-0.5 text-[10px] font-mono rounded border"
                   style={{ background: 'var(--muted)', borderColor: 'var(--border)' }}>
                ⌘K
              </kbd>
            </button>

            {/* Notification Bell */}
            <button
              className="relative p-2 rounded-lg transition-colors hover:bg-accent"
              style={{ color: 'var(--muted-foreground)' }}
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border-2"
                style={{
                  backgroundColor: 'var(--primary)',
                  borderColor: 'var(--background)'
                }}
              />
            </button>

            {/* Avatar */}
            <Link
              to="/profile"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs shadow-sm ring-2"
              style={{
                backgroundColor: 'var(--primary)',
                ringColor: 'var(--background)'
              }}
              aria-label="Go to profile"
            >
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </Link>
          </div>
        </header>

        {/* ─── Page Content ─── */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-12 page-enter">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
