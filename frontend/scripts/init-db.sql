DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (
  name,
  team,
  position,
  uniform_number,
  tagline,
  introduction,
  image_path
) VALUES (
  '김지원',
  '부산대학교',
  '24',
  '운동',
  '데이터를 분석하여 비즈니스 문제를 해결하고 실질적인 가치를 창출하는 분석가 지망생 김지원입니다.',
  '안녕하세요! 부산대학교에 재학 중이며 데이터 분석 직무를 희망하고 있는 김지원입니다. R, Python, SQL 등 다양한 데이터 과학 툴을 활용하여 인사이트를 도출하고 비즈니스 의사결정을 돕는 포트폴리오를 만들어가고 있습니다.',
  '/images/shirt.jpg'
);

INSERT INTO highlights (label) VALUES
  ('희망 직무: 데이터 분석'),
  ('자격사항: ADsP, SQLD'),
  ('사용 가능 툴: R, Python');

