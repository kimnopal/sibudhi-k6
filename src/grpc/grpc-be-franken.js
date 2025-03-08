import http from 'k6/http'

export const options = {
    scenarios: {
        grpcFranken: {
            executor: 'constant-vus',
            exec: 'grpcFrankenBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function grpcFrankenBE() {
    http.get('http://grpc.pastilulus.me/api/reports')
}