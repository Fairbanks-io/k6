import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '60s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  http.get('https://fbnks.io/health');
  sleep(1);
};
