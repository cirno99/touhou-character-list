export class Character {
  id: string;
  name: string[3]; // [0] zh,[1] jp,[2] en
  nickName: string; // 称号
  race: string; // 种族
  job: string;
  region: string; // 区域
  works: string[]; // 登场作品
  description: string; // 描述
  themeMusic: string; // 主题曲
}
