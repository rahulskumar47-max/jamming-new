const clientId = 'bb72048a469445e1927d1a093cc7909b'
const redirectUri = 'http://127.0.0.1:5174/callback';
const scopes = 'playlist-modify-public playlist-modify-private';
async function generateCodeChallenge(codeVerifier){
    const data =  new TextEncoder().encode(codeVerifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    const base64 = btoa(String.fromCharCode(...new Uint8Array(digest)));
    const codeChallenge = base64
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
    return codeChallenge
}
async function authorize() {
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.set('client_id',clientId);
    authUrl.searchParams.set('redirect_uri',redirectUri);
    authUrl.searchParams.set('scope',scopes);
    authUrl.searchParams.set('response_type', 'code');
    const codeVerifier = crypto.randomUUID();
    localStorage.setItem('code_verifier', codeVerifier);
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    authUrl.searchParams.set('code_challenge_method', 'S256');
    authUrl.searchParams.set('code_challenge', codeChallenge);
    window.location.href = authUrl.toString();

}
const params = new URLSearchParams(window.location.search);
const code = params.get('code');
const isCallback = window.location.pathname === '/callback';
async function handleCallback(){
        const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
     },
     body: new URLSearchParams({
         client_id: clientId,
         grant_type: 'authorization_code',
         code: code,
         redirect_uri: redirectUri,
         code_verifier: localStorage.getItem('code_verifier')
     })

});
const data = await response.json();
if (data.access_token) {
    localStorage.setItem('access_token', data.access_token);
}

    }
if(isCallback){
    handleCallback()
}
    



export default authorize;