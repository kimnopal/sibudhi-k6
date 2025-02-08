import http from 'k6/http'

export const options = {
    scenarios: {
        graphqlSwoole: {
            executor: 'constant-vus',
            exec: 'graphqlSwooleBE',
            vus: 10,
            duration: '30s',
        },
    }
};

export function graphqlSwooleBE() {
    http.get('http://graphql.pastilulus.me/graphql?query=query+Reports{reports{id,name,email,status,service{name},serviceType{name},noHandphone,description}}')
}