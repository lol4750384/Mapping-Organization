import React, { useState } from 'react'
import PageTemplate from '../components/PageTemplate'
import ContributionModal from '../components/funding/ContributionModal'
import FundingProgress from '../components/funding/FundingProgress'
import ContributeCard from '../components/funding/ContributeCard'
import EquipmentList from '../components/funding/EquipmentList'
import { Card, Row, Col, Divider } from 'antd'
import { useTheme } from '../ThemeProvider'
import { lightTheme, darkTheme } from '../theme'
import { useFundingData } from '../hooks/useFundingData'

const Funding: React.FC = () => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder

  const [contributionModal, setContributionModal] = useState(false)
  const { fundingData, equipmentNeeded, contributionAmount, setContributionAmount } = useFundingData()

  const handleContribution = () => {
    console.log(`Contribución de Bs ${contributionAmount} realizada`)
    setContributionModal(false)
    setContributionAmount(350)
  }

  return (
    <PageTemplate title="Financiación" subtitle="Apoya el desarrollo del proyecto UPB-Project">
      <div style={{ padding: '0 16px' }}>
        <Card
          style={{
            background: surface,
            border: border ? `1px solid ${border}` : undefined,
            borderRadius: 16,
            marginBottom: 24,
          }}
          bodyStyle={{ padding: 24 }}
        >
          <Row gutter={24} align="middle">
            <Col xs={24} md={12}>
              <FundingProgress fundingData={fundingData} />
            </Col>

            <Col xs={24} md={12}>
              <ContributeCard onContributeClick={() => setContributionModal(true)} />
            </Col>
          </Row>
        </Card>

        <EquipmentList equipment={equipmentNeeded} />

        <Divider style={{ margin: '32px 0' }} />

        <ContributionModal
          open={contributionModal}
          amount={contributionAmount}
          onAmountChange={setContributionAmount}
          onCancel={() => setContributionModal(false)}
          onConfirm={handleContribution}
        />
      </div>
    </PageTemplate>
  )
}

export default Funding