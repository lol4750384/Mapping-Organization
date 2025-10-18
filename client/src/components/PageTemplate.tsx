import React, { type ReactNode } from 'react'
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

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  headerAction,
  children,
  fullWidth = false
}) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}

  const pageBg = tokens.colorBgLayout ?? tokens.colorBgBase
  const pageText = tokens.colorText
  const surface = tokens.colorBgContainer ?? pageBg
  const border = tokens.colorBorder
  const subtitleColor = tokens.colorTextSecondary ?? pageText

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ background: pageBg, color: pageText }}
    >
      <Navigation />

      {title && (
        <header
          className="w-full"
          style={{ background: surface, borderBottom: border ? `1px solid ${border}` : undefined }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <h1 style={{ color: pageText }} className="text-2xl md:text-3xl font-semibold">
                {title}
              </h1>
              {subtitle && (
                <p style={{ color: subtitleColor }} className="mt-1 text-sm">
                  {subtitle}
                </p>
              )}
            </div>
            {headerAction && <div>{headerAction}</div>}
          </div>
        </header>
      )}

      <main className="flex-1 w-full overflow-auto">
        {fullWidth ? (
          <div className="w-full">{children}</div>
        ) : (
          <div className="max-w-7xl mx-auto px-6 py-8 w-full">{children}</div>
        )}
      </main>
    </div>
  )
}

export default PageTemplate
