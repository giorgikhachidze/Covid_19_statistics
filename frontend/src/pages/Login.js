import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";
import {insertAuthData} from "../store/actions/auth";
import {useDispatch} from "react-redux";
import DefaultField from "../components/DefaultField";
import DefaultPasswordField from "../components/DefaultPasswordField";
import DefaultButton from "../components/DefaultButton";
import axiosInstance from "../axiosInstance";

const Login = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formDisabled, setFormDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initialMessagesState = {
    email: null,
    password: null,
  };
  const [messages, setMessages] = useState(initialMessagesState)

  const handleAuthorization = (event) => {
    event.preventDefault();

    setFormDisabled(true)
    axiosInstance.post('/login', {
      email,
      password,
    }).then((response) => {
      dispatch(insertAuthData(response.data))
      setMessages(initialMessagesState)
      setTimeout(function () {
        setFormDisabled(false)
        return navigate('/statistics');
      }, 1000)
    }).catch((error) => {
      const errors = error.response.data.errors;
      let messages = {}
      // eslint-disable-next-line array-callback-return
      Object.keys(errors).map(key => {
        messages[key] = errors[key][0]
      })
      setMessages(messages)
      setTimeout(function () {
        setFormDisabled(false)
      }, 1000)
    })
  }

  return (
    <div className="mt-10 px-6 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
      <h2
        className="text-center text-3xl text-red-500 firago-medium-upper font-display lg:text-left xl:text-4xl xl:text-bold">{t('authorization')}</h2>
      <p className="text-sm text-gray-600 firago-medium mt-4">{t('authorization.text')}</p>
      <div className="mt-12">
        <form>
          <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0 mt-2">
            <DefaultField value={email} onChange={setEmail} element={1} type="email" name="email" title={t('email')} placeholder={t('enter.email')} message={messages.email} disabled={formDisabled}/>
            <DefaultPasswordField value={password} onChange={setPassword} element={1} type="password" name="password" title={t('password')} placeholder="********" message={messages.password} disabled={formDisabled}/>
          </div>
          <div className="mt-6">
            <DefaultButton onClick={handleAuthorization} title={t('login')} loadingTitle={t('loading')} disabled={formDisabled}/>
          </div>
        </form>
        <div className="mt-6 text-sm font-display firago-medium text-gray-700 text-center">
          {t('no.account.text')} <Link to="/register" className="cursor-pointer text-red-500 hover:text-red-600">{t('registration')}</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;