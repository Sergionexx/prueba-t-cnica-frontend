export function api(url: string, endpoint:string){
  return url + endpoint
}

export const environment = {
  production: true,
  name:'prod',
  version: '1.0',
  _url: 'http://localhost:3001',
  api
};
