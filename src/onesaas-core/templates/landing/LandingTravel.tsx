'use client'

/**
 * 여행 랜딩 페이지 템플릿 - 클린 버전
 */

import { useState } from 'react'
import { Plane, MapPin, Calendar, Users, Star, Sun, Compass, Camera, Heart, ArrowRight } from 'lucide-react'

interface Destination {
  id: string
  name: string
  country: string
  image: string
  price: string
  duration: string
  rating: number
  popular?: boolean
}

interface LandingTravelProps {
  brandName?: string
  tagline?: string
  heroImage?: string
  destinations?: Destination[]
}

const defaultDestinations: Destination[] = [
  { id: '1', name: '발리 힐링 투어', country: '인도네시아', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop', price: '189만원~', duration: '5박 6일', rating: 4.9, popular: true },
  { id: '2', name: '파리 로맨틱 여행', country: '프랑스', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop', price: '289만원~', duration: '6박 7일', rating: 4.8, popular: true },
  { id: '3', name: '도쿄 미식 투어', country: '일본', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop', price: '89만원~', duration: '3박 4일', rating: 4.7 },
  { id: '4', name: '스위스 알프스', country: '스위스', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop', price: '389만원~', duration: '7박 8일', rating: 4.9 },
  { id: '5', name: '하와이 휴양', country: '미국', image: 'https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=600&h=400&fit=crop', price: '249만원~', duration: '5박 6일', rating: 4.8 },
  { id: '6', name: '몰디브 리조트', country: '몰디브', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop', price: '459만원~', duration: '4박 5일', rating: 5.0, popular: true }
]

export function LandingTravel({
  brandName = '트래블메이트',
  tagline = '꿈꾸던 여행을 현실로',
  heroImage = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop',
  destinations = defaultDestinations
}: LandingTravelProps) {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 w-full">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Plane className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold">{brandName}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tagline}</h1>

            <p className="text-lg opacity-80">
              전 세계 100개국 이상의 여행지. 최저가 보장과 24시간 고객 지원.
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-3xl mx-auto p-4 rounded-lg" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} />
                <input type="text" placeholder="어디로 떠나시나요?" className="w-full pl-10 pr-3 py-3 rounded-lg" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }} />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} />
                <input type="text" placeholder="언제 떠나시나요?" className="w-full pl-10 pr-3 py-3 rounded-lg" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }} />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} />
                <input type="text" placeholder="인원수" className="w-full pl-10 pr-3 py-3 rounded-lg" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }} />
              </div>
              <button className="py-3 rounded-lg font-semibold transition-opacity hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>
                검색하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Sun, title: '최저가 보장', desc: '차액 환불' },
              { icon: Compass, title: '맞춤 여행', desc: '취향 맞춤 코스' },
              { icon: Camera, title: '현지 가이드', desc: '전문 가이드 투어' },
              { icon: Heart, title: '안심 여행', desc: '24시간 지원' }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--color-accent)' }}>
                  <feature.icon className="w-6 h-6" style={{ color: 'var(--color-bg)' }} />
                </div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">인기 여행지</h2>
            <button className="flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
              전체 보기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations.map((dest) => (
              <div key={dest.id} className="rounded-lg overflow-hidden" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
                <div className="relative h-44">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                  {dest.popular && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-medium" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>
                      인기
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{dest.country}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{dest.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-current" style={{ color: 'var(--color-accent)' }} />
                      <span className="text-sm">{dest.rating}</span>
                    </div>
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{dest.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold" style={{ color: 'var(--color-accent)' }}>{dest.price}</p>
                    <button className="px-3 py-1.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>
                      자세히
                    </button>
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
            특가 알림 받기
          </h2>
          <p className="mb-6 opacity-90" style={{ color: 'var(--color-bg)' }}>
            놓치면 후회할 특가 정보를 가장 먼저 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="이메일 주소" className="flex-1 px-4 py-3 rounded-lg" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }} />
            <button className="px-6 py-3 rounded-lg font-semibold" style={{ background: 'var(--color-bg)', color: 'var(--color-accent)' }}>
              구독하기
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
