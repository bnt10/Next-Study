function path(root: string, sublink: string) {
  return `${root}${sublink}`
}

const ROOT_AUTH = '/auth'

export const APP_PATH = {
  root: '/',
}

export const AUTH_PATH = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, '/login'),
}

export {}
