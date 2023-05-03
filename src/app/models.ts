export interface Company{
  id : number,
  name : string,
  description : string,
  city : string,
  address : string
}

export interface Vacancy{
  id : number,
  name : string,
  description : string,
  salary : string,
  company : string,
}

export interface AuthToken {
  access: string
  refresh: string

}

export interface UserInfo {
  username: string
  token: string
  is_staff:boolean
}
export interface User{
  id:number
  username:string
  password:string
}

export interface RegisteredUser {
  id: number
  username: string;
}

export interface AccessTokenData{
  access: string;
}
export interface VacancyShort{
  id:number;
  name:string;
  salary:number;
}
export interface VacancyList{
  result: VacancyShort[];
}
