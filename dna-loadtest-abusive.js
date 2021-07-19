import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 5000,
  duration: '60s',
};

export default function () {
  http.get('https://kube.fairbanks.dev');
  sleep(1);
};
