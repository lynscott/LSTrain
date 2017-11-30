import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class ContactForm extends Component {
  renderField(field) {
    const className = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : ''}`;
    return (
      <div className="form-group col-md-3">
        <input
          placeholder={field.placeholder}
          className={className}
          type={field.type}
          {...field.input}
        />
        <div className="invalid-feedback">
          {field.meta.touched ? field.meta.error: ''}
        </div>

      </div>
    );
  }

  renderSelectField(field) {
    const className = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : ''}`;
    return (
      <div className="form-group col-md-3">
        <select
          placeholder={field.placeholder}
          className={className}
          type={field.type}
          {...field.input}
        >
          <option selected value="value1">Select An Option</option>
          <option>Fat Loss</option>
          <option>Mass Gain</option>
          <option>Online Training</option>
          <option>Just Saying Hi!</option>
        </select>
        <div className="invalid-feedback">
          {field.meta.touched ? field.meta.error: ''}
        </div>

      </div>
    );
  }

  renderTextField(field) {
    const className = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : ''}`;
    return (
      <div className="form-group col-md-6">
        <textarea
          placeholder={field.placeholder}
          className={className}
          type={field.type}
          rows="3"
          {...field.input}>
        </textarea>
        <div className="invalid-feedback">
          {field.meta.touched ? field.meta.error: ''}
        </div>

      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="form-row justify-content-center">
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
            component={this.renderSelectField}
          />
          <Field
            placeholder="Type Your Message Here!"
            name="message"
            type="textarea"
            component={this.renderTextField}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
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
    errors.last = <strong>Oops! Forgot your Last Name.</strong>;
  }
  if (!values.email) {
    errors.email = "Oops! Forgot your Email.";
  }
  if (values.subject ==="value1") {
    errors.subject = "Oops! Please choose an option.";
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
