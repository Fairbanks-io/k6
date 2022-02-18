import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  // The following config would have k6 ramping up from 1 to 25 VUs for 1 minute,
  // then staying flat at 50 VUs for 5 mins, then ramping up from 50 to 75 VUs over
  // the next 5 mins before finally ramping down to 0 VUs for another minute
  stages: [
    { duration: '1m', target: 25 },
    { duration: '5m', target: 50 },
    { duration: '5m', target: 75 },
    { duration: '1m', target: 0 },
  ],
};

export default function () {
  http.get('https://fn.fairbanks.dev/function/nodeinfo');
  sleep(1);
};
