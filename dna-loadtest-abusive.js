import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 7500,
  duration: '300s',
};

export default function () {
  http.get('https://kube.fairbanks.dev');
  sleep(1);
};
