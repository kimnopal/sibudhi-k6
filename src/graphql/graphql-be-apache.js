import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlApache: {
            executor: 'constant-vus',
            exec: 'graphqlApacheBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlApacheBE() {
    http.get('http://graphql.pastilulus.me/graphql?query=query+Reports{reports{id,name,email,status,service{name},serviceType{name},noHandphone,description}}')
}