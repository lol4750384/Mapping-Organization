import React from 'react'
import { Card, Table, Tag, Typography } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'
import type { TestResult } from '../../hooks/useTestingData'

const { Title } = Typography

interface TestResultsProps {
  title: string
  results: TestResult[]
}

const TestResults: React.FC<TestResultsProps> = ({ title, results }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const text = tokens.colorText

  const getStatusTag = (status: string) => {
    const statusConfig = {
      success: { icon: <CheckCircleOutlined />, color: 'success', text: 'Exitoso' },
      failed: { icon: <CloseCircleOutlined />, color: 'error', text: 'Fallido' },
      pending: { icon: <ClockCircleOutlined />, color: 'warning', text: 'Pendiente' }
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Tag icon={config.icon} color={config.color}>{config.text}</Tag>
  }

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => getStatusTag(status),
    },
    {
      title: 'Duración',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Fecha',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
  ]

  return (
    <Card
      style={{
        background: surface,
        border: border ? `1px solid ${border}` : undefined,
        borderRadius: 16,
      }}
      bodyStyle={{ padding: 24 }}
    >
      <Title level={4} style={{ color: text, marginBottom: 16 }}>{title}</Title>
      <Table
        columns={columns}
        dataSource={results}
        rowKey="id"
        pagination={false}
        size="small"
      />
    </Card>
  )
}

export default TestResults
