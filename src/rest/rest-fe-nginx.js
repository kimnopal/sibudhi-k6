import http from 'k6/http'

export const options = {
    scenarios: {
        restNginx: {
            executor: 'constant-vus',
            exec: 'restNginxFE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function restNginxFE() {
    http.get('http://frontend.pastilulus.me/reports/rest')
}