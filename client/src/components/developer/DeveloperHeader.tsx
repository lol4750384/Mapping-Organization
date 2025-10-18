import React from 'react'
import { Card, Avatar, Row, Col, Typography, Button, Space } from 'antd'
import { UserOutlined, MailOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'
import type { DeveloperContact } from '../../hooks/useDeveloperData'

const { Title, Paragraph } = Typography

interface DeveloperHeaderProps {
  name: string
  title: string
  contact: DeveloperContact
}

const DeveloperHeader: React.FC<DeveloperHeaderProps> = ({ name, title, contact }) => {
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
        textAlign: 'center',
        padding: '32px 24px',
      }}
      bodyStyle={{ padding: 0 }}
    >
      <Row gutter={32} align="middle" justify="center">
        <Col xs={24} md={6}>
          <Avatar
            size={120}
            icon={<UserOutlined />}
            style={{
              background: `linear-gradient(135deg, ${primary}30, ${primary}10)`,
              color: primary,
              border: `2px solid ${primary}20`,
              marginBottom: 16,
            }}
          />
        </Col>
        <Col xs={24} md={18}>
          <Title level={2} style={{ color: text, marginBottom: 8, fontWeight: 700 }}>
            {name}
          </Title>
          <Paragraph style={{ color: textSecondary, fontSize: 16, marginBottom: 20 }}>
            {title}
          </Paragraph>
          <Space wrap size="middle">
            <Button
              icon={<MailOutlined />}
              onClick={() => window.open(`mailto:${contact.email}`)}
              style={{ color: primary, borderColor: primary }}
              type="default"
            >
              Email
            </Button>
            <Button
              icon={<LinkedinOutlined />}
              onClick={() => window.open(contact.linkedin)}
              style={{ color: primary, borderColor: primary }}
              type="default"
            >
              LinkedIn
            </Button>
            <Button
              icon={<GithubOutlined />}
              onClick={() => window.open(contact.github)}
              style={{ color: primary, borderColor: primary }}
              type="default"
            >
              GitHub
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

export default DeveloperHeader
