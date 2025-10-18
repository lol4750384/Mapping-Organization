import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const stored = localStorage.getItem('nav-collapsed');
    if (stored) setCollapsed(stored === 'true');
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
    transition: 'all 0.2s ease',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: colorBgContainer,
    color: colorPrimary,
  };

  const DesktopNav = () => (
    <aside style={{ ...navStyle, width: collapsed ? 90 : 280, height: '100vh', padding: '20px 12px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', padding: '8px 12px', borderRadius: 12, background: colorBgContainer }}>
          <div style={{ background: colorPrimary, padding: 8, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RocketOutlined style={{ color: colorBgContainer, fontSize: collapsed ? 20 : 24 }} />
          </div>
          {!collapsed && <span style={{ color: colorPrimary, fontSize: 20, fontWeight: 800 }}>UPB-Project</span>}
        </div>
        {!collapsed && (
          <Tooltip title={`Modo ${mode === 'light' ? 'oscuro' : 'claro'}`}>
            <Button
              shape="circle"
              onClick={toggleMode}
              style={{
                width: 40,
                height: 40,
                background: mode === 'dark' ? colorPrimary : colorBgContainer,
                color: mode === 'dark' ? colorBgContainer : colorPrimary,
                border: `1px solid ${colorPrimary}`,
              }}
              icon={mode === 'light' ? <MoonOutlined /> : <SunOutlined />}
            />
          </Tooltip>
        )}
      </div>
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, overflow: 'auto' }}>
        {links.map(({ path, label, icon }) => {
          const active = location.pathname === path;
          return (
            <Tooltip key={path} title={collapsed ? label : ''} placement="right">
              <button
                onClick={() => navigate(path)}
                style={active ? activeButtonStyle : buttonStyle}
                onMouseEnter={e => { if (!active && colorBgContainer) { e.currentTarget.style.background = colorBgContainer; e.currentTarget.style.color = colorPrimary ?? ''; } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = colorText ?? '#000'; } }}
              >
                <span style={{ fontSize: 18, width: 24, display: 'flex', justifyContent: 'center' }}>{icon}</span>
                {!collapsed && <span style={{ fontWeight: active ? 700 : 600 }}>{label}</span>}
              </button>
            </Tooltip>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', padding: '12px 0' }}>
        <Tooltip title={collapsed ? 'Expandir menú' : 'Colapsar menú'}>
          <Button
            onClick={() => setCollapsed(!collapsed)}
            type="text"
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: collapsed ? colorPrimary : 'transparent',
              color: collapsed ? colorBgContainer : colorPrimary,
              border: colorBorder ? `1px solid ${colorBorder}` : undefined,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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
              <span style={{ fontWeight: 800, fontSize: 18 }}>UPB-Project</span>
            </div>
            <Tooltip title={`Modo ${mode === 'light' ? 'oscuro' : 'claro'}`}>
              <Button
                shape="circle"
                onClick={toggleMode}
                style={{
                  width: 44,
                  height: 44,
                  background: mode === 'dark' ? colorPrimary : colorBgContainer,
                  color: mode === 'dark' ? colorBgContainer : colorPrimary,
                  border: `1px solid ${colorPrimary}`,
                }}
                icon={mode === 'light' ? <MoonOutlined /> : <SunOutlined />}
              />
            </Tooltip>
          </div>
        </header>
        <Drawer
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <RocketOutlined style={{ color: colorPrimary, fontSize: 20 }} />
              <span style={{ color: colorPrimary, fontWeight: 800, fontSize: 18 }}>UPB-Project</span>
            </div>
          }
          placement="left"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          bodyStyle={{ background: colorBgLayout, padding: 16 }}
          headerStyle={{ background: colorBgLayout, borderBottom: colorBorder ? `1px solid ${colorBorder}` : undefined }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {links.map(({ path, label, icon }) => {
              const active = location.pathname === path;
              return (
                <button
                  key={path}
                  onClick={() => { navigate(path); setDrawerOpen(false); }}
                  style={active ? activeButtonStyle : buttonStyle}
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