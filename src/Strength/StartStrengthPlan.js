import React, { Component } from 'react';
import { connect } from 'react-redux';
import { intakeStrengthForm } from '../actions';
import { Field, reduxForm} from 'redux-form';
import Alert from 'react-s-alert';
import { withRouter } from 'react-router-dom';

class Plan extends Component {

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

  renderContent() {
    switch (this.props.auth) {
      case null:
        return '';
      case true:
        return this.renderIntake();
      default:
        return this.renderIntake();
    }
  }

  onSubmit(values) {
    const { history, auth } = this.props;
    console.log(values);
    this.props.intakeStrengthForm(values, history, auth._id).then( () => Alert.success(<h3>Plan Ready!</h3>, {
      position: 'top',
      effect: 'scale',
    }));
  }

  renderIntake() {
    const {handleSubmit} = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="container">
            <Field
              placeholder="Age"
              name="age"
              type="number"
              component={this.renderField}
            />
            <Field
              placeholder="Weight (lbs)"
              name="weight"
              type="number"
              component={this.renderField}
            />
            <Field
              placeholder="Height (inches)"
              name="height"
              type="number"
              component={this.renderField}
            /><Field
              placeholder="Body Fat% (If you have it)"
              name="body_fat"
              type="number"
              component={this.renderField}
            />
            <button type="submit" className="btn btn-outline-primary">Start Plan!</button>
          </div>
        </form>
    );
  }


  render() {
    return (

          <div className="jumbotron">
            <h2>Strength Plan Intake Form!</h2>
            {this.renderIntake()}
          </div>

      );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default reduxForm({
  form:'Intakeform',
})(
  connect(mapStateToProps,{ intakeStrengthForm })(withRouter(Plan))
);
