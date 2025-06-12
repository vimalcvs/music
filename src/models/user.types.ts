interface UserPreferences {
  theme: string;
  language: string;
}

export interface UserData {
  name: string;
  email: string;
  preferences: UserPreferences;
}
