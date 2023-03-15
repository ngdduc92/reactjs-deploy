import React from 'react';
import style from './RegisterForm.module.scss';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import ImgRegister from '../../../assets/img/ImgRegister.png';
function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={clsx(style.WrapperRegisterForm)}>
      <div className={clsx(style.RegisterMain)}>
        <div className={clsx(style.RegisterImg)}>
          <img src={ImgRegister} alt="ImgRegister" />
        </div>
        <div className={clsx(style.RegisterForm)}>
          <h2 className={clsx(style.FormTitle)}>Stay in the Know!</h2>
          <p className={clsx(style.FormSubTitle)}>
            Don't get left behind!
            <br /> Subscribe to our newsletters today!
          </p>
          <form className={clsx(style.RegisterFormMain)} onSubmit={handleSubmit(onSubmit)}>
            <div className={clsx(style.FormInput)}>
              <input
                {...register('name', { required: true })}
                aria-invalid={errors.name ? 'true' : 'false'}
                placeholder="Name"
              />
            </div>
            {errors.name?.type === 'required' && <p role="alert">First name is required</p>}
            <div className={clsx(style.FormInput)}>
              <input
                className={clsx(style.FormInput)}
                {...register('mail', { required: 'Email Address is required' })}
                aria-invalid={errors.mail ? 'true' : 'false'}
                placeholder="Email"
              />
            </div>
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

            <select className={clsx(style.FormSelect)} {...register('Country')}>
              <option value="">Country</option>
              <option value="A">Country B</option>
              <option value="B">Country C</option>
              <option value="other">Country other</option>
            </select>
            <select className={clsx(style.FormSelect)} {...register('Platform')}>
              <option value="">Platform</option>
              <option value="A">Platform A</option>
              <option value="B">Platform C</option>
              <option value="other">Platform other</option>
            </select>
            <div className={style.CheckBoxItem}>
              <input type="checkbox" placeholder="January" {...register('January', {})} className="mx-3" />
              <label htmlFor="">
                By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions
                and I have read the Privacy Policy.
              </label>
            </div>
            <div className={style.CheckBoxItem}>
              <input type="checkbox" placeholder="January" {...register('January', {})} className="mx-3" />
              <label htmlFor="">
                I agree to receive promotional offers relating to all Gameloft games and services.
              </label>
            </div>
            <div className={style.CheckBoxSubmit}>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
