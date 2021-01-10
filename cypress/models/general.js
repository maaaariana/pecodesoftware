
export function getSomeElements(){
    cy.get("body").then($body => {
        if ($body.find("#about_us_id").length > 0) { 
            cy.get('#about_us_id').should('exist');
            cy.get('#about_us_id').should('contain.text', 'Turning your ideas into reality');
        } else {
            sendMessage();
        }
    });

}

export function sendMessage(){
    var channelId = "G01HMB98XFV";
    //some trouble with token
    var token = "xoxp-347900769271-414824017409-918623091043-48c2a53f592d24a06398ee3bcfe51c85"; 
    var url = "https://slack.com/api/chat.postMessage";

    var headers = {
        "Authorization": "Bearer " + token,
        "Content-Type" : "application/json; charset=utf-8",
    }

    var body = {
        "channel": channelId,
        "text": "Something's wrong with pecode software website"
    }

    cy.request({
        "method": 'POST',
        "url": url, 
        "headers": headers,
        "body": JSON.stringify(body)
    })
    .then((response) => {
        expect(response).property('status').to.equal(200);
    });
}