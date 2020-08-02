import axios from 'axios';

export const getMadd = async () => {
  const obj = {};
  const url =
    'https://api.cbs.gov.il/index/data/price?id=120010&format=json&download=false&last=2&coef=true';

  await axios.get(url).then((res) => {
    console.log(res.data.month[0]);
    //result = { name: 'ilan', last: 'barlev' };
    obj = {
      code: res.data.month[0].code,
      date: res.data.month[0].date,
      name: res.data.month[0].name,
    };
  });
  console.log(obj);
  return obj;
};
