export interface IEmail {
  name: string;
  from: string;
  subject: string;
  body: string;
  email: string;
}

export function isValid(emailForm: IEmail) {

  return !emailForm.name
    && !emailForm.from
    && !emailForm.subject
    && !emailForm.body
    && !emailForm.email;
}
