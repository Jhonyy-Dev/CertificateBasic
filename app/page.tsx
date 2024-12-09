'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Certificate from '@/components/Certificate'

export default function CertificateGenerator() {
  const [certificateData, setCertificateData] = useState({
    name: '',
    course: '',
    date: '',
    instructor: ''
  })
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCertificateData(prev => ({ ...prev, [name]: value }))
  }

  const handleDownload = () => {
    const svg = document.getElementById('certificate-svg')
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement('canvas')
      canvas.width = 800
      canvas.height = 600
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        if (ctx) {
          ctx.drawImage(img, 0, 0)
          const pngFile = canvas.toDataURL('image/png')
          const downloadLink = document.createElement('a')
          const fileName = `${certificateData.name.replace(/\s+/g, '_')}_certificate.png`;
          downloadLink.download = fileName
          downloadLink.href = pngFile
          downloadLink.click()
          setDownloadSuccess(true)
          setTimeout(() => setDownloadSuccess(false), 3000)
        }
      }
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Professional Study Certificate Generator</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={certificateData.name} onChange={handleInputChange} placeholder="Enter recipient's name" />
          </div>
          <div>
            <Label htmlFor="course">Course</Label>
            <Input id="course" name="course" value={certificateData.course} onChange={handleInputChange} placeholder="Enter course name" />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" name="date" type="date" value={certificateData.date} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="instructor">Instructor</Label>
            <Input id="instructor" name="instructor" value={certificateData.instructor} onChange={handleInputChange} placeholder="Enter instructor's name" />
          </div>
          <Button onClick={handleDownload} className="w-full">Download Certificate as PNG</Button>
          {downloadSuccess && (
            <p className="text-green-600 text-center mt-2">
              Certificate downloaded successfully as PNG!
            </p>
          )}
        </div>
        <div className="bg-gradient-to-br from-orange-200 to-rose-200 p-4 rounded-lg shadow-lg">
          <Certificate {...certificateData} />
        </div>
      </div>
    </div>
  )
}

