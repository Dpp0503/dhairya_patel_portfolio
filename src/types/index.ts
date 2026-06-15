export interface Education {
  id: string
  degree: string
  institution: string
  location?: string
  period: string
  details?: string[]
}

export interface Project {
  id: string
  title: string
  description?: string
  tech?: string[]
  highlights?: string[]
  link?: string
  github?: string
}

export interface Certification {
  id: string
  name: string
  issuer?: string
  date?: string
  credentialUrl?: string
}

export interface Experience {
  id: string
  role: string
  company: string
  location?: string
  period: string
  description?: string
  achievements?: string[]
}

export interface Achievement {
  id: string
  title: string
  description?: string
  icon?: string
}
