export class Character {
  id: string;
  name: string[3]; // [0] zh,[1] jp,[2] en
  img: string;
  nickName: string; // 称号
  race: string; // 种族
  region: string; // 区域
  work: string[]; // 登场作品
  description: string; // 描述
  themeMusic: string; // 主题曲
}
