'use client'

/**
 * LandingSaaS 템플릿
 * SaaS 랜딩 페이지 - 클린 버전
 */

import { useState } from 'react'
import {
  Check, ArrowRight, Zap, Shield, Users,
  BarChart3, Globe, Clock, Play
} from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface PricingPlan {
  name: string
  price: number
  interval: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

interface Testimonial {
  content: string
  author: string
  role: string
  company: string
}

interface LandingSaaSProps {
  heroTitle?: string
  heroSubtitle?: string
  features?: Feature[]
  pricing?: PricingPlan[]
  testimonials?: Testimonial[]
  className?: string
}

export function LandingSaaS({
  heroTitle,
  heroSubtitle,
  features,
  pricing,
  testimonials,
  className = '',
}: LandingSaaSProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const formatKRW = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount)
  }

  const defaultFeatures: Feature[] = features || [
    { icon: <Zap className="w-5 h-5" />, title: '빠른 시작', description: '5분 만에 시작할 수 있는 간편한 설정' },
    { icon: <Shield className="w-5 h-5" />, title: '안전한 보안', description: '엔터프라이즈급 보안으로 데이터 보호' },
    { icon: <Users className="w-5 h-5" />, title: '팀 협업', description: '실시간 협업으로 생산성 향상' },
    { icon: <BarChart3 className="w-5 h-5" />, title: '상세 분석', description: '데이터 기반 인사이트 제공' },
    { icon: <Globe className="w-5 h-5" />, title: '글로벌 CDN', description: '전 세계 어디서나 빠른 속도' },
    { icon: <Clock className="w-5 h-5" />, title: '24/7 지원', description: '언제든 도움을 받을 수 있는 지원팀' },
  ]

  const defaultPricing: PricingPlan[] = pricing || [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? 29000 : 290000,
      interval: billingCycle === 'monthly' ? '/월' : '/년',
      description: '개인 또는 소규모 팀',
      features: ['사용자 3명', '10GB 저장공간', '기본 분석', '이메일 지원'],
      cta: '무료로 시작',
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? 79000 : 790000,
      interval: billingCycle === 'monthly' ? '/월' : '/년',
      description: '성장하는 비즈니스',
      features: ['사용자 무제한', '100GB 저장공간', '고급 분석', '우선 지원', 'API 접근'],
      popular: true,
      cta: '시작하기',
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? 199000 : 1990000,
      interval: billingCycle === 'monthly' ? '/월' : '/년',
      description: '대규모 조직',
      features: ['무제한 모든 기능', '전용 서버', '전담 매니저', 'SLA 보장'],
      cta: '문의하기',
    },
  ]

  const defaultTestimonials: Testimonial[] = testimonials || [
    { content: '도입 후 업무 효율이 40% 이상 향상되었습니다.', author: '김철수', role: 'CTO', company: '테크스타트업' },
    { content: '사용하기 쉽고 고객 지원도 훌륭합니다.', author: '이영희', role: '대표', company: '디자인에이전시' },
    { content: '우리 팀의 협업 방식을 완전히 바꿔놓았습니다.', author: '박민수', role: 'PM', company: '소프트웨어컴퍼니' },
  ]

  return (
    <div className={className} style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            {heroTitle || '비즈니스 성장을 가속화하세요'}
          </h1>

          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {heroSubtitle || '팀 협업, 프로젝트 관리, 데이터 분석까지. 하나의 플랫폼에서 모든 것을 해결하세요.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              무료로 시작하기
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-80"
              style={{ color: 'var(--color-text)', border: '1px solid var(--color-border)' }}
            >
              <Play className="w-4 h-4" /> 데모 영상
            </button>
          </div>

          {/* 스크린샷 영역 */}
          <div
            className="rounded-lg overflow-hidden"
            style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
          >
            <div className="p-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
            </div>
            <div className="aspect-video flex items-center justify-center p-12">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--color-text-secondary)' }} />
                <p style={{ color: 'var(--color-text-secondary)' }}>대시보드 미리보기</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
              성공을 위한 도구
            </h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              비즈니스 성장에 필요한 모든 기능
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaultFeatures.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-accent)' }}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
              심플한 가격
            </h2>
            <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              숨겨진 비용 없이, 필요한 만큼만
            </p>

            <div
              className="inline-flex items-center gap-1 p-1 rounded-lg"
              style={{ background: 'var(--color-bg-secondary)' }}
            >
              <button
                onClick={() => setBillingCycle('monthly')}
                className="px-4 py-2 rounded-md text-sm font-medium transition-all"
                style={{
                  background: billingCycle === 'monthly' ? 'var(--color-bg)' : 'transparent',
                  color: 'var(--color-text)',
                }}
              >
                월간
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className="px-4 py-2 rounded-md text-sm font-medium transition-all"
                style={{
                  background: billingCycle === 'yearly' ? 'var(--color-bg)' : 'transparent',
                  color: 'var(--color-text)',
                }}
              >
                연간 <span className="text-xs" style={{ color: 'var(--color-accent)' }}>-17%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {defaultPricing.map((plan) => (
              <div
                key={plan.name}
                className="p-6 rounded-lg"
                style={{
                  background: 'var(--color-bg)',
                  border: plan.popular ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                }}
              >
                {plan.popular && (
                  <span
                    className="inline-block px-2 py-0.5 text-xs font-medium rounded mb-3"
                    style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                  >
                    인기
                  </span>
                )}

                <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                  {plan.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                    ₩{formatKRW(plan.price)}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{plan.interval}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text)' }}>
                      <Check className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
                  style={{
                    background: plan.popular ? 'var(--color-accent)' : 'var(--color-bg-secondary)',
                    color: plan.popular ? 'var(--color-bg)' : 'var(--color-text)',
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
              고객 후기
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {defaultTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-6 rounded-lg"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <p className="mb-4" style={{ color: 'var(--color-text)' }}>
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-medium" style={{ color: 'var(--color-text)' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            지금 시작하세요
          </h2>
          <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            14일 무료 체험. 신용카드 필요 없음.
          </p>
          <button
            className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
          >
            무료로 시작하기
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}
