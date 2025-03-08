import http from 'k6/http'

export const options = {
    scenarios: {
        grpcNginx: {
            executor: 'constant-vus',
            exec: 'grpcNginxFE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function grpcNginxFE() {
    http.get('http://frontend.pastilulus.me/reports/rest')
}