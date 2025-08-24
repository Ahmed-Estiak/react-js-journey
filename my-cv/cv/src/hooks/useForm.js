import { useState } from "react";

export function useForm(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({...prev, [name]: value}));

    if (touched[name] && validationRules[name]) {
      const error = validationRules[name](value, values);
      setErrors(prev => ({...prev, [name]: error}));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({...prev, [name]: true}));
    if (validationRules[name]) {
      const error = validationRules[name](values[name], values);
      setErrors(prev => ({...prev, [name]: error}));
    }
  };
  const validate = () => {
    const newErrors = {};
    Object.keys(validationRules).forEach(field=>{
      const error = validationRules[field] (values[field], values);
      if (error) {
        newErrors[field] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
    isValid: Object.keys(errors).length === 0,
  }
}