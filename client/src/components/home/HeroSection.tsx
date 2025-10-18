import React from 'react'
import { Button, Typography, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'

const { Title, Paragraph } = Typography

interface HeroSectionProps {
  title: string
  description: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  const navigate = useNavigate()
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const primary = tokens.colorPrimary
  const container = tokens.colorBgContainer
  const border = tokens.colorBorder
  const text = tokens.colorText
  const shadow = tokens.shadowColor

  const heroStyle: React.CSSProperties = {
    background: container,
    border: border ? `1px solid ${border}` : undefined,
    borderRadius: 12,
    padding: 32,
    boxShadow: shadow ? `0 10px 30px ${shadow}` : undefined,
  }

  return (
    <section style={heroStyle}>
      <Title level={1} style={{ color: primary, marginBottom: 8 }}>{title}</Title>
      <Paragraph style={{ color: text, marginBottom: 20 }}>
        {description}
      </Paragraph>
      <Space size="middle">
        <Button
          onClick={() => navigate('/funding')}
          style={{
            background: primary,
            color: container,
            border: 'none',
            padding: '10px 20px',
            borderRadius: 8,
            fontWeight: 700,
          }}
          aria-label="Contribuir"
        >
          Contribuir
        </Button>
        <Button
          onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
          style={{
            border: border ? `1px solid ${border}` : undefined,
            color: text,
            background: 'transparent',
            padding: '10px 20px',
            borderRadius: 8,
            fontWeight: 600,
          }}
          aria-label="Saber más"
        >
          Saber más
        </Button>
      </Space>
    </section>
  )
}

export default HeroSection
