import React from 'react'
import { Card, Row, Col, Image, Typography, Empty } from 'antd'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'

const { Title } = Typography

interface ImageGalleryProps {
  images: string[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
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
      }}
      bodyStyle={{ padding: 24 }}
    >
      <Title level={4} style={{ color: text, marginBottom: 16 }}>Galería de Imágenes</Title>
      {images.length === 0 ? (
        <Empty description="No hay imágenes subidas aún" />
      ) : (
        <Row gutter={[16, 16]}>
          {images.map((img, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                style={{ borderRadius: 8, objectFit: 'cover' }}
                width="100%"
                height={200}
              />
            </Col>
          ))}
        </Row>
      )}
    </Card>
  )
}

export default ImageGallery
