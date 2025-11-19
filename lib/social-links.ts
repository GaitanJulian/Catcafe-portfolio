import type { LucideIcon } from 'lucide-react'
import { Mail, Github, Linkedin } from 'lucide-react'

export interface SocialLink {
  icon: LucideIcon
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { icon: Mail, label: 'Email', href: 'mailto:juliangaitan_h@hotmail.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/GaitanJulian' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gaitanjuliandev' }
]
