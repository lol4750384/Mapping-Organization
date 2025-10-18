import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageTemplate from '../components/PageTemplate'
import { Row, Col, Card, Button, Typography, Progress, Divider, Statistic, Space } from 'antd'
import { RocketOutlined, TeamOutlined, HeartOutlined } from '@ant-design/icons'
import { useTheme } from '../ThemeProvider'
import { lightTheme, darkTheme } from '../theme.ts'

const { Title, Paragraph, Text } = Typography

const Home: React.FC = () => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}

  const primary = tokens.colorPrimary
  const accent = tokens.colorInfo
  const container = tokens.colorBgContainer
  const border = tokens.colorBorder
  const text = tokens.colorText
  const textSecondary = tokens.colorTextSecondary
  const shadow = tokens.shadowColor

  const current = 15000
  const target = 50000
  const percent = Math.max(0, Math.min(100, Math.round((current / target) * 100)))

  const heroStyle: React.CSSProperties = {
    background: container,
    border: border ? `1px solid ${border}` : undefined,
    borderRadius: 12,
    padding: 32,
    display: 'flex',
    gap: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: shadow ? `0 10px 30px ${shadow}` : undefined,
  }

  const cardStyle = {
    background: container,
    border: border ? `1px solid ${border}` : undefined,
    borderRadius: 12,
    padding: 20,
  } as React.CSSProperties

  const featureItems = [
    {
      icon: <RocketOutlined style={{ fontSize: 22, color: primary }} />,
      title: 'Rendimiento óptimo',
      description: 'Velocidad y eficiencia en cada interacción, optimizado para producción.',
    },
    {
      icon: <TeamOutlined style={{ fontSize: 22, color: primary }} />,
      title: 'Comunidad activa',
      description: 'Colabora, aporta y crece con aportes de una comunidad comprometida.',
    },
    {
      icon: <HeartOutlined style={{ fontSize: 22, color: primary }} />,
      title: 'Diseño pensado en el usuario',
      description: 'Interfaz cuidada para ofrecer la mejor experiencia posible.',
    },
  ]

  const navigate = useNavigate()

  return (
    <PageTemplate title="Apoya este proyecto" subtitle="Tu contribución nos ayudará a desarrollar este proyecto innovador.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <section style={heroStyle}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Title level={1} style={{ color: primary, marginBottom: 8 }}>Apoya este proyecto</Title>
            <Paragraph style={{ color: text, marginBottom: 20 }}>
              Con tu ayuda podemos impulsar un proyecto que conecta patrocinadores con iniciativas innovadoras.
              Colabora para acelerar el desarrollo y el impacto.
            </Paragraph>
            <Space size="middle">
              <Button
                onClick={() => navigate('/funding')}
                style={{
                  background: primary,
                  color: container,
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: 8,
                  fontWeight: 700,
                }}
                aria-label="Contribuir"
              >
                Contribuir
              </Button>
              <Button
                onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
                style={{
                  border: border ? `1px solid ${border}` : undefined,
                  color: text,
                  background: 'transparent',
                  padding: '10px 20px',
                  borderRadius: 8,
                  fontWeight: 600,
                }}
                aria-label="Saber más"
              >
                Saber más
              </Button>
            </Space>
          </div>

          <div style={{ width: 360 }}>
            <Card style={cardStyle}>
              <div style={{ textAlign: 'center' }}>
                <Text style={{ color: textSecondary }}>Fondos recaudados</Text>
                <div style={{ marginTop: 12, marginBottom: 6 }}>
                  <Title level={3} style={{ color: primary, margin: 0 }}>${current.toLocaleString()}</Title>
                </div>
                <Progress
                  percent={percent}
                  strokeColor={primary && accent ? { '0%': primary, '100%': accent } : undefined}
                  strokeWidth={14}
                  showInfo={false}
                />
                <div style={{ marginTop: 10 }}>
                  <Text type="secondary">{(target - current).toLocaleString()} $ restantes</Text>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <Row gutter={[24, 24]}>
            {featureItems.map((f, i) => (
              <Col xs={24} sm={12} md={8} key={f.title}>
                <Card style={{
                  background: container,
                  border: border ? `1px solid ${border}` : undefined,
                  borderRadius: 12,
                  padding: 20,
                  minHeight: 160,
                  /* no animation at page-change level for cards */
                }}>
                   <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: primary,
                      color: container,
                    }}>
                      {f.icon}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <Title level={4} style={{ margin: 0, color: text }}>{f.title}</Title>
                      <Paragraph style={{ marginTop: 8, color: textSecondary }}>{f.description}</Paragraph>
                    </div>
                   </div>
                 </Card>
               </Col>
             ))}
          </Row>
        </section>

        <Divider />

        <section>
          <Row gutter={[24, 24]}>
            <Col xs={12} sm={6}>
              <Card style={cardStyle}>
                <Statistic title="Satisfacción" value="99%" valueStyle={{ color: primary, fontWeight: 700 }} />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card style={cardStyle}>
                <Statistic title="Usuarios activos" value="10k+" valueStyle={{ color: primary, fontWeight: 700 }} />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card style={cardStyle}>
                <Statistic title="Disponibilidad" value="24/7" valueStyle={{ color: primary, fontWeight: 700 }} />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card style={cardStyle}>
                <Statistic title="Confiable" value="100%" valueStyle={{ color: primary, fontWeight: 700 }} />
              </Card>
            </Col>
          </Row>
        </section>

        <section style={{ display: 'flex', justifyContent: 'center', padding: 28 }}>
          <div style={{
            width: '100%',
            maxWidth: 980,
            padding: 28,
            borderRadius: 12,
            background: primary,
            color: container,
            textAlign: 'center',
            boxShadow: shadow ? `0 20px 60px ${shadow}` : undefined,
          }}>
            <Title level={3} style={{ color: container, marginBottom: 12 }}>¿Listo para comenzar?</Title>
            <Paragraph style={{ color: container, marginBottom: 18 }}>
              Únete a miles de personas que ya apoyan el proyecto y transforma la forma en que las empresas y
              patrocinadores se conectan.
            </Paragraph>
            <Space size="middle">
              <Button
                onClick={() => window.location.href = '/signup'}
                style={{
                  background: container,
                  color: primary,
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: 8,
                  fontWeight: 700,
                }}
                aria-label="Crear cuenta"
              >
                Crear cuenta gratis
              </Button>
              <Button
                onClick={() => window.location.href = '/learn-more'}
                style={{
                  background: 'transparent',
                  color: container,
                  border: `1px solid ${container}`,
                  padding: '10px 24px',
                  borderRadius: 8,
                  fontWeight: 600,
                }}
                aria-label="Más información"
              >
                Saber más
              </Button>
            </Space>
          </div>
        </section>
      </div>
    </PageTemplate>
  )
}

export default Home