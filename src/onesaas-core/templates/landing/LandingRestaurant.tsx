'use client'

/**
 * 레스토랑/카페 랜딩 페이지 템플릿 - 클린 버전
 */

import { useState } from 'react'
import { MapPin, Clock, Phone, Star, ChefHat, Wine, UtensilsCrossed, Calendar, ArrowRight } from 'lucide-react'

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
  popular?: boolean
}

interface LandingRestaurantProps {
  brandName?: string
  tagline?: string
  heroImage?: string
  menuItems?: MenuItem[]
  chefs?: { name: string; role: string; image: string }[]
  gallery?: string[]
}

const defaultMenuItems: MenuItem[] = [
  { id: '1', name: '한우 등심 스테이크', description: '최상급 한우 등심을 특제 소스와 함께', price: '89,000원', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop', category: '스테이크', popular: true },
  { id: '2', name: '트러플 리조또', description: '이탈리아산 트러플과 아르보리오 쌀', price: '42,000원', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop', category: '파스타' },
  { id: '3', name: '랍스터 테르미도르', description: '통 랍스터에 치즈와 와인 소스', price: '125,000원', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&h=400&fit=crop', category: '시푸드', popular: true },
  { id: '4', name: '시그니처 디저트', description: '셰프 특선 디저트 3종 모음', price: '28,000원', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop', category: '디저트' }
]

const defaultChefs = [
  { name: '김정우', role: 'Executive Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop' },
  { name: '이미경', role: 'Pastry Chef', image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&h=500&fit=crop' }
]

const defaultGallery = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop'
]

export function LandingRestaurant({
  brandName = '라 메종',
  tagline = '특별한 순간을 위한 미식 경험',
  heroImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop',
  menuItems = defaultMenuItems,
  chefs = defaultChefs,
  gallery = defaultGallery
}: LandingRestaurantProps) {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const categories = ['전체', ...new Set(menuItems.map(item => item.category))]
  const filteredItems = selectedCategory === '전체'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <UtensilsCrossed className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{brandName}</h1>

          <p className="text-lg mb-8 opacity-80">{tagline}</p>

          <button
            className="px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
          >
            예약하기
          </button>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 서울 강남구 청담동</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 11:30 - 22:00</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> 02-1234-5678</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { icon: Star, value: '미쉐린 2스타', label: '6년 연속' },
              { icon: Wine, value: '500+', label: '와인 셀렉션' },
              { icon: ChefHat, value: '20년', label: '전통' }
            ].map((item, i) => (
              <div key={i}>
                <item.icon className="w-5 h-5 mx-auto mb-2" style={{ color: 'var(--color-accent)' }} />
                <p className="font-bold">{item.value}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">시그니처 메뉴</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-lg text-sm font-medium"
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

          <div className="grid md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-lg"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                  {item.popular && (
                    <span
                      className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded text-xs font-medium"
                      style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                    >
                      인기
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="font-bold text-sm" style={{ color: 'var(--color-accent)' }}>{item.price}</p>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">장인의 손맛</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {chefs.map((chef, i) => (
              <div key={i} className="text-center">
                <div className="h-64 rounded-lg overflow-hidden mb-4">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-lg">{chef.name}</h3>
                <p className="text-sm" style={{ color: 'var(--color-accent)' }}>{chef.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">공간과 요리</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-40 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'var(--color-accent)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <Calendar className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--color-bg)' }} />
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-bg)' }}>
            예약하기
          </h2>
          <p className="mb-6 opacity-90" style={{ color: 'var(--color-bg)' }}>
            특별한 날, 특별한 경험을 예약하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="px-6 py-3 rounded-lg font-semibold"
              style={{ background: 'var(--color-bg)', color: 'var(--color-accent)' }}
            >
              온라인 예약
            </button>
            <button
              className="px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              style={{ background: 'transparent', border: '2px solid var(--color-bg)', color: 'var(--color-bg)' }}
            >
              <Phone className="w-4 h-4" /> 02-1234-5678
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
