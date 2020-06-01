module.exports = async function (context, req) {
    context.res = {
        status: 302,
        headers: {
            "location": "https://delightful-island-0d63ac010.azurestaticapps.net/thankyou.html"
        }
    };
};