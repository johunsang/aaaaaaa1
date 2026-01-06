'use client'

/**
 * 의료/병원 랜딩 페이지 템플릿 - 클린 버전
 */

import { Stethoscope, Heart, Clock, Phone, Shield, Award, Calendar, MapPin, Star } from 'lucide-react'

interface Doctor {
  name: string
  specialty: string
  image: string
  education: string
  experience: string
}

interface LandingHealthcareProps {
  brandName?: string
  tagline?: string
  heroImage?: string
  doctors?: Doctor[]
}

const defaultDoctors: Doctor[] = [
  { name: '김영수', specialty: '내과 전문의', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop', education: '서울대학교 의과대학', experience: '25년 경력' },
  { name: '이정민', specialty: '외과 전문의', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop', education: '연세대학교 의과대학', experience: '20년 경력' },
  { name: '박지현', specialty: '소아과 전문의', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop', education: '고려대학교 의과대학', experience: '18년 경력' },
  { name: '최성호', specialty: '정형외과 전문의', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop', education: '서울대학교 의과대학', experience: '22년 경력' }
]

const defaultServices = [
  { id: '1', title: '내과 진료', description: '당뇨, 고혈압, 갑상선 등', icon: Stethoscope },
  { id: '2', title: '건강검진', description: '종합건강검진, 암검진', icon: Shield },
  { id: '3', title: '소아청소년과', description: '영유아 건강검진, 예방접종', icon: Heart },
  { id: '4', title: '정형외과', description: '관절, 척추 질환 치료', icon: Award }
]

const defaultTestimonials = [
  { name: '김미영', treatment: '건강검진', content: '꼼꼼한 검진과 친절한 설명 덕분에 건강 관리에 큰 도움이 되었습니다.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  { name: '이준혁', treatment: '정형외과', content: '무릎 수술 후 재활까지 체계적으로 관리해주셔서 빠르게 회복할 수 있었습니다.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  { name: '박선희', treatment: '소아과', content: '아이가 아플 때마다 방문하는데, 항상 자세히 설명해주셔서 믿고 갑니다.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face' }
]

export function LandingHealthcare({
  brandName = '서울중앙병원',
  tagline = '건강한 삶의 시작',
  heroImage = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop',
  doctors = defaultDoctors
}: LandingHealthcareProps) {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                <span className="font-semibold">{brandName}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{tagline}</h1>

              <p className="text-lg mb-6 opacity-80">
                30년 전통의 {brandName}이 최신 의료 기술과 따뜻한 마음으로 여러분의 건강을 지켜드립니다.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                >
                  <Calendar className="w-4 h-4" /> 진료 예약
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                  style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                >
                  <Phone className="w-4 h-4" /> 02-1234-5678
                </button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 평일 08:00-18:00</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 서울시 강남구</span>
              </div>
            </div>

            {/* Quick Form */}
            <div className="p-6 rounded-lg" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
              <h3 className="text-xl font-bold mb-4">빠른 예약</h3>
              <div className="space-y-3">
                <input type="text" placeholder="이름" className="w-full px-4 py-3 rounded-lg" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }} />
                <input type="tel" placeholder="연락처" className="w-full px-4 py-3 rounded-lg" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }} />
                <select className="w-full px-4 py-3 rounded-lg" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
                  <option>진료과 선택</option>
                  <option>내과</option>
                  <option>외과</option>
                  <option>소아과</option>
                  <option>정형외과</option>
                </select>
                <button className="w-full py-3 rounded-lg font-semibold transition-opacity hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>
                  예약 신청
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: 'var(--color-accent)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '30년', label: '전통' },
              { value: '50만+', label: '진료 환자' },
              { value: '100+', label: '전문 의료진' },
              { value: '98%', label: '환자 만족도' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-bg)' }}>{stat.value}</p>
                <p className="text-sm opacity-80" style={{ color: 'var(--color-bg)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">전문 진료 서비스</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {defaultServices.map((service) => (
              <div key={service.id} className="p-5 rounded-lg text-center" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--color-accent)' }}>
                  <service.icon className="w-6 h-6" style={{ color: 'var(--color-bg)' }} />
                </div>
                <h3 className="font-semibold mb-1">{service.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">최고의 전문 의료진</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {doctors.map((doctor, i) => (
              <div key={i} className="rounded-lg overflow-hidden" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <div className="h-48 overflow-hidden">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{doctor.name}</h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--color-accent)' }}>{doctor.specialty}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{doctor.education}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{doctor.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">환자분들의 이야기</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {defaultTestimonials.map((t, i) => (
              <div key={i} className="p-5 rounded-lg" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: 'var(--color-accent)' }} />
                  ))}
                </div>
                <span className="text-xs px-2 py-0.5 rounded mb-2 inline-block" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>{t.treatment}</span>
                <p className="mb-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <p className="font-medium text-sm">{t.name}</p>
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
            건강한 삶, 지금 시작하세요
          </h2>
          <p className="mb-6 opacity-90" style={{ color: 'var(--color-bg)' }}>
            서울시 강남구 테헤란로 123 | 주차 가능
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 rounded-lg font-semibold" style={{ background: 'var(--color-bg)', color: 'var(--color-accent)' }}>
              진료 예약하기
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2" style={{ background: 'transparent', border: '2px solid var(--color-bg)', color: 'var(--color-bg)' }}>
              <Phone className="w-4 h-4" /> 02-1234-5678
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
