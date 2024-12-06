import * as Yup from 'yup';


// contact_schema
export const contact_schema = Yup.object().shape({
  name: Yup.string().required(), 
  email: Yup.string().required(),
  phone: Yup.string().required(),
  massage: Yup.string().required(),
});

export const register_schema = Yup.object().shape({
  fName: Yup.string().required(),
  lName: Yup.string().required(),
  email: Yup.string().required().email(),
  phone: Yup.string().required(),
  password: Yup.string().required().min(6),
});

export const login_schema = Yup.object().shape({
  email: Yup.string().required().email(),
  phone: Yup.string().required(),
  password: Yup.string().required().min(6),
});
//forgot schema
export const forgotten_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email")
});
//blog schema
export const commentSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comment: Yup.string().required().min(20).label("Comment")
});

// apply form schema

export const job_apply_schema = Yup.object().shape({
  fullName: Yup.string().required(),
  email: Yup.string().required().email(),
  dateOfBirth: Yup.string().required(),
  address: Yup.string().required(),
  jobPosition: Yup.string().required(),
  portfolio: Yup.string().required(),
  resume: Yup.string().optional(),
  certificate: Yup.string().optional(),
  skills: Yup.string().required(),
  linkedin: Yup.string().required(),
  refarence: Yup.string(),
  salllay: Yup.string().required(),
  technicalSkills: Yup.string(),
  leadership: Yup.string(),
  workExperience: Yup.string().required(),
  phone: Yup.string().required(),
  careerGoal: Yup.string().required().max(20),
  language: Yup.string().required(),
  question: Yup.string().optional(),
  aboutUs: Yup.string().optional(),
  offerLetter: Yup.string().optional(),
});
export const user_profile_schema = Yup.object().shape({
  fullName: Yup.string().required(),
  email: Yup.string().required().email(),
  Password: Yup.string().required(),
  phone: Yup.string().required(),
});