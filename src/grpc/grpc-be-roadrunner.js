import http from 'k6/http'

export const options = {
    scenarios: {
        grpcRoadRunner: {
            executor: 'constant-vus',
            exec: 'grpcRoadRunnerBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function grpcRoadRunnerBE() {
    http.get('http://grpc.pastilulus.me/api/reports')
}