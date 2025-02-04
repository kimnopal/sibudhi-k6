import http from 'k6/http'

export const options = {
    scenarios: {
        restNginx: {
            executor: 'constant-vus',
            exec: 'restNginxBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function restNginxBE() {
    http.get('http://localhost:8000/api/reports')
}