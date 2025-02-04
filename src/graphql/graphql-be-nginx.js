import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlNginx: {
            executor: 'constant-vus',
            exec: 'graphqlNginxBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlNginxBE() {
    http.get('http://localhost:8000/api/reports')
}