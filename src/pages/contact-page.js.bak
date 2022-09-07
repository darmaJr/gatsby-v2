import React, { useState } from "react"
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo';

import Layout from '../components/layout'

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation($clientMutationId: String!, $name: String!, $subject: String!, $email: String!, $message: String!){
    createSubmission(input: {clientMutationId: $clientMutationId, name: $name, subject: $subject, email: $email, message: $message}) {
      success
      data
    }
  }
`

const ContactPage = () => {

  const [nameValue, setNameValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [messageValue, setMessageValue] = useState('')

  return (
    <Layout>
    <div className="section jumbotron">
      <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
      <div className="section text-normal">
      <div className="row"><div className="col-md-6">
      <Mutation mutation={CONTACT_MUTATION}>
        {(createSubmission, { loading, error, data }) => (
          <React.Fragment>
          <form
            onSubmit={async event => {
              event.preventDefault()
              createSubmission({
                variables: {
                  clientMutationId: 'message',
                  name: nameValue,
                  subject: subjectValue,
                  email: emailValue,
                  message: messageValue
                }
              })
            }}
          >
          <div className="form-row">

            <label htmlFor='nameInput' className="col-sm-2 control-label">Name </label>
            <input className="col-sm-10" id='nameInput' value={nameValue}
              onChange={event => {
                setNameValue(event.target.value)
              }}
            />

            <br /><br />

            <label htmlFor='subjectInput' className="col-sm-2 control-label">Subjek </label>
            <input className="col-sm-10" id='subjectInput' value={subjectValue}
              onChange={event => {
                setSubjectValue(event.target.value)
              }}
            />

            <br /><br />

            <label htmlFor='emailInput' className="col-sm-2 control-label">Email </label>
            <input className="col-sm-10" id='emailInput' value={emailValue}
              onChange={event => {
                setEmailValue(event.target.value)
              }}
            />

            <br /><br />

            <label htmlFor='messageInput' className="col-sm-2 control-label">Message </label>
            <textarea id='messageInput' className="col-sm-10" value={messageValue}
              onChange={event => {
                setMessageValue(event.target.value)
              }}
            >
            </textarea>

            <br/><br/>

				</div>            
            <div className="form-group">
            <div className="col-sm-offset-2 button">
            <button className="btn btn-primary" type="submit">Send it!</button>
				</div>	
				</div>			
          </form>

          <div style={{ padding: '20px' }}>

            {loading && <p>Loading...</p>}
            {error && (
              <p>An unknown error has occured, please try again later...</p>
            )}
            {data && <p>Your message has been delivered, thank you for your message</p>}
          </div>
          </React.Fragment>
        )}
      </Mutation>
      </div>
      <div className="col-md-6">
		<iframe title="maps PT imani prima" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8171229267023!2d106.81663921423758!3d-6.287753063293558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f21e0c9a2983%3A0x46d8e5a1241eca4b!2sImani%20Prima!5e0!3m2!1sid!2sid!4v1637103877936!5m2!1sid!2sid" allowfullscreen="allowfullscreen" width="600" height="450"></iframe>
      </div>
      </div>
      </div>
      </div>
    </Layout>
  )

}

export default ContactPage;