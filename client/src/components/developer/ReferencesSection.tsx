import React from 'react'
import { Card, Row, Col, Button, Typography } from 'antd'
import { StarFilled, LinkedinOutlined } from '@ant-design/icons'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'
import type { Reference } from '../../hooks/useDeveloperData'

const { Title, Paragraph, Text } = Typography

interface ReferencesSectionProps {
  references: Reference[]
}

const ReferencesSection: React.FC<ReferencesSectionProps> = ({ references }) => {
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
      }}
      bodyStyle={{ padding: 24 }}
    >
      <Title level={4} style={{ color: text, marginBottom: 20 }}>Referencias</Title>
      <Row gutter={[16, 16]}>
        {references.map(ref => (
          <Col xs={24} md={12} key={ref.name}>
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
                <StarFilled style={{ color: primary, fontSize: 16 }} />
                <div>
                  <Text strong style={{ color: text, display: 'block' }}>{ref.name}</Text>
                  <Text type="secondary" style={{ fontSize: 14 }}>{ref.position}</Text>
                </div>
              </div>
              <Paragraph style={{ color: textSecondary, fontSize: 14, fontStyle: 'italic', marginBottom: 16 }}>
                "{ref.comment}"
              </Paragraph>
              <Button
                type="link"
                style={{ color: primary, padding: 0, fontSize: 14 }}
                icon={<LinkedinOutlined />}
                onClick={() => window.open(ref.link)}
              >
                Ver perfil
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default ReferencesSection
