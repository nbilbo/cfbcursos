// primeiro, definir o endpoint.
let endpoint = 'https://catfact.ninja/fact'

// segundo, fazemos a requisição.
// sinceramente, isso aqui é bizarro.
let page = fetch(endpoint)
.then((response)=>{ return response.json() })
.then((data)=>{ console.log(data) })