import { getHighlights, getProfile } from "@/lib/db";

export default function Home() {
  const profile = getProfile();
  const highlights = getHighlights();

  return (
    <main className="min-h-screen bg-slate-50/50 px-6 py-12 flex items-center justify-center font-sans">
      {/* 자기소개 전체 화면: 프리미엄 다크/라이트 대비 및 카드 디자인 */}
      <section className="w-full max-w-4xl rounded-[2rem] bg-white p-8 md:p-12 shadow-xl border border-slate-100 transition-all duration-500 hover:shadow-2xl">
        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
          {/* 프로필 사진 영역: AI 캐릭터 아바타 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-slate-100">
            <img
              src={profile.image_path}
              alt={`${profile.name} 프로필 사진`}
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full w-fit">
              Data Analyst Portfolio
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 font-medium border-l-4 border-primary pl-4">
              {profile.tagline}
            </p>
          </div>
        </div>

        {/* 기본 정보 카드 */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-md group">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">이름</p>
            <p className="mt-2 text-xl font-bold text-slate-800">{profile.name}</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-md group">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">소속</p>
            <p className="mt-2 text-xl font-bold text-slate-800">{profile.team}</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-md group">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">나이</p>
            <p className="mt-2 text-xl font-bold text-slate-800">{profile.position}</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-md group">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">취미</p>
            <p className="mt-2 text-xl font-bold text-slate-800">{profile.uniform_number}</p>
          </div>
        </div>

        {/* 소개 문장 영역 */}
        <div className="mt-10 rounded-2xl border border-slate-100 p-8 bg-slate-50/20">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">자기소개</h2>
          <p className="mt-5 leading-relaxed text-slate-600 whitespace-pre-line">{profile.introduction}</p>
        </div>

        {/* 핵심 요약 영역 */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">핵심 요약</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div 
                key={highlight.id} 
                className="rounded-xl border border-slate-100 bg-white px-5 py-4 text-center font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/10 hover:text-primary"
              >
                {highlight.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
