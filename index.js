const WebSocket = require("ws") 

var token = "eyJraWQiOiIwMDAwMSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmYjY1MjYyZS03MGNkLTQxYTQtYjYzMC0yZGMxNTRlOGNlMjUiLCJhdWQiOiJhY2M6NDA5MTIyMjQiLCJpc3MiOiJodHRwczpcL1wvaWRwLmxpdmVwZXJzb24ubmV0IiwiZXhwIjoyMDQ2ODc5Mzk5LCJpYXQiOjE2MzY2MzkzNTksImp0aSI6IjBjZjMwN2EwLWQ4ZjMtNGY4Zi1iYmIwLTgyYTBjZjY1NzdjZiJ9.eAM0ogSfs5QaRuZCfvBIQXbkhms_f3e5X541KxDlEmbgq1MHEGapMbgCffX2d-NCf-kwRtE3dC0y8gv1f0EBoOlaEpevZtViFGGFJKRtUh7AquH1NEEEyhsJBojxDbQSgDRMgKoPmUpmp6XXyyahK_o5wfz7SbeaIG4RMqnCBVMbFu9mTmfTe4GpcnPItDMhzR30INvOvGb51m4T-bACD523shsXiwtyVY5IiWVJSxZurbcD_AMNBfAwGLfW16jmFS-C92KRqZmzMT-QL_f4WnXXPAgH90Y-TgoZySCqKbC-dDMWV-gzq3iC0T9pe0wpH06RGgaRpWmYVIdOgzr1NQ";
var options = {
    headers: {
        "Authorization" : "JWT " + token
    }
};

var ws = new WebSocket("wss://va.msg.liveperson.net/ws_api/account/40912224/messaging/consumer?v=3", options);

ws.onopen = function(event) {
    ws.send(JSON.stringify({"kind": "req", "id": 1, "type": "cm.ConsumerRequestConversation"}));
    console.log('Connection established')
};

ws.addEventListener('message', function (event) {
    console.log('Message from server:', event.data);
})

ws.onopen = function(event) {
    ws.send(JSON.stringify({"kind":"req","id":2,"type":"ms.PublishEvent","body":{"dialogId":"68805b84-689a-4c05-8c04-b5692abab91c","event":{"type":"ContentEvent","contentType":"text/plain","message":"Jaime's test"}}}));
    console.log('Message sent')
};





