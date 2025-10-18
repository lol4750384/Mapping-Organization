import React from 'react'
import { Card, Button, Typography } from 'antd'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'

const { Title, Paragraph } = Typography

interface TestCardProps {
  title: string
  description: string
  buttonText: string
  onRunTest: () => void
}

const TestCard: React.FC<TestCardProps> = ({ title, description, buttonText, onRunTest }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const container = tokens.colorBgContainer
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
      <Title level={4} style={{ color: text }}>{title}</Title>
      <Paragraph style={{ color: textSecondary }}>
        {description}
      </Paragraph>
      <div style={{ marginTop: 16 }}>
        <Button
          onClick={onRunTest}
          className="btn-animate"
          style={{
            background: primary,
            color: container,
            border: 'none',
            borderRadius: 8,
            fontWeight: 600,
          }}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  )
}

export default TestCard
