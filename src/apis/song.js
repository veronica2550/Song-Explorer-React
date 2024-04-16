import axios from 'axios';
export function getSongs(searchText) {
  return axios.get(`https://api.manana.kr/karaoke/song/${searchText}/tj.json`);
}