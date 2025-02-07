import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlApache: {
            executor: 'constant-vus',
            exec: 'graphqlApacheFE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlApacheFE() {
    http.get('http://frontend.pastilulus.me/reports/graphql')
}