async function fetchCsv() {
    const response = await fetch(process.env.PUBLIC_URL + "hobbies.csv");
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    const data = csv.split("\n");
    return data.slice(1);
}

function uniqBy(a, key) {
    var seen = {};
    return a.filter(function(item) {
        var k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    })
}
var data = null;
fetchCsv().then((data) => {
    data = uniqBy(data, JSON.stringify);
})
export const DATA = data;
export const API_URL = "http://localhost:8000/";
export const STATIC_URL = API_URL + "static/util/";