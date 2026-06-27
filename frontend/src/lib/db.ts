import Database from "better-sqlite3";
import path from "node:path";

export type Profile = {
  id: number;
  name: string;
  team: string;
  position: string;
  uniform_number: string;
  tagline: string;
  introduction: string;
  image_path: string;
};

export type Highlight = {
  id: number;
  label: string;
};

const dbPath = path.join(process.cwd(), "local.db");

const defaultProfile: Profile = {
  id: 1,
  name: "김지원",
  team: "부산대학교",
  position: "24",
  uniform_number: "운동",
  tagline:
    "데이터를 분석하여 비즈니스 문제를 해결하고 실질적인 가치를 창출하는 분석가 지망생 김지원입니다.",
  introduction:
    "안녕하세요! 부산대학교에 재학 중이며 데이터 분석 직무를 희망하고 있는 김지원입니다. R, Python, SQL 등 다양한 데이터 과학 툴을 활용하여 인사이트를 도출하고 비즈니스 의사결정을 돕는 포트폴리오를 만들어가고 있습니다.",
  image_path: "/images/jiwon.png",
};

const defaultHighlights: Highlight[] = [
  { id: 1, label: "희망 직무: 데이터 분석" },
  { id: 2, label: "자격사항: ADsP, SQLD" },
  { id: 3, label: "사용 가능 툴: R, Python" },
];

function getDb() {
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      team TEXT NOT NULL,
      position TEXT NOT NULL,
      uniform_number TEXT NOT NULL,
      tagline TEXT NOT NULL,
      introduction TEXT NOT NULL,
      image_path TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS highlights (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label TEXT NOT NULL
    );
  `);

  return db;
}

export function getProfile() {
  try {
    const profile = getDb()
      .prepare(
        "SELECT id, name, team, position, uniform_number, tagline, introduction, image_path FROM profile ORDER BY id LIMIT 1",
      )
      .get() as Profile | undefined;

    return profile ?? defaultProfile;
  } catch (error) {
    console.error(error);
    return defaultProfile;
  }
}

export function getHighlights() {
  try {
    const highlights = getDb().prepare("SELECT id, label FROM highlights ORDER BY id").all() as Highlight[];

    return highlights.length > 0 ? highlights : defaultHighlights;
  } catch (error) {
    console.error(error);
    return defaultHighlights;
  }
}
