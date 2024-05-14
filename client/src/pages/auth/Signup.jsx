/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { register as registerAction } from "../../redux/jobSlice copy";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Email must be in correct format")
    .required("Email is required"),
  phone: yup.string().trim().required("Please Enter Phone Number"),
  password: yup
    .string()
    .required("Enter password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long."
    ),
});

const Signup = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();
  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState,
    getValues,
    setValue,
    trigger,
    register,
  } = methods;
  const { errors, isValid, dirtyFields } = formState;

  useEffect(() => {
    setIsEnabled(dirtyFields && isValid);
  }, [formState]);

  const handleAddClick = () => {
    const formValues = getValues();
    // setLoader(true);
    const formData = {
      username: formValues.name,
      email: formValues.email,
      password: formValues.password,
      phone: formValues.phone,
    };

    dispatch(registerAction(formData));
    // // code optimization
    // const action = props?.mode === 'edit' ? updateSecAdj(formData) : addSecAdj(formData);
    // dispatch(action)
    //   .then(() => {
    //     dispatch(
    //       getSecAdj({
    //         limit,
    //         page: 1,
    //         status: tabValue,
    //         search: '',
    //         sortBy: order.id,
    //         sortOrder: order.direction,
    //       })
    //     );
    //     setLoader(false);
    //     reset(schema);
    //     props.onClick();
    //   })
    //   .catch((error) => {
    //     setLoader(false);
    //   });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up as a new user
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(handleAddClick)}
        >
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                {...register("email")}
                id="email"
                name="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                {...register("name")}
                id="name"
                name="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Phone
            </label>
            <div className="mt-2">
              <input
                {...register("phone")}
                id="phone"
                name="phone"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            <div className="mt-2">
              <input
                {...register("password")}
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-all ${
                isEnabled === true
                  ? "bg-indigo-600 hover:bg-indigo-500"
                  : "bg-gray-300"
              }`}
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <NavLink to="/signin">
            <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Signin
            </a>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
