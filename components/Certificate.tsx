import React from 'react'

interface CertificateProps {
  name: string
  course: string
  date: string
  instructor: string
}

const Certificate: React.FC<CertificateProps> = ({ name, course, date, instructor }) => {
  return (
    <svg
      id="certificate-svg"
      width="800"
      height="600"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Background */}
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f6d365" />
          <stop offset="100%" stopColor="#fda085" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg-gradient)" />
      
      {/* Border */}
      <rect x="20" y="20" width="760" height="560" fill="none" stroke="#ffffff" strokeWidth="4" rx="20" ry="20" />
      
      {/* Decorative corners */}
      <path d="M40,40 L80,40 L80,80 M720,40 L720,80 L760,80 M40,560 L80,560 L80,520 M760,560 L720,560 L720,520" stroke="#ffffff" strokeWidth="4" fill="none" />
      
      {/* Title */}
      <text x="400" y="80" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" textAnchor="middle" fill="#ffffff">Certificate of Completion</text>
      
      {/* Decorative line */}
      <line x1="200" y1="100" x2="600" y2="100" stroke="#ffffff" strokeWidth="3" />
      
      {/* Main text */}
      <text x="400" y="160" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle" fill="#ffffff">This is to certify that</text>
      <text x="400" y="220" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" textAnchor="middle" fill="#ffffff">{name || '[Name]'}</text>
      <text x="400" y="280" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle" fill="#ffffff">has successfully completed the course</text>
      <text x="400" y="340" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" textAnchor="middle" fill="#ffffff">{course || '[Course Name]'}</text>
      <text x="400" y="400" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle" fill="#ffffff">on {date || '[Date]'}</text>
      
      {/* Signature */}
      <line x1="250" y1="500" x2="550" y2="500" stroke="#ffffff" strokeWidth="2" />
      <text x="400" y="530" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle" fill="#ffffff">{instructor || '[Instructor Name]'}</text>
      <text x="400" y="560" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="#ffffff">Instructor</text>
      
      {/* Decorative elements */}
      <circle cx="100" cy="100" r="50" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      <circle cx="700" cy="100" r="50" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      <circle cx="100" cy="500" r="50" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      <circle cx="700" cy="500" r="50" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      
      {/* Additional decorative elements */}
      <path d="M0,0 L60,60 M0,60 L60,0" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      <path d="M740,0 L800,60 M740,60 L800,0" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      <path d="M0,540 L60,600 M0,600 L60,540" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      <path d="M740,540 L800,600 M740,600 L800,540" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
    </svg>
  )
}

export default Certificate

