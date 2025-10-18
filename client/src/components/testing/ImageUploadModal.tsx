import React, { useState } from 'react'
import { Modal, Upload, Button, message, Typography } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { useTheme } from '../../ThemeProvider'
import { lightTheme, darkTheme } from '../../theme'

const { Title, Paragraph } = Typography
const { Dragger } = Upload

interface ImageUploadModalProps {
  open: boolean
  onCancel: () => void
  onImageUpload: (imageUrl: string) => void
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ open, onCancel, onImageUpload }) => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const primary = tokens.colorPrimary
  const [fileList, setFileList] = useState<any[]>([])

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    accept: 'image/*',
    fileList,
    beforeUpload: (file) => {
      const isImage = file.type.startsWith('image/')
      if (!isImage) {
        message.error('Solo puedes subir archivos de imagen')
        return false
      }
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isLt5M) {
        message.error('La imagen debe ser menor a 5MB')
        return false
      }
      
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string
        onImageUpload(imageUrl)
        message.success('Imagen cargada exitosamente')
      }
      reader.readAsDataURL(file)
      
      setFileList([file])
      return false
    },
    onRemove: () => {
      setFileList([])
    },
  }

  const handleOk = () => {
    setFileList([])
    onCancel()
  }

  return (
    <Modal
      title="Subir Imagen"
      open={open}
      onCancel={onCancel}
      onOk={handleOk}
      width={600}
    >
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <Title level={4} style={{ marginBottom: 16 }}>
          Selecciona una imagen
        </Title>
        <Paragraph type="secondary" style={{ marginBottom: 24 }}>
          Sube capturas de pantalla o imágenes del proyecto
        </Paragraph>
        
        <Dragger {...uploadProps} style={{ padding: 20 }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ color: primary, fontSize: 48 }} />
          </p>
          <p className="ant-upload-text">Haz clic o arrastra la imagen aquí</p>
          <p className="ant-upload-hint">
            Formatos soportados: JPG, PNG, GIF (máx. 5MB)
          </p>
        </Dragger>
      </div>
    </Modal>
  )
}

export default ImageUploadModal
