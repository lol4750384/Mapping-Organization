import React from 'react'
import { Row, Col, Card, Typography } from 'antd'
import { RocketOutlined, TeamOutlined, HeartOutlined } from '@ant-design/icons'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'
import type { FeatureItem } from '../../hooks/useHomeData'

const { Title, Paragraph } = Typography

interface FeaturesSectionProps {
  features: FeatureItem[]
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const primary = tokens.colorPrimary
  const container = tokens.colorBgContainer
  const border = tokens.colorBorder
  const text = tokens.colorText
  const textSecondary = tokens.colorTextSecondary

  const getIcon = (iconName: string) => {
    const iconProps = { style: { fontSize: 22, color: container } }
    switch (iconName) {
      case 'rocket': return <RocketOutlined {...iconProps} />
      case 'team': return <TeamOutlined {...iconProps} />
      case 'heart': return <HeartOutlined {...iconProps} />
      default: return <RocketOutlined {...iconProps} />
    }
  }

  return (
    <section>
      <Row gutter={[24, 24]}>
        {features.map((feature) => (
          <Col xs={24} sm={12} md={8} key={feature.title}>
            <Card
              style={{
                background: container,
                border: border ? `1px solid ${border}` : undefined,
                borderRadius: 12,
                padding: 20,
                minHeight: 160,
              }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: primary,
                    color: container,
                  }}
                >
                  {getIcon(feature.iconName)}
                </div>
                <div style={{ minWidth: 0 }}>
                  <Title level={4} style={{ margin: 0, color: text }}>
                    {feature.title}
                  </Title>
                  <Paragraph style={{ marginTop: 8, color: textSecondary }}>
                    {feature.description}
                  </Paragraph>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default FeaturesSection
