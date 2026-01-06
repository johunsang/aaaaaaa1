'use client'

/**
 * 교육/학원 랜딩 페이지 템플릿 - 클린 버전
 */

import { BookOpen, Users, Award, Clock, GraduationCap, Star, ArrowRight, Check } from 'lucide-react'

interface Course {
  id: string
  title: string
  instructor: string
  duration: string
  students: number
  price: string
  image: string
  tag?: string
}

interface LandingEducationProps {
  brandName?: string
  tagline?: string
  heroImage?: string
  courses?: Course[]
}

const defaultCourses: Course[] = [
  { id: '1', title: '수능 수학 만점 비법', instructor: '김수학', duration: '3개월', students: 1240, price: '월 29만원', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop', tag: '베스트' },
  { id: '2', title: '영어 스피킹 마스터', instructor: '제니퍼 Park', duration: '6개월', students: 890, price: '월 35만원', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop', tag: '인기' },
  { id: '3', title: '코딩 기초부터 취업까지', instructor: '이개발', duration: '6개월', students: 2100, price: '월 45만원', image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop', tag: '취업연계' },
]

export function LandingEducation({
  brandName = '드림학원',
  tagline = '꿈을 현실로 만드는 교육',
  heroImage = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop',
  courses = defaultCourses,
}: LandingEducationProps) {
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
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold">{brandName}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tagline}</h1>

            <p className="text-lg mb-8 opacity-80">
              15,000명 이상이 꿈을 이뤘습니다.
            </p>

            <button
              className="px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              무료 체험 수업 신청
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15,000+', label: '수강생' },
              { value: '98%', label: '합격률' },
              { value: '50+', label: '강사' },
              { value: '4.9', label: '평점' },
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
            <h2 className="text-2xl md:text-3xl font-bold mb-2">차별화된 교육</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, title: '맞춤 커리큘럼', desc: '1:1 맞춤 학습 플랜' },
              { icon: Users, title: '소수정예', desc: '최대 10명 집중 관리' },
              { icon: Award, title: '검증된 강사', desc: '각 분야 전문가' },
              { icon: Clock, title: '24시간 질문', desc: '강사 직접 답변' },
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-lg text-center"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
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

      {/* Courses */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">인기 강좌</h2>
            <button className="flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
              전체 보기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-lg overflow-hidden"
                style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
              >
                <div className="relative h-40">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  {course.tag && (
                    <span
                      className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-medium"
                      style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                    >
                      {course.tag}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                    {course.instructor} · {course.duration}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold" style={{ color: 'var(--color-accent)' }}>{course.price}</p>
                    <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                      {course.students.toLocaleString()}명 수강
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">합격 후기</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: '이수빈', course: '수능 수학', content: '3등급에서 1등급! 만점 받았어요.' },
              { name: '최준영', course: '영어 스피킹', content: '6개월 만에 토익 스피킹 레벨 8!' },
              { name: '김하늘', course: '코딩', content: '비전공자인데 네카라쿠배 취업!' },
            ].map((t, i) => (
              <div
                key={i}
                className="p-5 rounded-lg"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: 'var(--color-accent)' }} />
                  ))}
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded mb-2 inline-block"
                  style={{ background: 'var(--color-bg-secondary)' }}
                >
                  {t.course}
                </span>
                <p className="mb-3" style={{ color: 'var(--color-text-secondary)' }}>"{t.content}"</p>
                <p className="font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'var(--color-accent)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-bg)' }}>
            무료 체험 수업
          </h2>
          <p className="mb-6 opacity-90" style={{ color: 'var(--color-bg)' }}>
            첫 수업은 무료! 직접 경험하고 결정하세요
          </p>
          <button
            className="px-6 py-3 rounded-lg font-semibold"
            style={{ background: 'var(--color-bg)', color: 'var(--color-accent)' }}
          >
            무료 체험 신청
          </button>
        </div>
      </section>
    </div>
  )
}
