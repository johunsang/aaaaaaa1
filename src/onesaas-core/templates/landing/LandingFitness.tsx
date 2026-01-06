'use client'

/**
 * 피트니스/헬스 랜딩 페이지 템플릿 - 클린 버전
 */

import { useState } from 'react'
import { Play, Dumbbell, Clock, Flame, Check, ArrowRight } from 'lucide-react'

interface Program {
  id: string
  title: string
  description: string
  duration: string
  calories: string
  level: string
  image: string
}

interface Trainer {
  name: string
  specialty: string
  image: string
  experience: string
}

interface LandingFitnessProps {
  brandName?: string
  tagline?: string
  heroImage?: string
  programs?: Program[]
  trainers?: Trainer[]
}

const defaultPrograms: Program[] = [
  {
    id: '1',
    title: 'HIIT 인터벌',
    description: '20분 만에 최대 칼로리 소모',
    duration: '20분',
    calories: '400kcal',
    level: '상급',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop'
  },
  {
    id: '2',
    title: '근력 강화',
    description: '체계적인 웨이트 트레이닝',
    duration: '60분',
    calories: '300kcal',
    level: '중급',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=400&fit=crop'
  },
  {
    id: '3',
    title: '요가 & 필라테스',
    description: '유연성과 코어 강화',
    duration: '50분',
    calories: '200kcal',
    level: '초급',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e067?w=600&h=400&fit=crop'
  },
  {
    id: '4',
    title: '복싱 피트니스',
    description: '스트레스 해소와 전신 운동',
    duration: '45분',
    calories: '500kcal',
    level: '중급',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop'
  }
]

const defaultTrainers: Trainer[] = [
  { name: '김태현', specialty: '웨이트 트레이닝', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop', experience: '10년' },
  { name: '이수진', specialty: '요가 / 필라테스', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop', experience: '8년' },
  { name: '박준영', specialty: 'HIIT / 기능성', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop', experience: '7년' },
]

export function LandingFitness({
  brandName = '파워짐',
  tagline = '당신의 한계를 넘어서',
  heroImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop',
  programs = defaultPrograms,
  trainers = defaultTrainers,
}: LandingFitnessProps) {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold">{brandName}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {tagline}
            </h1>

            <p className="text-lg mb-8 opacity-80">
              전문 트레이너와 함께 목표를 달성하세요.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
              >
                7일 무료 체험
              </button>
              <button
                className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}
              >
                <Play className="w-4 h-4" /> 시설 둘러보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: '회원' },
              { value: '50+', label: '트레이너' },
              { value: '24/7', label: '운영' },
              { value: '100+', label: '주간 클래스' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>{stat.value}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">프로그램</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>당신에게 맞는 운동</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((program) => (
              <div
                key={program.id}
                className="rounded-lg overflow-hidden"
                style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
              >
                <div className="relative h-40">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  <span
                    className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-medium"
                    style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                  >
                    {program.level}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{program.title}</h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                    {program.description}
                  </p>
                  <div className="flex gap-3 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {program.duration}</span>
                    <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {program.calories}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">왜 {brandName}인가요?</h2>
              <div className="space-y-4">
                {[
                  '최신 프리미엄 장비',
                  '1:1 맞춤 PT 프로그램',
                  '영양 상담 및 식단 관리',
                  '인바디 무료 측정',
                  '락커룸 & 샤워시설'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop"
                alt="Gym"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">전문 트레이너</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>목표를 함께할 파트너</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trainers.map((trainer, i) => (
              <div key={i} className="text-center">
                <div className="relative h-64 rounded-lg overflow-hidden mb-3">
                  <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold">{trainer.name}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {trainer.specialty} · {trainer.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">멤버십</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: '베이직', price: '월 5만원', features: ['시설 이용', '그룹 클래스', '락커 이용'] },
              { name: '프리미엄', price: '월 12만원', popular: true, features: ['시설 이용', '그룹 클래스', 'PT 월 4회', '인바디 측정'] },
              { name: 'VIP', price: '월 25만원', features: ['시설 이용', 'PT 무제한', '전담 관리'] }
            ].map((plan, i) => (
              <div
                key={i}
                className="p-6 rounded-lg"
                style={{
                  background: 'var(--color-bg)',
                  border: plan.popular ? '2px solid var(--color-accent)' : '1px solid var(--color-border)'
                }}
              >
                {plan.popular && (
                  <span
                    className="inline-block px-2 py-0.5 text-xs font-medium rounded mb-2"
                    style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                  >
                    인기
                  </span>
                )}
                <h3 className="font-semibold mb-1">{plan.name}</h3>
                <p className="text-2xl font-bold mb-4" style={{ color: 'var(--color-accent)' }}>{plan.price}</p>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <Check className="w-4 h-4" /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
                  style={{
                    background: plan.popular ? 'var(--color-accent)' : 'var(--color-bg-secondary)',
                    color: plan.popular ? 'var(--color-bg)' : 'var(--color-text)'
                  }}
                >
                  시작하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">7일 무료 체험</h2>
          <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            카드 등록 없이 지금 시작
          </p>
          <button
            className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
          >
            무료 체험 시작 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}
