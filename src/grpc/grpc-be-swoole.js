import http from 'k6/http'

export const options = {
    scenarios: {
        grpcSwoole: {
            executor: 'constant-vus',
            exec: 'grpcSwooleBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function grpcSwooleBE() {
    http.get('http://grpc.pastilulus.me/api/reports')
}