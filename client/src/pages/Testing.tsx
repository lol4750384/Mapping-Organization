import React, { useState } from 'react'
import PageTemplate from '../components/PageTemplate'
import ImageUploadModal from '../components/testing/ImageUploadModal'
import ImageGallery from '../components/testing/ImageGallery'
import { Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useTheme } from '../ThemeProvider'
import { lightTheme, darkTheme } from '../theme'
import { useTestingData } from '../hooks/useTestingData'

const Testing: React.FC = () => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const primary = tokens.colorPrimary
  const container = tokens.colorBgContainer

  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const { uploadedImages, addUploadedImage } = useTestingData()

  return (
    <PageTemplate title="Testing" subtitle="Galería de imágenes de Organización Maping">
      <div style={{ padding: '0 16px' }}>
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            icon={<UploadOutlined />}
            onClick={() => setUploadModalOpen(true)}
            style={{
              background: primary,
              color: container,
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              padding: '10px 24px',
              height: 'auto',
            }}
          >
            Subir Imagen
          </Button>
        </div>

        <ImageGallery images={uploadedImages} />

        <ImageUploadModal
          open={uploadModalOpen}
          onCancel={() => setUploadModalOpen(false)}
          onImageUpload={addUploadedImage}
        />
      </div>
    </PageTemplate>
  )
}

export default Testing
