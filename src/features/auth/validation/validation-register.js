import Joi from 'joi';
import validate from '../../../utils/validate';

const registerSchema = Joi.object({

    // =============== < FirstName > =============== //
  firstName: Joi.string().required().trim().messages({
    'string.empty': 'first name is required'
  }),

  // =============== < LastName > =============== //
  lastName: Joi.string().required().trim().messages({
    'string.empty': 'last name is required'
  }),

  // =============== < Email > =============== //
  email: 
    Joi.string().email({ tlds: false })
    .required()
    .messages({
      'alternatives.match': 'invalid email address'
    }),

  // =============== < Mobile > =============== //
  mobile:
    Joi.string().pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      'alternatives.match': 'invalid mobile number'
    }),

    // =============== < Password > =============== //
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      'string.empty': 'password is required',
      'string.pattern.base':
        'password must be at least 6 characters and contain only alphabet and number'
    }),
    
    // =============== < ConfirmPassword > =============== //
  confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
    'string.empty': 'confirm password is required',
    'any.only': 'password and confirm password did not match'
  })
});

const validateRegister = input => validate(registerSchema)(input);
export default validateRegister;