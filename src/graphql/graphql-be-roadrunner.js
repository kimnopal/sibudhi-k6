import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlRoadRunner: {
            executor: 'constant-vus',
            exec: 'graphqlRoadRunnerBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlRoadRunnerBE() {
    http.get('http://graphql.pastilulus.me/graphql?query=query+Reports{reports{id,name,email,status,service{name},serviceType{name},noHandphone,description}}')
}