import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';


class TrainingForm extends Component {
  renderField(field) {
    const className = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : ''}`;
    return (
      <div className="form-group col-md-4">
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
      <div className="form-group col-md-4">
        <select
          placeholder={field.placeholder}
          className={className}
          type={field.type}
          {...field.input}
        >
          <option selected value="value1">Gender</option>
          <option>Male </option>
          <option>Female</option>
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
          rows="4"
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
    fetch('/trainingform', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({name:values.first + values.last,
                            height:values.height,
                            weight:values.weight,
                            email:values.email,
                            age: values.age,
                            gender:values.gender,
                            phone:values.phone,
                            body_fat:values.body_fat,

                            })
    })
    .then(res => res.json())
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="form-row justify-content-center">
          <Field
            placeholder="First"
            name="first"
            type="text"
            component={this.renderField}
          />
          <Field
            placeholder="Last"
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
            placeholder="Phone Number"
            name="phone"
            type="tel"
            component={this.renderField}
          />
          <Field
            placeholder="Age"
            name="age"
            type="integer"
            component={this.renderField}
          />
          <Field
            placeholder="Gender"
            name="gender"
            type="text"
            component={this.renderSelectField}
          />
          <Field
            placeholder="Weight(lbs)"
            name="weight"
            type="integer"
            component={this.renderField}
          />
          <Field
            placeholder="Height(in)"
            name="height"
            type="text"
            component={this.renderField}
          />
          <Field
            placeholder="Body Fat % (if known)"
            name="body_fat"
            type="text"
            component={this.renderField}
          />
        </div>
        <div className="form-row justify-content-center">
          <Field
            placeholder="What is your desired goal? (Build muscle, Lose body fat, Get stronger, ect.)"
            name="goals"
            type="textarea"
            component={this.renderTextField}
          />
          <Field
            placeholder="Tell me about your past fitness experience and current regimen."
            name="history"
            type="textarea"
            component={this.renderTextField}
          />
          <Field
            placeholder="Any foods you can't/won't eat? What is your current diet like?"
            name="goals"
            type="textarea"
            component={this.renderTextField}
          />
          <Field
            placeholder="What motivated you to take this step in your fitness journey?"
            name="motivation"
            type="textarea"
            component={this.renderTextField}
          />
          <Field
            placeholder="When is a specific time and date Lyn can call you to start your program?"
            name="motivation"
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
  if (!values.name) {
    errors.last = <strong>Oops! Forgot your Name.</strong>;
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
  form: 'TrainingForm'
})(TrainingForm);
