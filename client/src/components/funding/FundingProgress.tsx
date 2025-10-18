import React from 'react'
import { Row, Col, Progress, Statistic, Typography } from 'antd'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'
import type { FundingData } from '../../hooks/useFundingData'

const { Title, Paragraph, Text } = Typography

interface FundingProgressProps {
  fundingData: FundingData
}

const FundingProgress: React.FC<FundingProgressProps> = ({ fundingData }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const text = tokens.colorText
  const textSecondary = tokens.colorTextSecondary

  return (
    <>
      <Title level={3} style={{ color: text, marginBottom: 8 }}>
        Progreso de Financiación
      </Title>
      <Paragraph style={{ color: textSecondary, marginBottom: 24 }}>
        Tu apoyo hace posible esta visión.
      </Paragraph>
      
      <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Progress
          type="circle"
          percent={fundingData.progress}
          strokeColor={primary}
          trailColor={border}
          size={140}
          format={percent => (
            <span style={{ color: primary, fontWeight: 700, fontSize: 22 }}>
              {percent}%
            </span>
          )}
          style={{ marginBottom: 18 }}
        />
        <div style={{ marginTop: 10, textAlign: 'center' }}>
          <Title level={4} style={{ color: text, margin: 0 }}>
            Bs {fundingData.raised.toLocaleString()} recaudados
          </Title>
          <Text type="secondary" style={{ fontSize: 16 }}>
            Meta: Bs {fundingData.goal.toLocaleString()}
          </Text>
        </div>
      </div>

      <Row gutter={16}>
        <Col xs={12}>
          <Statistic
            title="Recaudado"
            value={fundingData.raised}
            prefix="Bs"
            valueStyle={{ color: primary }}
          />
        </Col>
        <Col xs={12}>
          <Statistic
            title="Completado"
            value={fundingData.progress}
            suffix="%"
            valueStyle={{ color: primary }}
          />
        </Col>
      </Row>
    </>
  )
}

export default FundingProgress
