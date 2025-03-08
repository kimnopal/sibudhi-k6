import http from 'k6/http'

export const options = {
    scenarios: {
        grpcApache: {
            executor: 'constant-vus',
            exec: 'grpcApacheBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function grpcApacheBE() {
    http.get('http://grpc.pastilulus.me/api/reports')
}