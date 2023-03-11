import axios from 'axios';


class BackEndAPI {
 constructor() {
  this.baseUrl = '/api';
 }

 async getUniversityInfo () {
  const { data } = await axios.get(
   `${this.baseUrl}/university-info`
  );
  return data;
 }
}

export const backEndAPI = new BackEndAPI();