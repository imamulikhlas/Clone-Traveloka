import React, { Component } from 'react';
import { Button, ActivityIndicator } from 'react-native';
import { Form as FormNB, Item } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import TextInput from '../../redux/redux-form/TextInput';

const required = value => value ? undefined : 'This field is required';

class Form extends Component {
  render() {
    return (
      <FormNB>
        <Field
          component={TextInput}
          name="location"
          placeholder="Location"
          validate={[ required ]}
          
        />
        {this.props.hotels.isLoading
        ? <ActivityIndicator />
        : <Button
          onPress={this.props.handleSubmit}
          title="Search" />}
      </FormNB>
    )
  }
}

const wrapperForm = reduxForm({
  form: 'formHotel',
})(Form);

export default wrapperForm;