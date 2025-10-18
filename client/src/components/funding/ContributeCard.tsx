import React from 'react'
import { Card, Button, Typography } from 'antd'
import { DollarOutlined } from '@ant-design/icons'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'

const { Title, Paragraph } = Typography

interface ContributeCardProps {
  onContributeClick: () => void
}

const ContributeCard: React.FC<ContributeCardProps> = ({ onContributeClick }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const primary = tokens.colorPrimary
  const text = tokens.colorText
  const textSecondary = tokens.colorTextSecondary

  return (
    <Card
      style={{
        background: `linear-gradient(135deg, ${primary}10, ${primary}05)`,
        border: `1px solid ${primary}20`,
        borderRadius: 12,
      }}
      bodyStyle={{ padding: 24, textAlign: 'center' }}
    >
      <DollarOutlined style={{ fontSize: 48, color: primary, marginBottom: 16 }} />
      <Title level={4} style={{ color: text, marginBottom: 8 }}>
        Invierte en el Futuro
      </Title>
      <Paragraph style={{ color: textSecondary, marginBottom: 24 }}>
        Forma parte de un proyecto innovador que conecta empresas con oportunidades de crecimiento.
        Tu inversión impulsa tecnología de alto impacto.
      </Paragraph>
      <Button
        type="primary"
        size="large"
        style={{
          background: primary,
          border: 'none',
          borderRadius: 8,
          fontWeight: 600,
          padding: '0 32px',
          height: 48,
          fontSize: 16,
        }}
        onClick={onContributeClick}
      >
        Invertir Ahora
      </Button>
    </Card>
  )
}

export default ContributeCard
