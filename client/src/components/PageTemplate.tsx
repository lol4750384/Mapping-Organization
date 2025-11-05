import React, { type ReactNode } from 'react'
import { Breadcrumb } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import Navigation from './Navigation'
import { useTheme } from '../ThemeProvider'
import { lightTheme, darkTheme } from '../theme.ts'

type PageTemplateProps = {
  title?: string
  subtitle?: string
  headerAction?: ReactNode
  children: ReactNode
  fullWidth?: boolean
}

const routeNameMap: Record<string, string> = {
  about: 'Acerca',
  funding: 'Financiación',
  testing: 'Testing',
  profile: 'Perfil',
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  headerAction,
  children,
  fullWidth = false
}) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}

  const pageBg = tokens.colorBgLayout
  const pageText = tokens.colorText
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const shadow = tokens.shadowColor
  const linkColor = tokens.colorLink

  const location = useLocation()
  const pathname = location.pathname
  const segments = pathname === '/' ? [] : pathname.split('/').filter(Boolean)
  const crumbs = [{ path: '/', label: 'Inicio' }, ...segments.map((seg, i) => {
    const path = '/' + segments.slice(0, i + 1).join('/')
    const label = routeNameMap[seg] ?? capitalize(seg.replace(/-/g, ' '))
    return { path, label }
  })]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: pageBg, color: pageText }}>
      <Navigation />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 24, minHeight: 0 }}>
        <div style={{ marginBottom: 14 }}>
           <Breadcrumb separator={<span style={{ margin: '0 10px', color: linkColor ?? pageText, fontSize: 16 }}>›</span>} style={{ fontSize: 16, padding: '8px 0' }}>
             {crumbs.map((c, idx) => (
               <Breadcrumb.Item key={c.path}>
                 {idx === 0 ? (
                  idx < crumbs.length - 1 ? <Link to={c.path} style={{ color: linkColor ?? pageText, padding: '8px 12px', borderRadius: 8, display: 'inline-block' }}><HomeOutlined style={{ marginRight: 8 }} />{c.label}</Link> : <span style={{ color: pageText, padding: '8px 12px', borderRadius: 8, display: 'inline-block' }}><HomeOutlined style={{ marginRight: 8 }} />{c.label}</span>
                ) : (
                  idx < crumbs.length - 1 ? <Link to={c.path} style={{ color: linkColor ?? pageText, padding: '8px 12px', borderRadius: 8, display: 'inline-block' }}>{c.label}</Link> : <span style={{ color: pageText, padding: '8px 12px', borderRadius: 8, display: 'inline-block' }}>{c.label}</span>
                )}
               </Breadcrumb.Item>
             ))}
           </Breadcrumb>
         </div>
 
        {title && (
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
             <div>
               <h1 style={{ margin: 0, color: pageText, fontSize: 22, fontWeight: 700 }}>{title}</h1>
               {subtitle && <p style={{ margin: '6px 0 0 0', color: tokens.colorTextSecondary }}>{subtitle}</p>}
             </div>
             {headerAction && <div>{headerAction}</div>}
           </div>
         )}
 
         <main style={{ flex: 1, overflow: 'auto' }}>
           {fullWidth ? (
             <div>{children}</div>
           ) : (
             <div
               style={{
                background: surface,
                 border: border ? `1px solid ${border}` : undefined,
                 boxShadow: shadow ? `0 20px 50px ${shadow}` : undefined,
                 borderRadius: 12,
                 padding: 24,
                 height: '100%',
                 overflow: 'auto',
               }}
             >
               {children}
             </div>
           )}
         </main>
       </div>
     </div>
   )
 }
 
 export default PageTemplate
