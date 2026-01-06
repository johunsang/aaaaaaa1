'use client'

/**
 * 금융/핀테크 랜딩 페이지 템플릿 - 클린 버전
 */

import { TrendingUp, Shield, Wallet, PieChart, Lock, Smartphone, CreditCard, BarChart3, Check } from 'lucide-react'

interface LandingFinanceProps {
  brandName?: string
  tagline?: string
  heroImage?: string
}

export function LandingFinance({
  brandName = '스마트뱅크',
  tagline = '금융의 새로운 기준',
  heroImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop'
}: LandingFinanceProps) {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold">{brandName}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tagline}</h1>

            <p className="text-lg mb-6 opacity-80">
              연 5% 이자, 수수료 무료, 실시간 자산 관리. 100만 명이 선택한 스마트한 금융 서비스.
            </p>

            <button
              className="px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              무료로 시작하기
            </button>

            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: Shield, text: '금융위원회 인가' },
                { icon: Lock, text: '256bit 암호화' },
                { icon: Smartphone, text: 'ISO 27001 인증' }
              ].map((badge, i) => (
                <span key={i} className="flex items-center gap-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <badge.icon className="w-4 h-4" /> {badge.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: 'var(--color-accent)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100만+', label: '가입자' },
              { value: '5조원+', label: '누적 거래액' },
              { value: '연 5%', label: '예금 이자' },
              { value: '0원', label: '수수료' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-bg)' }}>{stat.value}</p>
                <p className="text-sm opacity-80" style={{ color: 'var(--color-bg)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">왜 {brandName}인가요?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Wallet, title: '고금리 예금', desc: '연 5% 파격 이자율' },
              { icon: CreditCard, title: '수수료 무료', desc: '모든 수수료가 무료' },
              { icon: PieChart, title: '자산 분석', desc: 'AI 맞춤 절약 제안' },
              { icon: BarChart3, title: '투자 연계', desc: '주식, ETF, 펀드까지' },
              { icon: Shield, title: '철저한 보안', desc: '24시간 모니터링' },
              { icon: Smartphone, title: '간편한 UX', desc: '3초 만에 이체 완료' }
            ].map((feature, i) => (
              <div key={i} className="p-5 rounded-lg" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'var(--color-accent)' }}>
                  <feature.icon className="w-5 h-5" style={{ color: 'var(--color-bg)' }} />
                </div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">3분이면 충분합니다</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: '앱 다운로드', desc: 'App Store 또는 Play Store에서 무료 다운로드' },
              { step: '02', title: '본인 인증', desc: '신분증 촬영으로 간편하게 본인 인증 완료' },
              { step: '03', title: '바로 사용', desc: '계좌 개설 즉시 모든 서비스 이용 가능' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>
                  {item.step}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">투명한 가격 정책</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: '베이직', price: '무료', features: ['기본 예금 (연 3%)', '무제한 이체', 'ATM 월 5회 무료', '기본 자산 분석'] },
              { name: '프리미엄', price: '월 9,900원', popular: true, features: ['고금리 예금 (연 5%)', '무제한 이체', 'ATM 무제한 무료', 'AI 자산 분석', '해외 결제 무료', '전담 상담사'] },
              { name: '비즈니스', price: '월 29,900원', features: ['프리미엄 전체', '법인 계좌', '급여 자동 이체', '세무 리포트', 'API 연동'] }
            ].map((plan, i) => (
              <div key={i} className="p-6 rounded-lg" style={{ background: plan.popular ? 'var(--color-accent)' : 'var(--color-bg-secondary)', border: plan.popular ? 'none' : '1px solid var(--color-border)' }}>
                {plan.popular && (
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded mb-2" style={{ background: 'var(--color-bg)', color: 'var(--color-accent)' }}>인기</span>
                )}
                <h3 className="font-semibold mb-1" style={{ color: plan.popular ? 'var(--color-bg)' : 'var(--color-text)' }}>{plan.name}</h3>
                <p className="text-2xl font-bold mb-4" style={{ color: plan.popular ? 'var(--color-bg)' : 'var(--color-accent)' }}>{plan.price}</p>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: plan.popular ? 'var(--color-bg)' : 'var(--color-text-secondary)' }}>
                      <Check className="w-4 h-4" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 rounded-lg font-medium transition-opacity hover:opacity-90" style={{ background: plan.popular ? 'var(--color-bg)' : 'var(--color-accent)', color: plan.popular ? 'var(--color-accent)' : 'var(--color-bg)' }}>
                  시작하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'var(--color-accent)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-bg)' }}>
            지금 바로 시작하세요
          </h2>
          <p className="mb-6 opacity-90" style={{ color: 'var(--color-bg)' }}>
            가입만 해도 5,000원 즉시 지급
          </p>
          <button className="px-6 py-3 rounded-lg font-semibold" style={{ background: 'var(--color-bg)', color: 'var(--color-accent)' }}>
            앱 다운로드
          </button>
        </div>
      </section>
    </div>
  )
}
