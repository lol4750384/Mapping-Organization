import React from 'react'
import { Modal, Button, InputNumber, Typography } from 'antd'
import { DollarOutlined } from '@ant-design/icons'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'

const { Title, Paragraph } = Typography

interface ContributionModalProps {
  open: boolean
  amount: number
  onAmountChange: (value: number) => void
  onCancel: () => void
  onConfirm: () => void
}

const ContributionModal: React.FC<ContributionModalProps> = ({
  open,
  amount,
  onAmountChange,
  onCancel,
  onConfirm
}) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const primary = tokens.colorPrimary

  const suggestedAmounts = [350, 700, 3500, 7000]

  return (
    <Modal
      title="Realizar Inversión"
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={onConfirm}>
          Confirmar Inversión
        </Button>,
      ]}
    >
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <DollarOutlined style={{ fontSize: 48, color: primary, marginBottom: 16 }} />
        <Title level={4} style={{ marginBottom: 24 }}>
          Selecciona el monto de tu inversión
        </Title>
        
        <div style={{ marginBottom: 24 }}>
          <InputNumber
            style={{ width: '100%', fontSize: 18, padding: '12px' }}
            size="large"
            min={1}
            max={100000}
            value={amount}
            onChange={(value) => onAmountChange(value || 350)}
            formatter={value => `Bs ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value?.replace(/Bs\s?|(,*)/g, '') as any}
          />
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {suggestedAmounts.map((suggestedAmount) => (
            <Button
              key={suggestedAmount}
              type={amount === suggestedAmount ? 'primary' : 'default'}
              onClick={() => onAmountChange(suggestedAmount)}
            >
              Bs {suggestedAmount.toLocaleString()}
            </Button>
          ))}
        </div>

        <Paragraph type="secondary">
          Tu inversión será procesada de manera segura.
        </Paragraph>
      </div>
    </Modal>
  )
}

export default ContributionModal
