import React from 'react'
import { Space, Tooltip } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HomeOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons'
import { useTheme } from '../ThemeProvider'
import { lightTheme, darkTheme } from '../theme.ts'

const Navigation: React.FC = () => {
  const navigate = useNavigate()
  const { mode, toggleMode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}

  const navBg = tokens.colorBgLayout ?? tokens.colorBgBase
  const border = tokens.colorBorder
  const text = tokens.colorText
  const primary = tokens.colorPrimary
  const container = tokens.colorBgContainer

  return (
    <nav
      id="main-navigation"
      role="navigation"
      aria-label="Main navigation"
      className="flex items-center justify-between px-4 md:px-6 py-3"
      style={{ background: navBg, borderBottom: border ? `1px solid ${border}` : undefined, color: text }}
    >
      <button
        onClick={() => navigate('/')}
        aria-label="Ir a inicio"
        title="Inicio"
        className="inline-flex items-center gap-2 text-base font-medium px-3 py-2 rounded-md transition-colors duration-150"
        style={{
          background: primary ?? undefined,
          color: primary ? (container ?? text) : text,
          border: border ? `1px solid ${border}` : undefined
        }}
      >
        <HomeOutlined />
        Inicio
      </button>

      <Space>
        <Tooltip title={`Cambiar a modo ${mode === 'light' ? 'oscuro' : 'claro'}`}>
          <button
            onClick={toggleMode}
            aria-pressed={mode === 'dark'}
            aria-label="Alternar tema"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2"
            title={`Cambiar a modo ${mode === 'light' ? 'oscuro' : 'claro'}`}
            style={{
              background: mode === 'dark' && primary ? primary : undefined,
              color: mode === 'dark' ? (container ?? text) : (primary ?? text),
              border: mode !== 'dark' && primary ? `1px solid ${primary}` : undefined
            }}
          >
            {mode === 'light' ? <MoonOutlined /> : <SunOutlined />}
          </button>
        </Tooltip>
      </Space>
    </nav>
  )
}

export default Navigation
