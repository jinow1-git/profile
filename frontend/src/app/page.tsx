const profile = {
  name: "김지원",
  team: "부산대학교",
  position: "24",
  uniform_number: "운동",
  tagline: "데이터를 분석하여 비즈니스 문제를 해결하고 실질적인 가치를 창출하는 분석가 지망생 김지원입니다.",
  introduction: "안녕하세요! 부산대학교에 재학 중이며 데이터 분석 직무를 희망하고 있는 김지원입니다. R, Python, SQL 등 다양한 툴을 활용하여 인사이트를 도출하고 비즈니스 의사결정을 돕는 포트폴리오를 만들어가고 있습니다.",
  image_path: "/images/shirt.jpg"
};

const highlights = [
  { id: 1, label: "희망 직무: 데이터 분석" },
  { id: 2, label: "자격사항: ADsP, SQLD" },
  { id: 3, label: "사용 가능 툴: R, Python" }
];

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-graphite font-sans pb-24 selection:bg-neutral-100 selection:text-black">
      {/* Swiss grid top border */}
      <div className="w-full border-b border-hairline h-16 flex items-center justify-between px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm tracking-tight font-semibold">JIWON.PROFILE</span>
          <span className="text-xs px-2 py-0.5 border border-hairline rounded-full bg-mist text-concrete font-medium">v1.0.0</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs text-concrete hover:text-graphite cursor-pointer transition-colors font-medium">Docs</span>
          <span className="text-xs text-concrete hover:text-graphite cursor-pointer transition-colors font-medium">Components</span>
          <a
            href="https://github.com/jinow1-git/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 bg-graphite text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium tracking-tight"
          >
            GitHub
          </a>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 mt-16">
        {/* Profile Intro Grid */}
        <div className="grid gap-12 md:grid-cols-[300px_1fr] items-start border-b border-hairline pb-12">
          {/* Profile Image with Swiss Hairline Border */}
          <div className="border border-hairline rounded-xl p-2 bg-white w-full max-w-[300px] aspect-square overflow-hidden group">
            <img
              src={profile.image_path}
              alt={`${profile.name} 프로필 사진`}
              className="w-full h-full object-cover rounded-lg filter grayscale contrast-110 transition-all duration-500 group-hover:grayscale-0"
            />
          </div>

          {/* Hero Typography & Accent Button */}
          <div className="flex flex-col justify-between h-full py-2">
            <div>
              <span className="text-xs uppercase tracking-wider text-concrete font-semibold">
                Introduction / Personal Profile
              </span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tighter text-pure-black leading-[1.1]">
                {profile.name}
              </h1>
              <p className="mt-6 text-lg md:text-xl font-medium tracking-tight text-concrete max-w-[600px] leading-relaxed">
                {profile.tagline}
              </p>
            </div>
            {/* The single filled-black button period */}
            <div className="mt-8">
              <a
                href="mailto:jinow1@pusan.ac.kr"
                className="inline-flex items-center justify-center bg-graphite text-white font-medium text-sm px-5 py-2.5 rounded-lg border border-graphite hover:bg-white hover:text-graphite transition-all duration-300"
              >
                Inquire & Contact Profile
              </a>
            </div>
          </div>
        </div>

        {/* Basic Information Cards Grid */}
        <div className="mt-12">
          <span className="text-xs uppercase tracking-wider text-concrete font-semibold block mb-6">
            Meta Details / Information
          </span>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="border border-hairline rounded-xl p-5 bg-white transition-all duration-300 hover:bg-mist">
              <span className="text-xs font-semibold text-concrete uppercase tracking-wider">이름</span>
              <p className="mt-3 text-base font-semibold text-graphite tracking-tight">{profile.name}</p>
            </div>
            <div className="border border-hairline rounded-xl p-5 bg-white transition-all duration-300 hover:bg-mist">
              <span className="text-xs font-semibold text-concrete uppercase tracking-wider">소속</span>
              <p className="mt-3 text-base font-semibold text-graphite tracking-tight">{profile.team}</p>
            </div>
            <div className="border border-hairline rounded-xl p-5 bg-white transition-all duration-300 hover:bg-mist">
              <span className="text-xs font-semibold text-concrete uppercase tracking-wider">나이</span>
              <p className="mt-3 text-base font-semibold text-graphite tracking-tight">{profile.position}</p>
            </div>
            <div className="border border-hairline rounded-xl p-5 bg-white transition-all duration-300 hover:bg-mist">
              <span className="text-xs font-semibold text-concrete uppercase tracking-wider">취미</span>
              <p className="mt-3 text-base font-semibold text-graphite tracking-tight">{profile.uniform_number}</p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-12 border border-hairline rounded-xl p-6 md:p-8 bg-white">
          <h2 className="text-lg font-semibold text-pure-black border-b border-hairline pb-3 tracking-tight">Biography</h2>
          <p className="mt-5 text-sm md:text-base leading-relaxed text-concrete max-w-[800px] whitespace-pre-line font-normal">
            {profile.introduction}
          </p>
        </div>

        {/* Highlights / Summary section */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-pure-black border-b border-hairline pb-3 tracking-tight mb-6">
            Core Summary
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="border border-hairline rounded-xl p-5 bg-white transition-all duration-300 hover:border-graphite"
              >
                <div className="w-1.5 h-1.5 bg-graphite rounded-full mb-3" />
                <p className="text-sm font-medium text-graphite leading-relaxed">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

