// import { ARRAY_ERROR} from "final-form";
import isValidEmail from '../helperFunctions/emailsValidator';
var validUrl = require("valid-url");

export default values => {
  const errors = {}
  if (!values.first_name) {
    errors.first_name = 'First name must be a string of alphabetical characters, and is required';
  }
  if (!values.last_name) {
    errors.last_name = 'First name must be a string of alphabetical characters, and is required';
  }
  if (!isValidEmail(values.email)) {
    errors.email = "Email must be a string in a valid email format, and is required";
  }
  if (!values.organisation) {
    errors.organisation = 'Organisation must be a string, and is required';
  }

  // VALIDATING SOCIAL MEDIA URL
  if (values.socials && values.socials.length > 0) {
    const socialsArrayErrors = [];
    values.socials.forEach((social, idx) => {
      const socialMediaErrors = {};
      if (!social || !social.name) {
        socialMediaErrors.name = "Required";
        socialsArrayErrors[idx] = socialMediaErrors;
      } else if (values.socials.length && social.name && !validUrl.isWebUri(social.name)) {
        socialMediaErrors.name = "Please provide a valid url i.e. http://facebook.com";
        socialsArrayErrors[idx] = socialMediaErrors;
      } else if (values.socials.length > 5) {
        socialMediaErrors._errorLinks = "You have provided too many links";
        socialsArrayErrors[idx] = socialMediaErrors;
      }
      return socialMediaErrors;
    })
    if (socialsArrayErrors.length) errors.socials = socialsArrayErrors;
  } else {
    errors.socials = [];
    errors.socials['_error'] = 'Must provide at least one link of a social media page'
  }

  if (!values.description) {
    errors.description =
      " Description must be a string of text with a maximum length of 5000 characters, and is required ";
  }
  if (!values.suburb) {
    errors.suburb = "Required";
  }
  if (!values.zipCode) {
    errors.zipCode = "Required";
  }
  if (!values.local_council_details) {
    errors.local_council_details = ' Local council details must be a string of text with a maximum length of 200 characters, and is optional';
  }
  console.log("All Errors to See", errors);
  //  let socialsArrayErrors = [];
  //  if (!values.socials) {
  //    errors.socials = {_error: "At least one social media link must be entered"};
  //    console.log("Starting<<<<<<<<....>>>", errors.socials);
  //  }



  // else if (!values.socials.length){
  //  // errors.socials = 'At least one social media link must be entered'
  // }
  //  else if (values.socials.length > 0) {
  //    console.log("Starting....>>> !Socials.length", values.socials.length);
  //    console.log("Starting....>>> !Socials", !values.socials);
  //    const socialsArrayErrors = [];
  //    values.socials.forEach((social, idx) => {
  //      const socialMediaErrors = {};
  //      if (!social || !social.name) {
  //        socialMediaErrors.name = "Required";
  //        socialsArrayErrors[idx] = socialMediaErrors;
  //        console.log("ending Starting....>>>");
  //      } else if (values.socials.length && social.name && !validUrl.isWebUri(social.name)) {
  //        socialMediaErrors.name = "Not a valid url";
  //        socialsArrayErrors[idx] = socialMediaErrors;
  //      }
  //      return socialMediaErrors;
  //    });
  //    if (socialsArrayErrors.length) errors.socials = socialsArrayErrors;
  //  }

  return errors
}
