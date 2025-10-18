import React from 'react'
import { Card, Row, Col, Button, Typography } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'
import type { PortfolioItem } from '../../hooks/useDeveloperData'

const { Title, Paragraph, Text } = Typography

interface PortfolioSectionProps {
  portfolio: PortfolioItem[]
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolio }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const text = tokens.colorText
  const textSecondary = tokens.colorTextSecondary

  return (
    <Card
      style={{
        background: surface,
        border: border ? `1px solid ${border}` : undefined,
        borderRadius: 16,
        marginBottom: 24,
      }}
      bodyStyle={{ padding: 24 }}
    >
      <Title level={4} style={{ color: text, marginBottom: 20 }}>Portafolio</Title>
      <Row gutter={[16, 16]}>
        {portfolio.map((item, idx) => (
          <Col xs={24} sm={12} md={8} key={item.title}>
            <Card
              style={{
                background: surface,
                border: border ? `1px solid ${border}` : undefined,
                borderRadius: 12,
                height: '100%',
              }}
              bodyStyle={{ padding: 20 }}
              hoverable
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{
                  background: `linear-gradient(135deg, ${primary}20, ${primary}10)`,
                  color: primary,
                  borderRadius: 8,
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <LinkOutlined />
                </div>
                <Text strong style={{ color: text, fontSize: 16 }}>{item.title}</Text>
              </div>
              <Paragraph style={{ color: textSecondary, fontSize: 14, marginBottom: 16 }}>
                {item.description}
              </Paragraph>
              <Button
                type="link"
                style={{ color: primary, padding: 0, fontSize: 14 }}
                icon={<LinkOutlined />}
                onClick={() => window.open(item.url)}
              >
                Ver proyecto
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default PortfolioSection
