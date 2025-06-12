export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}
  

// models/types.ts
export interface Notification {
    id: number;
    title: string;
    image: string;
    body: string;
    active: number;
  }
  
  export interface NotificationApiResponse {
    status: number;
    message: string;
    data: Notification[];
  }
  


  export interface Day {
    listDay: string;
    listId: string;
    listTime: string;
  }
  
  export interface Week {
    weeksList: string;
    daysList: Day[];
  }