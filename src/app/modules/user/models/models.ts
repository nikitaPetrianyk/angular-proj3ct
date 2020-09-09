export interface Dialog {
  id: string;
  sender: string;
  messages: string[];
  date: string;
}

export interface UserDialogs {
  allDialogs: Dialog[];
  id: string;
}

export interface AllUsersDialogs {
  messages: UserDialogs[];
}
