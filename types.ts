
export interface TabooCard {
  target: string;
  forbidden: string[];
}

export enum GameState {
  SETUP = 'SETUP',
  LOADING = 'LOADING',
  PLAYING = 'PLAYING',
  ROUND_OVER = 'ROUND_OVER',
  GAME_OVER = 'GAME_OVER',
  DEVS = 'DEVS'
}

export type Language = 'ar' | 'en' | 'zh';

export interface GameSettings {
  category: string;
  timeLimit: number;
  rounds: number;
  language: Language;
}
