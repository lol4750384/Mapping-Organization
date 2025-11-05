import { useState, useEffect } from 'react';
import { Button, Tooltip, Drawer } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  RocketOutlined,
  BugOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
  FundOutlined,
} from '@ant-design/icons';
import { useTheme } from '../ThemeProvider';
import { lightTheme, darkTheme } from '../theme.ts';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, toggleMode } = useTheme();
  const tokens = (mode === 'light' ? lightTheme.token : darkTheme.token) || {};
  const { colorBgLayout, colorBorder, colorPrimary, colorBgContainer, colorText } = tokens;

  const links = [
    { path: '/testing', label: 'Testing', icon: <BugOutlined /> },
    { path: '/funding', label: 'Financiación', icon: <FundOutlined /> },
    { path: '/about', label: 'Sobre el Developer', icon: <UserOutlined /> },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('nav-collapsed');
    if (stored) setCollapsed(stored === 'true');
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => { localStorage.setItem('nav-collapsed', String(collapsed)); }, [collapsed]);
  useEffect(() => {
    const onResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navStyle = {
    background: colorBgLayout,
    borderRight: colorBorder ? `1px solid ${colorBorder}` : undefined,
    color: colorText,
    transition: 'background 200ms ease, border-color 200ms ease',
  };

  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    color: colorText,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    padding: '16px 20px',
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 15,
    transition: 'transform 160ms ease, opacity 260ms ease, background 160ms ease, color 160ms ease',
    willChange: 'transform, opacity',
  } as React.CSSProperties;

  const activeButtonStyle = {
    ...buttonStyle,
    background: colorBgContainer,
    color: colorPrimary,
  } as React.CSSProperties;

  const reducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleThemeEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion) return;
    const btn = e.currentTarget;
    btn.style.transform = 'scale(1.06)';
  };
  const handleThemeLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.transform = 'scale(1)';
    btn.style.boxShadow = 'none';
  };

  const handleCollapseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion) return;
    const btn = e.currentTarget;
    btn.style.transform = 'translateY(-2px) scale(1.03)';
    const icon = btn.querySelector('span');
    if (icon) (icon as HTMLElement).style.transform = 'rotate(18deg) translateX(2px)';
  };
  const handleCollapseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.transform = 'translateY(0) scale(1)';
    btn.style.boxShadow = 'none';
    const icon = btn.querySelector('span');
    if (icon) (icon as HTMLElement).style.transform = 'rotate(0deg) translateX(0)';
  };

  const DesktopNav = () => (
    <aside
      style={{
        ...navStyle,
        width: collapsed ? 90 : 280,
        minHeight: '100vh',
        padding: '20px 12px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 240ms cubic-bezier(.2,.9,.2,1)',
      }}
      aria-label="Navigation"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: 12,
            background: colorBgContainer,
            transition: 'transform 180ms ease, opacity 180ms ease',
            transform: mounted ? 'translateY(0)' : 'translateY(6px)',
            opacity: mounted ? 1 : 0,
          }}
          role="button"
          aria-label="Inicio"
        >
          <div
            style={{
              background: colorPrimary,
              padding: 8,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 220ms ease',
              transform: collapsed ? 'scale(1)' : 'scale(1)',
            }}
          >
            <RocketOutlined style={{ color: colorBgContainer, fontSize: collapsed ? 20 : 24 }} />
          </div>
          {!collapsed && <span style={{ color: colorPrimary, fontSize: 20, fontWeight: 800 }}>Organización Maping</span>}
        </div>
        {!collapsed && (
          <Tooltip title={`Modo ${mode === 'light' ? 'oscuro' : 'claro'}`}>
            <Button
              shape="circle"
              onClick={toggleMode}
              onMouseEnter={handleThemeEnter}
              onMouseLeave={handleThemeLeave}
              style={{
                width: 40,
                height: 40,
                background: mode === 'dark' ? colorPrimary : colorBgContainer,
                color: mode === 'dark' ? colorBgContainer : colorPrimary,
                border: colorPrimary ? `1px solid ${colorPrimary}` : undefined,
                transition: 'transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms ease, background 160ms ease, color 160ms ease',
              }}
              icon={mode === 'light' ? <MoonOutlined /> : <SunOutlined />}
              aria-label="Toggle theme"
            />
          </Tooltip>
        )}
      </div>
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, overflow: 'auto' }}>
        {links.map((l, idx) => {
          const { path, label, icon } = l;
          const active = location.pathname === path;
          const entryStyle: React.CSSProperties = {
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(8px)',
            transitionDelay: `${idx * 45}ms`,
          };
          return (
            <Tooltip key={path} title={collapsed ? label : ''} placement="right">
              <button
                onClick={() => navigate(path)}
                style={{
                  ...(active ? activeButtonStyle : buttonStyle),
                  ...entryStyle,
                }}
                onMouseEnter={e => {
                  if (!active) {
                    e.currentTarget.style.background = (colorBgContainer ?? colorBgLayout) as string;
                    e.currentTarget.style.color = (colorPrimary ?? colorText) as string;
                  }
                  e.currentTarget.style.transform = 'translateX(6px) scale(1.02)';
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = (colorText ?? '') as string;
                  }
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                aria-label={label}
              >
                <span style={{ fontSize: 18, width: 24, display: 'flex', justifyContent: 'center' }}>{icon}</span>
                {!collapsed && <span style={{ fontWeight: active ? 700 : 600 }}>{label}</span>}
              </button>
            </Tooltip>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', padding: '12px 0', position: 'sticky', bottom: 16, zIndex: 20 }}>
        <Tooltip title={collapsed ? 'Expandir menú' : 'Colapsar menú'}>
          <Button
            onClick={() => setCollapsed(!collapsed)}
            onMouseEnter={handleCollapseEnter}
            onMouseLeave={handleCollapseLeave}
            type="text"
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: collapsed ? colorPrimary : colorBgContainer,
              color: collapsed ? colorBgContainer : colorPrimary,
              border: colorBorder ? `1px solid ${colorBorder}` : undefined,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 240ms cubic-bezier(.2,.9,.2,1), background 160ms ease, color 160ms ease, box-shadow 220ms ease',
              transform: 'translateY(0)',
            }}
            icon={
              <span style={{ display: 'inline-flex', transition: 'transform 320ms cubic-bezier(.2,.9,.2,1)' }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </span>
            }
            aria-label={collapsed ? 'Expandir menú' : 'Colapsar menú'}
          />
        </Tooltip>
      </div>
    </aside>
  );

  const MobileNav = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
      <>
        <header style={{ ...navStyle, padding: '12px 20px', position: 'sticky', top: 0, zIndex: 1000, borderBottom: colorBorder ? `1px solid ${colorBorder}` : undefined }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div onClick={() => setDrawerOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <RocketOutlined style={{ fontSize: 28 }} />
              <span style={{ fontWeight: 800, fontSize: 18 }}>Organización Maping</span>
            </div>
            <Tooltip title={`Modo ${mode === 'light' ? 'oscuro' : 'claro'}`}>
              <Button
                shape="circle"
                onClick={toggleMode}
                onMouseEnter={handleThemeEnter}
                onMouseLeave={handleThemeLeave}
                style={{
                  width: 44,
                  height: 44,
                  background: mode === 'dark' ? colorPrimary : colorBgContainer,
                  color: mode === 'dark' ? colorBgContainer : colorPrimary,
                  border: colorPrimary ? `1px solid ${colorPrimary}` : undefined,
                  transition: 'transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms ease',
                }}
                icon={mode === 'light' ? <MoonOutlined /> : <SunOutlined />}
                aria-label="Toggle theme"
              />
            </Tooltip>
          </div>
        </header>
        <Drawer
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <RocketOutlined style={{ color: colorPrimary, fontSize: 20 }} />
              <span style={{ color: colorPrimary, fontWeight: 800, fontSize: 18 }}>Organización Maping</span>
            </div>
          }
          placement="left"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          bodyStyle={{ background: colorBgLayout, padding: 16, transition: 'opacity 200ms ease' }}
          headerStyle={{ background: colorBgLayout, borderBottom: colorBorder ? `1px solid ${colorBorder}` : undefined }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {links.map((l, idx) => {
              const { path, label, icon } = l;
              const active = location.pathname === path;
              return (
                <button
                  key={path}
                  onClick={() => { navigate(path); setDrawerOpen(false); }}
                  style={{
                    ...(active ? activeButtonStyle : buttonStyle),
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(8px)',
                    transitionDelay: `${idx * 45}ms`,
                  }}
                  aria-label={label}
                >
                  <span style={{ fontSize: 18 }}>{icon}</span>
                  <span style={{ fontWeight: active ? 700 : 600 }}>{label}</span>
                </button>
              );
            })}
          </div>
        </Drawer>
      </>
    );
  };

  return isMobileView ? <MobileNav /> : <DesktopNav />;
};

export default Navigation;