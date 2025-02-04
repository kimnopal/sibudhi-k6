import http from 'k6/http'
export const options = {
    scenarios: {
        monolithNginx: {
            executor: 'constant-vus',
            exec: 'monolithNginxTest',
            vus: 10,
            duration: '30s',
        }
    }
};

export function monolithNginxTest() {
    http.get('http://103.181.142.44/reports')
}