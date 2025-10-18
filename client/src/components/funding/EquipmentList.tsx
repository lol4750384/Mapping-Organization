import React from 'react'
import { Card, Row, Col, Tag, Typography } from 'antd'
import { CheckCircleOutlined, CloudServerOutlined, LaptopOutlined, ToolOutlined, RocketOutlined } from '@ant-design/icons'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'
import type { EquipmentItem } from '../../hooks/useFundingData'

const { Title, Paragraph } = Typography

interface EquipmentListProps {
  equipment: EquipmentItem[]
}

const EquipmentList: React.FC<EquipmentListProps> = ({ equipment }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const text = tokens.colorText
  const textSecondary = tokens.colorTextSecondary

  const equipmentWithIcons = equipment.map(item => ({
    ...item,
    icon: item.name === 'Servidores Cloud' ? <CloudServerOutlined /> :
          item.name === 'Equipo Desarrollo' ? <LaptopOutlined /> :
          item.name === 'Herramientas Testing' ? <ToolOutlined /> :
          <RocketOutlined />
  }))

  const getStatusTag = (status: string) => {
    const statusConfig = {
      pending: { color: 'orange', text: 'Pendiente' },
      partial: { color: 'blue', text: 'Parcial' },
      funded: { color: 'green', text: 'Completado' }
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Tag color={config.color}>{config.text}</Tag>
  }

  return (
    <Card
      style={{
        background: surface,
        border: border ? `1px solid ${border}` : undefined,
        borderRadius: 16,
      }}
      bodyStyle={{ padding: 24 }}
    >
      <Title level={3} style={{ color: text, marginBottom: 24 }}>
        Equipo y Recursos Necesarios
      </Title>

      <Row gutter={[16, 16]}>
        {equipmentWithIcons.map((item, index) => (
          <Col xs={24} md={12} key={index}>
            <Card
              style={{
                background: surface,
                border: border ? `1px solid ${border}` : undefined,
                borderRadius: 12,
                height: '100%',
              }}
              bodyStyle={{ padding: 20 }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                  background: `linear-gradient(135deg, ${primary}20, ${primary}10)`,
                  color: primary,
                  borderRadius: 8,
                  padding: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <Title level={5} style={{ color: text, margin: 0 }}>
                      {item.name}
                    </Title>
                    {getStatusTag(item.status)}
                  </div>
                  <Paragraph style={{ color: textSecondary, fontSize: 14, marginBottom: 12 }}>
                    {item.description}
                  </Paragraph>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: primary, fontWeight: 600, fontSize: 16 }}>
                      Bs {item.cost.toLocaleString()}
                    </span>
                    {item.status === 'funded' && (
                      <Tag icon={<CheckCircleOutlined />} color="green">
                        Completado
                      </Tag>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default EquipmentList
