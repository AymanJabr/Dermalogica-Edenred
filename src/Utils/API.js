import axios from 'axios'
const USERNAME = localStorage.getItem("username");
const MID = localStorage.getItem("mid")
const ACCESS_TOKEN = localStorage.getItem("access_token")
const CODE = localStorage.getItem("code")
const PAYMENT_CLIENT_ID = localStorage.getItem("payment_client_id")
const PAYMENT_CLIENT_SECRET = localStorage.getItem("payment_client_secret")
const AUTHORIZATION_ID = localStorage.getItem("authorization_id")
const AUTHENTICATION_REFRESH_TOKEN = localStorage.getItem("refresh_token")

const AUTHENTICATION_URL = process.env.AUTHENTICATION_URL
const AUTHENTICATION_CLIENT_ID = process.env.AUTHENTICATION_CLIENT_ID
const AUTHENTICATION_REDIRECT_URL = process.env.AUTHENTICATION_REDIRECT_URL
const AUTHENTICATION_SCOPE = process.env.AUTHENTICATION_SCOPE
const PAYMENT_URL = process.env.PAYMENT_URL


const getEdenredLogin = (product) => {
    axios.get(`https://sso.sbx.edenred.io/connect/authorize?response_type=code&client_id= ${AUTHENTICATION_CLIENT_ID}&scope=openid%20edg-xp-mealdelivery-api%20offline_access&redirect_uri= ${REDIRECT_URL}&state=abc123&nonce=456azerty&acr_values=tenant:it-${product}&ui_locales=it-IT`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
}


const getAccessTokenFromAuthorizationCode = () => {
    let body = {
        'grant_type': 'authorization_code',
        'redirect_uri': `${{ AUTHENTICATION_REDIRECT_URL }}`,
        'client_id': `${{ PAYMENT_CLIENT_ID }}`,
        'code': `${{ CODE }}`,
        'client_secret': `${{ PAYMENT_CLIENT_SECRET }}`,
    }

    axios.post(`${{ AUTHENTICATION_URL }}/connect/token`, body)
        .then(response => { })
        .catch(error => {
        });
}

const getAccessTokenFromRefreshToken = () => {
    let body = {
        'grant_type': 'refresh_token',
        'client_id': `${{ PAYMENT_CLIENT_ID }}`,
        'client_secret': `${{ PAYMENT_CLIENT_SECRET }}`,
        'refresh_token': `${{ AUTHENTICATION_REFRESH_TOKEN }}`,
        'scope': `${{ AUTHENTICATION_SCOPE }}`,
    }

    axios.post(`${{ AUTHENTICATION_URL }}/connect/token`, body)
        .then(response => { })
        .catch(error => {
        });
}

const getBalances = () => {
    axios.get(`${{ PAYMENT_URL }}/users/${{ USERNAME }}/balances?mid=${{ MID }}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
}

const estimateCharge = (amount) => {
    let body = {
        'amount': `${{ amount }}`,
    }

    let headers = {
        'Authorization': `Bearer ${{ ACCESS_TOKEN }}`,
        'Content-Type': `application/json`,
        'Connection': `keep-alive`,
        'X-Client-Id': `${{ PAYMENT_CLIENT_ID }}`,
        'X-Client-Secret': `${{ PAYMENT_CLIENT_SECRET }}`,
    }

    axios.post(`${{ PAYMENT_URL }}/users/${{ USERNAME }}/actions/estimate-charge?product_class=${{ product_class }}`, body, headers)
        .then(response => { })
        .catch(error => {
        });
}

const authorizeTransaction = (product_class, amount, value, count) => {
    let body = {
        "mid": `${{ MID }}`,
        "amount": amount,
        "vouchers": [
            {
                "value": value,
                "count": count
            }
        ],
        "capture_mode": "manual",
    }

    let headers = {
        'Authorization': `Bearer ${{ ACCESS_TOKEN }}`,
        'Content-Type': `application/json`,
        'Connection': `keep-alive`,
        'X-Client-Id': `${{ PAYMENT_CLIENT_ID }}`,
        'X-Client-Secret': `${{ PAYMENT_CLIENT_SECRET }}`,
    }

    axios.post(`${{ PAYMENT_URL }}/transactions?product_class=${{ product_class }}`, body, headers)
        .then(response => { })
        .catch(error => {
        });
}

const cancelAuthorizedTransaction = (amount, product_class) => {
    let body = {
        "amount": amount,
    }

    let headers = {
        'Authorization': `Bearer ${{ ACCESS_TOKEN }}`,
        'Content-Type': `application/json`,
        'Connection': `keep-alive`,
        'X-Client-Id': `${{ PAYMENT_CLIENT_ID }}`,
        'X-Client-Secret': `${{ PAYMENT_CLIENT_SECRET }}`,
    }

    axios.post(`${{ PAYMENT_URL }}/transactions/${{ AUTHORIZATION_ID }}/actions/cancel?product_class=${{ product_class }}`, body, headers)
        .then(response => { })
        .catch(error => {
        });
}

const captureAuthorizedTransaction = (amount, product_class) => {
    let body = {
        "amount": amount,
    }

    let headers = {
        'Authorization': `Bearer ${{ ACCESS_TOKEN }}`,
        'Content-Type': `application/json`,
        'Connection': `keep-alive`,
        'X-Client-Id': `${{ PAYMENT_CLIENT_ID }}`,
        'X-Client-Secret': `${{ PAYMENT_CLIENT_SECRET }}`,
    }

    axios.post(`${{ PAYMENT_URL }}/transactions/${{ AUTHORIZATION_ID }}/actions/capture?product_class=${{ product_class }}`, body, headers)
        .then(response => { })
        .catch(error => {
        });
}

const refundCapturedTransaction = (amount,) => {
    let body = {
        "amount": amount,
    }

    let headers = {
        'Authorization': `Bearer ${{ ACCESS_TOKEN }}`,
        'Content-Type': `application/json`,
        'Connection': `keep-alive`,
        'X-Client-Id': `${{ PAYMENT_CLIENT_ID }}`,
        'X-Client-Secret': `${{ PAYMENT_CLIENT_SECRET }}`,
    }

    axios.post(`${{ PAYMENT_URL }}/transactions/${{ AUTHORIZATION_ID }}/actions/refund?product_class=${{ product_class }}`, body, headers)
        .then(response => { })
        .catch(error => {
        });
}