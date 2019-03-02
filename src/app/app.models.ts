export interface User {
  id: string,
  name: string,
  img: string
}

export interface Task {
  userId: string,
  header: string,
  date: string,
  img: string,
  isDelays: boolean
}

export interface Message{
  name: string,
  date: string,
  img: string,
  post: string,
  isNew: boolean
}

export interface Activity{
  userName: string,
  date: string,
  type: string,
  img: string,
  projectName: string
}


