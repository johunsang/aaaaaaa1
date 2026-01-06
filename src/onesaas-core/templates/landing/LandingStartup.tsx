'use client'

/**
 * LandingStartup 템플릿 - 클린 버전
 */

import { ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  twitter?: string
  linkedin?: string
}

interface LandingStartupProps {
  companyName?: string
  tagline?: string
  description?: string
  teamMembers?: TeamMember[]
  investors?: { name: string }[]
  className?: string
}

export function LandingStartup({
  companyName = 'Startup',
  tagline,
  description,
  teamMembers,
  investors,
  className = '',
}: LandingStartupProps) {
  const defaultTeam: TeamMember[] = teamMembers || [
    { name: '김창업', role: 'CEO', twitter: '@kim' },
    { name: '이기술', role: 'CTO', linkedin: 'lee' },
    { name: '박디자인', role: 'Design', twitter: '@park' },
    { name: '정마케팅', role: 'Marketing', linkedin: 'jung' },
  ]

  const defaultInvestors = investors || [
    { name: 'Y Combinator' },
    { name: 'Sequoia' },
    { name: 'a16z' },
  ]

  return (
    <div className={className} style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-6"
                style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Series A 펀딩 완료
              </span>

              <h1
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: 'var(--color-text)' }}
              >
                {tagline || (
                  <>미래를 <span style={{ color: 'var(--color-accent)' }}>만들어갑니다</span></>
                )}
              </h1>

              <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                {description || '기술을 통해 사람들의 일상을 더 나은 방향으로 변화시킵니다.'}
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                >
                  채용 공고 <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                  style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                >
                  <Github className="w-4 h-4" /> GitHub
                </button>
              </div>
            </div>

            <div
              className="aspect-square rounded-lg flex items-center justify-center"
              style={{ background: 'var(--color-bg-secondary)' }}
            >
              <span className="text-6xl">🚀</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            우리의 미션
          </h2>
          <p className="text-xl" style={{ color: 'var(--color-text)' }}>
            "모든 사람이 <span style={{ color: 'var(--color-accent)' }}>무한한 가능성</span>을 실현할 수 있는 세상"
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$50M+', label: '투자금' },
              { value: '100+', label: '팀원' },
              { value: '50K+', label: '사용자' },
              { value: '15+', label: '국가' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold mb-1" style={{ color: 'var(--color-accent)' }}>
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
              팀 소개
            </h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>세계 최고 기업 출신 인재</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {defaultTeam.map((member, i) => (
              <div
                key={i}
                className="p-5 rounded-lg text-center"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold"
                  style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold mb-0.5" style={{ color: 'var(--color-text)' }}>
                  {member.name}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                  {member.role}
                </p>
                <div className="flex justify-center gap-2">
                  {member.twitter && (
                    <Twitter className="w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} />
                  )}
                  {member.linkedin && (
                    <Linkedin className="w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
            투자사
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {defaultInvestors.map((investor, i) => (
              <div key={i} className="text-xl font-semibold opacity-50" style={{ color: 'var(--color-text)' }}>
                {investor.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            함께 미래를 만들어가요
          </h2>
          <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            열정적인 인재를 찾고 있습니다
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              <Mail className="w-4 h-4" /> 연락하기
            </button>
            <button
              className="px-6 py-3 rounded-lg font-semibold"
              style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
            >
              채용 공고
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
