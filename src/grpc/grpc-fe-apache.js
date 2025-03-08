import http from 'k6/http'

export const options = {
    scenarios: {
        grpcApache: {
            executor: 'constant-vus',
            exec: 'grpcApacheFE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function grpcApacheFE() {
    http.get('http://frontend.pastilulus.me/reports/rest')
}