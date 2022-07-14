import Image from 'next/image';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { css } from '@emotion/css';

// Images
import ContactBanner from '../../img/banner/ContactBanner.png';

const Contact = () => {

  const initialVal = {
   name: '',
   company: '',
   email: '',
   phonenumber: '',
   question: ''
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    name: Yup.string().required('Name required').min(3).max(50),
    company: Yup.string().required('Company required').min(3).max(50),
    email: Yup.string().email('Invalid email address').required('Email required'),
    phonenumber: Yup.string().required("Phone number required")
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(9, "Number to short")
    .max(13, "Number to long"),
    question: Yup.string().required('Question required').min(5).max(120)
  })

  const ContactUs = (values) =>{
    window.location.href = `mailto:hello@mediaxasia.com?subject=[${values.name}]-[${values.email}]-[${values.phonenumber}]-[${values.company}]&body=${values.question}`
  }

  return(
    <div className="mxa-contact-page min-h-fit py-0 md:pt-4 pb-4 md:pb-16">
      <div className="container">
        <div className="grid grid-cols-1 justify-center xl:grid-cols-2 gap-4">
          <div>
            <div className="mx-auto text-center">
              <Image width={526} height={341} src={ContactBanner} alt="Contact Banner"/>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-normal mb-[18px] md:mb-5">If you require any further information or assistance, please fill the form below so we can reach you immediately.</h4>
            <Formik
            initialValues={initialVal}
            validationSchema={validationSchema}
            onSubmit={ContactUs}>
            {({values}) => (
              <Form>
                <div className="mb-5">
                  <label htmlFor="name">Name</label>
                  <Field type='text' id='name' name='name' autoComplete="off"/>
                  <div className="error-message"><ErrorMessage name="name"/></div>
                </div>
                <div className="mb-5">
                  <label htmlFor="company">Company</label>
                  <Field type='text' id='company' name='company' autoComplete="off"/>
                  <div className="error-message"><ErrorMessage name="company"/></div>
                </div>
                <div className="mb-5">
                  <label htmlFor="email">Email</label>
                  <Field type='text' id='email' name='email' autoComplete="off"/>
                  <div className="error-message"><ErrorMessage name="email"/></div>
                </div>
                <div className="mb-5">
                  <label htmlFor="phonenumber">Mobile Number</label>
                  <Field type='text' id='phonenumber' name='phonenumber' autoComplete="off"/>
                  <div className="error-message"><ErrorMessage name="phonenumber"/></div>
                </div>
                <div className="mb-5">
                  <label htmlFor="question">Question</label>
                  <Field type='text' id='question' name='question' as="textarea" rows="3" cols="40" autoComplete="off"/>
                  <div className="error-message"><ErrorMessage name="question"/></div>
                </div>
                <button className={`mxa-btn-submited mt-7 ${css `letter-spacing: 1px;`}`} type="submit">Send</button>
                {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
              </Form>
            )}
            </Formik>
          </div>
        </div>

        <hr className="mxa-hr w-full my-14 md:my-20"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-20">
          <div>
            <h5 className="text-xl font-semibold mb-4">Address</h5>
            <p className="text-lg font-normal mb-2">Wisma 77 tower 2, 3rd Floor</p>
            <p className="text-lg font-normal mb-2">Jl. Letjen S Parman Kav. 77 Jakarta Barat 11410</p>
          </div>
          <div className="ml-0 md:ml-12">
            <h5 className="text-xl font-semibold mb-4">Contact</h5>
            <Link href="mailto:hello@mediaxasia.com"><a className="text-lg font-normal mb-2 block cursor-pointer hover:text-red-500 ">hello@mediaxasia.com</a></Link>
            <Link href="tel:02129675858"><a className="text-lg font-normal mb-2 block cursor-pointer hover:text-red-500 ">021-29675858</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;