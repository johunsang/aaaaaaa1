'use client'

/**
 * 에이전시/스튜디오 랜딩 페이지 템플릿 - 클린 버전
 */

import { useState } from 'react'
import { Palette, Layers, Zap, ArrowRight, ExternalLink } from 'lucide-react'

interface Project {
  id: string
  title: string
  category: string
  image: string
  client: string
}

interface TeamMember {
  name: string
  role: string
  image: string
}

interface LandingAgencyProps {
  brandName?: string
  tagline?: string
  heroImage?: string
  projects?: Project[]
  team?: TeamMember[]
  clients?: string[]
}

const defaultProjects: Project[] = [
  { id: '1', title: '글로벌 이커머스 리브랜딩', category: '브랜딩', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', client: '네이버쇼핑' },
  { id: '2', title: '핀테크 앱 UI/UX', category: 'UI/UX', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop', client: '토스' },
  { id: '3', title: '스타트업 브랜드 아이덴티티', category: '브랜딩', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop', client: '당근마켓' },
  { id: '4', title: '럭셔리 호텔 웹사이트', category: '웹 개발', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', client: '신라호텔' },
  { id: '5', title: '헬스케어 플랫폼', category: 'UI/UX', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop', client: '닥터나우' },
  { id: '6', title: '음악 스트리밍 앱', category: '앱 개발', image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&h=600&fit=crop', client: '멜론' }
]

const defaultTeam: TeamMember[] = [
  { name: '김창조', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { name: '이디자인', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
  { name: '박개발', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
  { name: '최전략', role: 'Strategy Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face' }
]

export function LandingAgency({
  brandName = '크리에이티브랩',
  tagline = '아이디어를 현실로',
  heroImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
  projects = defaultProjects,
  team = defaultTeam,
  clients = ['삼성', 'LG', '현대', '네이버', '카카오', '쿠팡', 'SK', '롯데']
}: LandingAgencyProps) {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const categories = ['전체', ...new Set(projects.map(p => p.category))]
  const filteredProjects = selectedCategory === '전체'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold">{brandName}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tagline}</h1>

            <p className="text-lg mb-6 opacity-80">
              브랜딩, UI/UX, 웹/앱 개발까지. 10년간 500개 이상의 프로젝트를 성공시킨 크리에이티브 에이전시.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
              >
                프로젝트 문의
              </button>
              <button
                className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
              >
                포트폴리오 보기 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm uppercase tracking-wider mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, i) => (
              <span key={i} className="text-xl font-bold opacity-50">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">우리가 하는 일</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Palette, title: '브랜딩', desc: '브랜드 전략부터 로고, 가이드라인까지', services: ['브랜드 전략', '로고 디자인', '브랜드 가이드라인'] },
              { icon: Layers, title: 'UI/UX 디자인', desc: '사용자 중심의 디지털 경험 설계', services: ['UX 리서치', 'UI 디자인', '프로토타이핑'] },
              { icon: Zap, title: '개발', desc: '최신 기술 스택으로 빠르고 안정적인 개발', services: ['웹 개발', '앱 개발', 'CMS 구축'] }
            ].map((service, i) => (
              <div key={i} className="p-5 rounded-lg" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--color-accent)' }}>
                  <service.icon className="w-5 h-5" style={{ color: 'var(--color-bg)' }} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{service.desc}</p>
                <ul className="space-y-1">
                  {service.services.map((s, j) => (
                    <li key={j} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-accent)' }}>→</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">포트폴리오</h2>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium"
                  style={{
                    background: selectedCategory === cat ? 'var(--color-accent)' : 'var(--color-bg)',
                    color: selectedCategory === cat ? 'var(--color-bg)' : 'var(--color-text)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative rounded-lg overflow-hidden mb-3">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(0,0,0,0.7)' }}>
                    <ExternalLink className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                  </div>
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>{project.category}</span>
                <h3 className="font-semibold mt-2 mb-0.5">{project.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{project.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">크리에이티브 팀</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto mb-3">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm" style={{ color: 'var(--color-accent)' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'var(--color-accent)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-bg)' }}>
            프로젝트를 시작해볼까요?
          </h2>
          <p className="mb-6 opacity-90" style={{ color: 'var(--color-bg)' }}>
            당신의 아이디어를 현실로 만들어 드립니다
          </p>
          <button className="px-6 py-3 rounded-lg font-semibold" style={{ background: 'var(--color-bg)', color: 'var(--color-accent)' }}>
            프로젝트 문의하기
          </button>
        </div>
      </section>
    </div>
  )
}
