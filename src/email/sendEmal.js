import { createTransport } from "nodemailer";
import { emailTemplate } from "./emailTemplate.js";
import jwt from 'jsonwebtoken'
export function sendEmail(email){

const transporter = createTransport({
service:'gmail',
auth: {
    user: "islammohamed3235@gmail.com",
    pass: "rwzzxesmahwalsmw",
},
});
let token = jwt.sign({email},process.env.JWT_SECRET)
async function main() {

const info = await transporter.sendMail({
    from: '"Saraha verify" <islammohamed3235@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello to saraha", // Subject line
    text: "verify your email", // plain text body
    html: emailTemplate(token), // html body
});

console.log("Message sent: %s", info.messageId);

}

main().catch(console.error);
}