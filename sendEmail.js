var serviceId = "default_service";
var templateId = "bolbocitemplate";

function sendEmail(emailjs, message, name) {

    var templateParams = {
        "name": name,
        "incident_message": message
    }

    emailjs.send(serviceId, templateId, templateParams)
        .then(function (response) {
            console.log('Succesfully sent email', response.status, response.text);
        }, function (error) {
            console.log('FAILED sending email', error);
        });
}