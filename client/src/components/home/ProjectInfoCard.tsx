import React from 'react'
import { Card, Typography } from 'antd'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'

const { Title, Paragraph } = Typography

interface ProjectInfoCardProps {
  title: string
  description: string
}

const ProjectInfoCard: React.FC<ProjectInfoCardProps> = ({ title, description }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const textSecondary = tokens.colorTextSecondary
  const shadow = tokens.shadowColor

  return (
    <Card
      style={{
        background: surface,
        border: border ? `1px solid ${border}` : undefined,
        borderRadius: 16,
        boxShadow: shadow ? `0 4px 16px ${shadow}` : undefined,
      }}
      bodyStyle={{ padding: 32 }}
    >
      <Title level={2} style={{ color: primary, marginBottom: 16 }}>
        {title}
      </Title>
      <Paragraph style={{ color: textSecondary, fontSize: 16, lineHeight: 1.8 }}>
        {description}
      </Paragraph>
    </Card>
  )
}

export default ProjectInfoCard
