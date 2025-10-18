import React from 'react'
import { Card, Tag, Typography } from 'antd'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'
import type { Skill } from '../../hooks/useDeveloperData'

const { Title } = Typography

interface SkillsSectionProps {
  skills: Skill[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const text = tokens.colorText

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
      <Title level={4} style={{ color: text, marginBottom: 16 }}>Habilidades</Title>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {skills.map(skill => (
          <Tag
            key={skill.name}
            color={skill.color}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              fontSize: 14,
              border: 'none',
            }}
          >
            {skill.name}
          </Tag>
        ))}
      </div>
    </Card>
  )
}

export default SkillsSection
