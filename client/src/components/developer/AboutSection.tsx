import React from 'react'
import { Card, Typography } from 'antd'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'

const { Title, Paragraph } = Typography

interface AboutSectionProps {
  description: string
  goal: string
}

const AboutSection: React.FC<AboutSectionProps> = ({ description, goal }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const text = tokens.colorText
  const textSecondary = tokens.colorTextSecondary

  return (
    <Card
      style={{
        background: surface,
        border: border ? `1px solid ${border}` : undefined,
        borderRadius: 16,
        height: '100%',
      }}
      bodyStyle={{ padding: 24 }}
    >
      <Title level={4} style={{ color: text, marginBottom: 16 }}>Sobre mí</Title>
      <Paragraph style={{ color: textSecondary, fontSize: 15, lineHeight: 1.6 }}>
        {description}
      </Paragraph>
      <Paragraph style={{ color: textSecondary, fontSize: 15, lineHeight: 1.6 }}>
        {goal}
      </Paragraph>
    </Card>
  )
}

export default AboutSection
