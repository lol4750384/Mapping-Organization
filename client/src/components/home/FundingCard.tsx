import React from 'react'
import { Card, Progress, Typography, Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'

const { Title, Text, Paragraph } = Typography

interface FundingCardProps {
  current: number
  target: number
}

const FundingCard: React.FC<FundingCardProps> = ({ current, target }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const accent = tokens.colorInfo
  const textSecondary = tokens.colorTextSecondary
  const shadow = tokens.shadowColor

  const navigate = useNavigate()
  const percent = Math.max(0, Math.min(100, Math.round((current / target) * 100)))

  return (
    <Card
      style={{
        background: surface,
        border: border ? `1px solid ${border}` : undefined,
        borderRadius: 16,
        boxShadow: shadow ? `0 4px 16px ${shadow}` : undefined,
      }}
      bodyStyle={{ padding: 24 }}
    >
      <div style={{ textAlign: 'center' }}>
        <Text style={{ color: textSecondary, fontSize: 16 }}>Fondos recaudados</Text>
        <div style={{ marginTop: 12, marginBottom: 16 }}>
          <Title level={3} style={{ color: primary, margin: 0 }}>
            Bs {current.toLocaleString()}
          </Title>
        </div>
        <Progress
          percent={percent}
          strokeColor={primary && accent ? { '0%': primary, '100%': accent } : undefined}
          strokeWidth={14}
          showInfo={false}
          style={{ marginBottom: 16 }}
        />
        <div style={{ marginBottom: 24 }}>
          <Text type="secondary">{(target - current).toLocaleString()} Bs restantes</Text>
        </div>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button
            type="primary"
            size="large"
            block
            onClick={() => navigate('/funding')}
            style={{
              background: primary,
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              height: 48,
            }}
          >
            Contribuir Ahora
          </Button>
          <Paragraph style={{ color: textSecondary, fontSize: 14, margin: 0 }}>
            Apoya el desarrollo de este proyecto innovador
          </Paragraph>
        </Space>
      </div>
    </Card>
  )
}

export default FundingCard
