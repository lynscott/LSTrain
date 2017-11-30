import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class ContactForm extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <input
          placeholder={field.placeholder}
          className="form-control"
          type={field.type}
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          placeholder="First Name"
          name="first"
          type="text"
          component={this.renderField}
        />
        <Field
          placeholder="Last Name"
          name="last"
          type="text"
          component={this.renderField}
        />
        <Field
          placeholder="Email"
          name="email"
          type="email"
          component={this.renderField}
        />
        <Field
          placeholder="Interest"
          name="subject"
          type="text"
          component={this.renderField}
        />
        <Field
          placeholder="Type Your Message Here!"
          name="message"
          type="textarea"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

}

function validate(values) {

  const errors = {};
  if (!values.first) {
    errors.first = "Oops! Forgot your First Name.";
  }
  if (!values.last) {
    errors.last = "Oops! Forgot your Last Name.";
  }
  if (!values.email) {
    errors.email = "Oops! Forgot your Email.";
  }
  if (!values.subject) {
    errors.subject = "Oops! Please enter an Interest.";
  }
  if (!values.message) {
    errors.message = "Oops! Your message needs a message!";
  }


  return errors;
}

export default reduxForm({
  validate,
  form: 'ContactForm'
})(ContactForm);
