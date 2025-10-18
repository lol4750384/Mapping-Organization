import React from 'react'
import { Card, Carousel, Typography } from 'antd'
import { LinkOutlined, DollarOutlined, BarChartOutlined, TeamOutlined, FileTextOutlined } from '@ant-design/icons'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'
import type { ProjectUse } from '../../hooks/useHomeData'

const { Title, Paragraph } = Typography

interface ProjectUsesCarouselProps {
  uses: ProjectUse[]
}

const ProjectUsesCarousel: React.FC<ProjectUsesCarouselProps> = ({ uses }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const text = tokens.colorText
  const textSecondary = tokens.colorTextSecondary
  const shadow = tokens.shadowColor

  const getIcon = (iconType: string) => {
    const iconStyle = { fontSize: 40, color: primary }
    switch (iconType) {
      case 'link': return <LinkOutlined style={iconStyle} />
      case 'dollar': return <DollarOutlined style={iconStyle} />
      case 'chart': return <BarChartOutlined style={iconStyle} />
      case 'team': return <TeamOutlined style={iconStyle} />
      case 'file': return <FileTextOutlined style={iconStyle} />
      default: return <LinkOutlined style={iconStyle} />
    }
  }

  return (
    <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
      <Title level={3} style={{ color: text, marginBottom: 32, textAlign: 'center' }}>
        Usos del Proyecto
      </Title>
      <Carousel 
        autoplay 
        dotPosition="bottom"
        effect="fade"
        style={{ 
          background: 'transparent',
          padding: '0 20px'
        }}
      >
        {uses.map((use) => (
          <div key={use.id}>
            <div style={{ padding: '20px' }}>
              <Card
                style={{
                  background: surface,
                  border: border ? `1px solid ${border}` : undefined,
                  borderRadius: 16,
                  minHeight: 320,
                  boxShadow: shadow ? `0 4px 16px ${shadow}` : undefined,
                }}
                bodyStyle={{ 
                  padding: 48, 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                  background: `linear-gradient(135deg, ${primary}20, ${primary}10)`,
                  borderRadius: 16,
                  padding: 24,
                  width: 96,
                  height: 96,
                }}>
                  {getIcon(use.icon)}
                </div>
                <Title level={2} style={{ color: text, marginBottom: 16 }}>
                  {use.title}
                </Title>
                <Paragraph style={{ 
                  color: textSecondary, 
                  fontSize: 16, 
                  lineHeight: 1.8,
                  maxWidth: 600,
                  margin: '0 auto'
                }}>
                  {use.description}
                </Paragraph>
              </Card>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ProjectUsesCarousel
