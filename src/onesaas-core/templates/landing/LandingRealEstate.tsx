'use client'

/**
 * 부동산 랜딩 페이지 템플릿 - 클린 버전
 */

import { useState } from 'react'
import { MapPin, Home, Key, TrendingUp, Phone, Mail, Check } from 'lucide-react'

interface Property {
  id: string
  title: string
  location: string
  price: string
  image: string
  beds: number
  baths: number
  sqft: string
  tag?: string
}

interface LandingRealEstateProps {
  brandName?: string
  tagline?: string
  heroImage?: string
  properties?: Property[]
}

const defaultProperties: Property[] = [
  { id: '1', title: '한강뷰 아파트', location: '서울 용산구', price: '15억 5,000만', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop', beds: 3, baths: 2, sqft: '112㎡', tag: '추천' },
  { id: '2', title: '강남 신축 오피스텔', location: '서울 강남구', price: '8억 2,000만', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', beds: 2, baths: 1, sqft: '68㎡', tag: '신규' },
  { id: '3', title: '판교 타운하우스', location: '경기 성남시', price: '12억 8,000만', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop', beds: 4, baths: 3, sqft: '185㎡' },
  { id: '4', title: '해운대 펜트하우스', location: '부산 해운대구', price: '22억', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop', beds: 5, baths: 4, sqft: '245㎡', tag: '프리미엄' },
]

export function LandingRealEstate({
  brandName = '프라임부동산',
  tagline = '완벽한 공간을 찾아드립니다',
  heroImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop',
  properties = defaultProperties,
}: LandingRealEstateProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'sale' | 'rent'>('all')

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              {brandName}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tagline}</h1>

            <p className="text-lg mb-8 opacity-80">
              15년 경험과 1,200건 이상의 성공적인 거래
            </p>

            <button
              className="px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              무료 상담 신청
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1,200+', label: '거래 완료' },
              { value: '98%', label: '고객 만족' },
              { value: '15년', label: '업력' },
              { value: '50+', label: '상담사' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>{stat.value}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">차별화된 서비스</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: MapPin, title: '지역 전문가', desc: '각 지역 특성 완벽 파악' },
              { icon: Home, title: '엄선된 매물', desc: '검증된 프리미엄 매물' },
              { icon: Key, title: '원스톱 서비스', desc: '계약부터 입주까지' },
              { icon: TrendingUp, title: '투자 분석', desc: '빅데이터 시세 분석' },
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-lg"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: 'var(--color-accent)' }}
                >
                  <f.icon className="w-5 h-5" style={{ color: 'var(--color-bg)' }} />
                </div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">추천 매물</h2>
            <div className="flex gap-2">
              {(['all', 'sale', 'rent'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    background: activeTab === tab ? 'var(--color-accent)' : 'var(--color-bg-secondary)',
                    color: activeTab === tab ? 'var(--color-bg)' : 'var(--color-text)',
                  }}
                >
                  {tab === 'all' ? '전체' : tab === 'sale' ? '매매' : '임대'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {properties.map((p) => (
              <div
                key={p.id}
                className="rounded-lg overflow-hidden"
                style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
              >
                <div className="relative h-40">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  {p.tag && (
                    <span
                      className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-medium"
                      style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                    >
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs flex items-center gap-1 mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                    <MapPin className="w-3 h-3" /> {p.location}
                  </p>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-lg font-bold mb-2" style={{ color: 'var(--color-accent)' }}>{p.price}</p>
                  <div className="flex gap-3 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    <span>{p.beds}베드</span>
                    <span>{p.baths}배스</span>
                    <span>{p.sqft}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'var(--color-accent)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-bg)' }}>
            지금 상담받으세요
          </h2>
          <p className="mb-6 opacity-90" style={{ color: 'var(--color-bg)' }}>
            전문 상담사가 완벽한 공간을 찾아드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              style={{ background: 'var(--color-bg)', color: 'var(--color-accent)' }}
            >
              <Phone className="w-4 h-4" /> 1588-0000
            </button>
            <button
              className="px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              style={{ background: 'transparent', border: '2px solid var(--color-bg)', color: 'var(--color-bg)' }}
            >
              <Mail className="w-4 h-4" /> 온라인 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
