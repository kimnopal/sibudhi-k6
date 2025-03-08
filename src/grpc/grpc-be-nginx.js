import http from 'k6/http'

export const options = {
    scenarios: {
        grpcNginx: {
            executor: 'constant-vus',
            exec: 'grpcNginxBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function grpcNginxBE() {
    http.get('http://grpc.pastilulus.me/api/reports')
}