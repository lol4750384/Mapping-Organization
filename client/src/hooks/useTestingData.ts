import { useState } from 'react'
export interface TestResult {
  id: string;
  name: string;
  status: string;
  duration: string;
  timestamp: string;
}

export const useTestingData = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const addUploadedImage = (imageUrl: string) => {
    setUploadedImages(prev => [...prev, imageUrl])
  }

  return {
    uploadedImages,
    addUploadedImage
  }
}
