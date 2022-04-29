
import Cookie from 'js-cookie'
const cookieName:string = 'blogsAuth'

// 设置cookie
export function setCookie(value:string){
  Cookie.set(cookieName,value)
}

// 获取cookie
export function getCookie(){
  return Cookie.get(cookieName)
}

// 清除cookie
export function removeCookie(){
  Cookie.remove(cookieName)
}
