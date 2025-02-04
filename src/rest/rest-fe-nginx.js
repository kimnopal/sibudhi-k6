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
    http.get('http://103.186.1.33/reports/rest')
}